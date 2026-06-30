const express = require('express');
const router  = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const User = require('../models/user.js');

router.get('/signup' , (req,res)=>{
  res.render('users/signup.ejs')
})

router.post('/signup', wrapAsync(async(req,res)=>{
      try{
      let {username,email,password} = req.body;
      const newUser = new User({email,username});
      const registerdUser = await  User.register(newUser , password);  // won't  allow to enter already entered username (not for email) 
      req.flash('success' , 'Welcome to Stayhub');
      res.redirect('/listings');
      }catch(e){
        req.flash('error' , e.message);
        res.redirect('/signup');
      }

      //Despite having wrapAsync we handled error manually bcs we want the error to be displayed as flash(eg same username) bcs the wrapAync will take it to new page and then will display its err msg.
    
}))

module.exports = router;