const initData = require('./data.js');
const mongoose = require('mongoose');
const listing = require('../models/listing.js');


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    await listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj,
        owner:'6a47d0872e3f19d4cd905421',
    }))
    await listing.insertMany(initData.data);
   
}

main();

//below both are also two ways to enter the owner detail in our data but the set is not efficinet because it uses two write operatio

// async function main(){
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
//     await listing.deleteMany({});
//      await listing.insertMany(initData.data);
//     await listing.updateMany({} , 
//         { $set : {
//             owner : '6a47d0872e3f19d4cd905421'
//         }}
//     )
// }
// main();


// async function main(){
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
//     //for(let i = 0 ; i< initData.data.length ; i=i+1){
//       // initData.data[i].owner = '6a47d0872e3f19d4cd905421';
//     //}  even this is ok
//     await listing.deleteMany({});
//     for(let i = 0 ; i< initData.data.length ; i=i+1){
//        initData.data[i].owner = '6a47d0872e3f19d4cd905421';
//     }
//     await listing.insertMany(initData.data); 
// }
// main();


