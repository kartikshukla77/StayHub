const express = require('express');
const router  = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing.js');
const {validateListing , isLoggedIn , isOwner} = require('../middleware.js');


// First Route to Show all Listings

router.get('/' , wrapAsync(async(req,res)=>{
  let allListings =  await Listing.find({});
  res.render('./listings/index.ejs' , {data : allListings});
}))


// Second route to Create a new listings
 
router.get('/new' , isLoggedIn , (req,res)=>{
     res.render('./listings/newForm.ejs');
})

router.post('/' ,isLoggedIn, validateListing, wrapAsync(async(req,res,next)=>{
    
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
    
    
}));


// NOTE WE WROTE THIS (above) ROUTE BELOW to ADD AND CREATE BEACUSE in router.get('/listing/new') new was getting treated as :id and the below 'listings/:id' was getting triggered therefore we wrote that above so that it will be triggerd first


 // Third route to show individual Listings

router.get('/:id' , wrapAsync(async(req,res)=>{
    const {id} = req.params;
    const data  = await Listing.findById(id).populate({path:'reviews',populate : { path : 'author',}}).populate('owner')
    if(!data){
        req.flash('error' , 'listing you requested for dose not exist');
         return res.redirect('/listings');
    }
    res.render('./listings/show.ejs' , {data});
}))

// Fourth route to perform update 


router.get('/:id/edit',isLoggedIn, isOwner , wrapAsync(async(req,res)=>{
             const {id} = req.params;
             const data =  await Listing.findById(id);
             if(!data){
               req.flash('error' , 'listing you requested for dose not exist');
               return res.redirect('/listings');
             }

             res.render('./listings/edit.ejs' , {data});
}))


router.put('/:id' , isLoggedIn , isOwner , validateListing ,wrapAsync(async(req,res)=>{

     if(!req.body.listing){
        throw new ExpressError(400,'Send valid data');
     }
    const{id} = req.params;
    const listing = await Listing.findById(id);
    
    await Listing.updateOne({_id : id} , req.body.listing);
    req.flash('success' , 'Listing updated!');
    res.redirect(`/listings/${id}`);
    
}))


//fifth route to delete

router.delete('/:id/delete' ,isLoggedIn, isOwner, wrapAsync(async(req,res)=>{
    const {id} = req.params;
    await  Listing.findByIdAndDelete(id) ;
    req.flash('success' , 'Listing Deleted !');
    res.redirect('/listings');
}))




module.exports = router;