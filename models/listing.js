const mongoose = require('mongoose');
const {Schema} = mongoose;
const Review = require("./review.js")

const userSchema = new mongoose.Schema({
     title : {
        type : String,
     },
     description : {
        type : String,
     },
     image : {
        type : String,
        set : (v) => v===''?'https://images.unsplash.com/photo-1656437717503-971f67b6af21?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' :v ,
     },
     price : {
        type : Number,
     },
     location : {
        type : String,
     },
     country : {
        type : String
     },
     reviews : [
      {
         type : Schema.Types.ObjectId,
         ref : 'Review'

      }
     ]
      
});



userSchema.post('findOneAndDelete' , async(listing)=>{
   if(listing){
      await Review.deleteMany({
      _id:{$in: listing.reviews}
   });
   }
   
});

const listing = mongoose.model('listing' , userSchema);

module.exports = listing;