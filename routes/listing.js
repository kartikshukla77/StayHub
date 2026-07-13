const express = require('express');
const router  = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing.js');
const {validateListing , isLoggedIn , isOwner} = require('../middleware.js');
const listingController = require('../controllers/listing.js');

const multer  = require('multer');
const {storage} = require('../cloudConfig.js');
const upload = multer({storage});


// To Show All Listings

router.get('/' , wrapAsync(listingController.index));

// To show Filtered Listings
router.get('/category' , wrapAsync(listingController.filter));

// To show Searched Listings
router.get('/search' , wrapAsync(listingController.search));

// To Create a new listings
 
router.get('/new' , isLoggedIn , listingController.newListingForm);

router.post('/' ,isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingController.addNewListing));

// NOTE WE WROTE THIS (above) ROUTE BELOW to ADD AND CREATE BEACUSE in router.get('/listing/new') new was getting treated as :id and the below 'listings/:id' was getting triggered therefore we wrote that above so that it will be triggerd first

 // To show individual Listings

router.get('/:id' , wrapAsync(listingController.showListing));



// To perform update 
router.get('/:id/edit',isLoggedIn, isOwner , wrapAsync(listingController.editListingForm));

router.put('/:id' , isLoggedIn , isOwner , upload.single("listing[image]"), validateListing ,wrapAsync(listingController.updateEditListing));


// To delete
router.delete('/:id/delete' ,isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));



module.exports = router;