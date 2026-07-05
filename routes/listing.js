const express = require('express');
const router  = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require('../models/listing.js');
const {validateListing , isLoggedIn , isOwner} = require('../middleware.js');
const listingController = require('../controllers/listing.js');

// First Route to Show all Listings

router.get('/' , wrapAsync(listingController.index));


// Second route to Create a new listings
 
router.get('/new' , isLoggedIn , listingController.newListingForm);

router.post('/' ,isLoggedIn, validateListing, wrapAsync(listingController.addNewListing));

// NOTE WE WROTE THIS (above) ROUTE BELOW to ADD AND CREATE BEACUSE in router.get('/listing/new') new was getting treated as :id and the below 'listings/:id' was getting triggered therefore we wrote that above so that it will be triggerd first

 // Third route to show individual Listings

router.get('/:id' , wrapAsync(listingController.showListing));



// Fourth route to perform update 
router.get('/:id/edit',isLoggedIn, isOwner , wrapAsync(listingController.editListingForm));

router.put('/:id' , isLoggedIn , isOwner , validateListing ,wrapAsync(listingController.updateEditListing));


//fifth route to delete
router.delete('/:id/delete' ,isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));



module.exports = router;