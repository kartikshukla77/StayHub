const User = require('../models/user.js');
const passport = require('passport');

module.exports.signupForm =  (req,res)=>{
  res.render('users/signup.ejs');
}

module.exports.signup = async(req,res)=>{
      try{
      let {username,email,password} = req.body;
      const newUser = new User({email,username});
      const registerdUser = await  User.register(newUser , password);  // won't  allow to enter already entered username (not for email) 
      req.login(registerdUser , (err)=>{
        if(err){
          next(err);
        }
        req.flash('success' , 'Welcome to Stayhub');
        res.redirect('/listings');
      });

      }catch(e){
        req.flash('error' , e.message);
        res.redirect('/signup');
      }
      //Despite having wrapAsync we handled error manually bcs we want the error to be displayed as flash(eg same username) bcs the wrapAync will take it to new page and then will display its err msg.  
}

module.exports.loginForm = (req,res)=>{
    res.render('users/login.ejs');
}

module.exports.login = async(req,res)=>{
    req.flash('success','welcome to stayhub you are logged in')

    let redirectUrl = res.locals.redirectUrl || '/listings'  // we did this because when we were logging in directly then the res.local would be undefined that the reason why we did not directly send the res.locals.redirectUrl in res.redirect
    res.redirect(redirectUrl);
}

module.exports.logout = (req,res,next)=>{
  req.logout((err)=>{
    if(err){
      next(err)
    }
    req.flash('success' , 'you are logged out');
    res.redirect('/');
  })
}