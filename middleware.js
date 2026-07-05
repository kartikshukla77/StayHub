const Listing = require('./models/listing.js');
const Review = require('./models/review.js');
const {listingSchema} = require('./schema.js'); //for server side validation
const {reviewSchema} = require('./schema.js'); //for server side validation
const ExpressError = require('./utils/ExpressError.js');



module.exports.validateListing = (req,res,next)=>{
         const{error} = listingSchema.validate(req.body);
         if(error){
            throw new ExpressError(400 , error)
         }else{
            next();
         }
    }

module.exports.validateReview = (req,res,next)=>{
         const{error} = reviewSchema.validate(req.body);
         if(error){
            throw new ExpressError(400 , error)
         }else{
            next();
    }
}

module.exports.isLoggedIn = (req,res,next)=>{

     if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash('error' , 'You must be logged in ');
        return res.redirect('/login');   
    }
    next();
} 

// we directly cannot use the redirectUrl in login because
//we used passport.authenticate middleware and it resets the req.session 


// this is why we store them in locals and call that middleware just before the passport.authenticate middleware
module.exports.savedRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}



module.exports.isOwner = async(req,res,next)=>{
    const{id} = req.params;
     const listing = await Listing.findById(id);
     if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash('error' , "You are not the owner of the listing");
        return res.redirect(`/listings/${id}`);  
    }
    next();
}

module.exports.isReviewAuthor = async(req,res,next)=>{
    const{id , reviewId} = req.params;
     const review = await Review.findById(reviewId);
     if(!review.author.equals(res.locals.currUser._id)){
        req.flash('error' , "You are not the author of this review");
        return res.redirect(`/listings/${id}`);  
    }
    next();
}
