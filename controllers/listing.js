const Listing = require('../models/listing.js');

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const maptoken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({accessToken :maptoken });

module.exports.index = async(req,res)=>{
  let allListings =  await Listing.find({});
  res.render('./listings/index.ejs' , {data : allListings});
}

module.exports.filter =  async(req,res,next)=>{
    const {category} = req.query;
    const allListings = await Listing.find({category : category});
    res.render('listings/filter' , {data : allListings});
};

module.exports.search=  async(req,res,next)=>{
 
    let {title} = req.query ;
    title = title.trim();

     if(!title){
         return res.redirect('/listings');
     }

    let allListings = await Listing.find({title: {$regex:title , $options: "i"} });
      if(allListings.length === 0){
        req.flash('error', 'No listings found');
        return res.redirect('/listings');
    }
    
    res.render('listings/search' , {data : allListings} );
};


module.exports.newListingForm = (req,res)=>{
     res.render('./listings/newForm.ejs');
}


module.exports.addNewListing = async(req,res,next)=>{
  
      let response  = await geocodingClient.forwardGeocode({
         query: `${req.body.listing.location} , ${req.body.listing.country}`,
         limit: 1
          })
       .send()
       
    // let coordinates = response.body.features[0].geometry.coordinates;
       
    let url = req.file.path;
    let filename  = req.file.filename;

    const newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    newListing.geometry = response.body.features[0].geometry;

    await newListing.save();
    
    req.flash('success' , ' New listing created!')
    res.redirect('/listings');  
}


module.exports.showListing = async(req,res)=>{
    const {id} = req.params;
    const data  = await Listing.findById(id).populate({path:'reviews',populate : { path : 'author',}}).populate('owner')
    if(!data){
        req.flash('error' , 'listing you requested for dose not exist');
         return res.redirect('/listings');
    }
    res.render('./listings/show.ejs' , {data});
}


module.exports.editListingForm  = async(req,res)=>{
             const {id} = req.params;
             const data =  await Listing.findById(id);
             if(!data){
               req.flash('error' , 'listing you requested for dose not exist');
               return res.redirect('/listings');
             }
            let originalImageUrl= data.image.url ;
            originalImageUrl =  originalImageUrl.replace('/upload/' , '/upload/h_300,w_250/');
             res.render('./listings/edit.ejs' , {data , originalImageUrl});
}

module.exports.updateEditListing = async(req,res)=>{

     if(!req.body.listing){
        throw new ExpressError(400,'Send valid data');
     }
    const{id} = req.params;
    const listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(req.file){
    const url = req.file.path;
    const filename = req.file.filename;
    listing.image.url = url;
    listing.filename = filename;
    // listing.image = { url: url, filename: filename };

    await listing.save();
    }
    req.flash('success' , 'Listing updated!');
    res.redirect(`/listings/${id}`);
    
}

module.exports.deleteListing = async(req,res)=>{
    const {id} = req.params;
    await  Listing.findByIdAndDelete(id) ;
    req.flash('success' , 'Listing Deleted !');
    res.redirect('/listings');
}