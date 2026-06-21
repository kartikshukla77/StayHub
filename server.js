const express = require('express');
const app = express();
const ejs = require('ejs');
const path  = require('path');
const mongoose = require('mongoose');
const port  = 3000;
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const wrapAsync = require('./utils/wrapAsync.js');
const ExpressError = require('./utils/ExpressError.js');
const {listingSchema,reviewSchema} = require('./schema.js'); //for server side validation
app.use(methodOverride('_method'));
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.engine('ejs' , ejsMate);
app.use(express.static(path.join(__dirname ,'public')));



async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    app.listen(port);
}

main();
const Listing = require('./models/listing.js');
const Review  = require('./models/review.js');
const { nextTick } = require('process');


app.get('/' , (req,res)=>{
    res.render('./listings/firstpage.ejs');
})

//middlewares

const validateListing = (req,res,next)=>{
         const{error} = listingSchema.validate(req.body);
         if(error){
            throw new ExpressError(400 , error)
         }else{
            next();
         }
    }


const validateReview = (req,res,next)=>{
         const{error} = reviewSchema.validate(req.body);
         if(error){
            throw new ExpressError(400 , error)
         }else{
            next();
         }
    }




// First Route to Show all Listings

app.get('/listings' , wrapAsync(async(req,res)=>{
  let allListings =  await Listing.find({});
  res.render('./listings/index.ejs' , {data : allListings});
}))


// Second route to Create a new listings
 
app.get('/listings/new' , (req,res)=>{
     res.render('./listings/newForm.ejs');
})

app.post('/listings' , validateListing, wrapAsync(async(req,res,next)=>{
    
        // const {title,location,image,price,country ,description} = req.body;
    // const {listing} = req.body;
    // await  new Listing({
    //     title : listing.title,
    //     description : listing.description,
    //     price : listing.price,
    //     location : listing.location,
    //     country : listing.country
    // }).save()
    await new Listing(req.body.listing).save();   // same as above just got this because we used object in name as listing 
    res.redirect('/listings');
    
    
}));


// NOTE WE WROTE THIS (above) ROUTE BELOW to ADD AND CREATE BEACUSE in app.get('/listing/new') new was getting treated as :id and the below 'listings/:id' was getting triggered therefore we wrote that above so that it will be triggerd first


 // Third route to show individual Listings

app.get('/listings/:id' , wrapAsync(async(req,res)=>{
    const {id} = req.params;
    const data  = await Listing.findById(id).populate('reviews')
    res.render('./listings/show.ejs' , {data});
}))

// Fourth route to perform update 


app.get('/listings/:id/edit' , wrapAsync(async(req,res)=>{
             const {id} = req.params;
             const data =  await Listing.findById(id);
             res.render('./listings/edit.ejs' , {data});
}))
app.put('/listings/:id' , validateListing ,wrapAsync(async(req,res)=>{
     if(!req.listing.body){
        throw new ExpressError(400,'Send valid data');
     }
    const{id} = req.params;
    await Listing.updateOne({_id : id} , req.body.listing);
    res.redirect(`/listings/${id}`);
}))


//fifth route to delete

app.delete('/listings/:id/delete' ,wrapAsync(async(req,res)=>{
    const {id} = req.params;
    await  Listing.findByIdAndDelete(id) ;
    res.redirect('/listings');
}))

//sixth route for review

app.post('/listing/:id/reviews' , validateReview , wrapAsync(async(req,res)=>{
    
    const listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review)

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`);

}))


// delete review route

app.delete('/listings/:id/reviews/:reviewId' , wrapAsync(async(req,res)=>{
    const{id , reviewId } = req.params ; 
    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
    res.redirect(`/listings/${id}`);
}))





app.use((err,req,res,next)=>{
     let{status=500 ,message="some error has occured!"} = err;
    // res.status(statusCode).send(message);
    
    res.render('./listings/error.ejs',{err});
    
})