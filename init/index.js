const initData = require('./data.js');
const mongoose = require('mongoose');
const listing = require('../models/listing.js');
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    await listing.deleteMany({});
    await listing.insertMany(initData.data);
}
main();


