const express = require('express');
const router  = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const ExpressError = require('../utils/ExpressError.js');
const {reviewSchema} = require('../schema.js'); //for server side validation
const Listing = require('../models/listing.js');
const Review  = require('../models/review.js');

const validateReview = (req,res,next)=>{
         const{error} = reviewSchema.validate(req.body);
         if(error){
            throw new ExpressError(400 , error)
         }else{
            next();
    }
}



//sixth route for review

router.post("/", validateReview , wrapAsync(async(req,res)=>{
    
    const listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review)

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`);

}))


// delete review route

router.delete('/:reviewId' , wrapAsync(async(req,res)=>{
    const{id , reviewId } = req.params ; 
    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
    res.redirect(`/listings/${id}`);
}))

module.exports = router;