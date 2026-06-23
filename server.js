const express = require('express');
const app = express();
const ejs = require('ejs');
const path  = require('path');
const mongoose = require('mongoose');
const port  = 3000;
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError.js');
const {listingSchema,reviewSchema} = require('./schema.js'); //for server side validation
const { nextTick } = require('process');
const listingRoutes = require('./routes/listing.js');
const reviewRoutes = require('./routes/review.js');


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

app.get('/' , (req,res)=>{
    res.render('./listings/firstpage.ejs');
})

app.use('/listings' , listingRoutes);
app.use('/listings/:id/reviews'  , reviewRoutes);


app.use((err,req,res,next)=>{
     let{status=500 ,message="some error has occured!"} = err;
    // res.status(statusCode).send(message);
    
    res.render('./listings/error.ejs',{err});
    
})