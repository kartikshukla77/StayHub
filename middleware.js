module.exports.isLoggedIn = (req,res,next)=>{

     if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash('error' , 'you must be logged in to create listing ');
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