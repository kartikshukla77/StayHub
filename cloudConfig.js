const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.CLOUD_API_KEY,
    api_secret : process.env.CLOUD_API_SECRET
})   // by default the key name should be same eg. cloud_name we used.


console.log({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Stayhub_DEV',
    allowedFormats: ['png' ,'jpeg','jpg'], 
  },
});

module.exports = {
    cloudinary , storage
}