const Listing = require('../models/listing.js');

module.exports.index = async(req,res)=>{
  let allListings =  await Listing.find({});
  res.render('./listings/index.ejs' , {data : allListings});
}

module.exports.newListingForm = (req,res)=>{
     res.render('./listings/newForm.ejs');
}


module.exports.addNewListing = async(req,res,next)=>{
    // const {title,location,image,price,country ,description} = req.body;
    // const {listing} = req.body;
    // await  new Listing({
    //     title : listing.title,
    //     description : listing.description,
    //     price : listing.price,
    //     location : listing.location,
    //     country : listing.country
    // }).save()
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
       // same as above just got this because we used object in name as listing 
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

             res.render('./listings/edit.ejs' , {data});
}

module.exports.updateEditListing = async(req,res)=>{

     if(!req.body.listing){
        throw new ExpressError(400,'Send valid data');
     }
    const{id} = req.params;
    const listing = await Listing.findById(id);
    
    await Listing.updateOne({_id : id} , req.body.listing);
    req.flash('success' , 'Listing updated!');
    res.redirect(`/listings/${id}`);
    
}

module.exports.deleteListing = async(req,res)=>{
    const {id} = req.params;
    await  Listing.findByIdAndDelete(id) ;
    req.flash('success' , 'Listing Deleted !');
    res.redirect('/listings');
}