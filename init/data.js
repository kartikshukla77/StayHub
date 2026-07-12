// const sampleListings = [
//   {
//     title: "Beachside Villa in Goa",
//     description: "Wake up to the sound of waves in this beautiful beachside villa. Perfect for a relaxing vacation near Goa's famous beaches.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 3500,
//     location: "Goa",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.8278, 15.2993]
//     }
//   },

//   {
//     title: "Heritage Haveli in Jaipur",
//     description: "Experience royal Rajasthani hospitality in this beautifully restored heritage haveli near historic forts and palaces.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 2800,
//     location: "Jaipur",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [75.7873, 26.9124]
//     }
//   },

//   {
//     title: "Houseboat Stay in Alleppey",
//     description: "Cruise through Kerala's serene backwaters while enjoying a luxurious houseboat experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 4200,
//     location: "Alleppey",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [76.3388, 9.4981]
//     }
//   },

//   {
//     title: "Mountain Cabin in Manali",
//     description: "Surrounded by snow-capped peaks and pine forests, this cozy cabin is perfect for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 2500,
//     location: "Manali",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [77.1892, 32.2432]
//     }
//   },

//   {
//     title: "Lake View Retreat in Udaipur",
//     description: "Enjoy breathtaking views of Lake Pichola from this elegant retreat in the City of Lakes.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 3800,
//     location: "Udaipur",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [73.7125, 24.5854]
//     }
//   },

//   {
//     title: "Tea Estate Cottage in Munnar",
//     description: "Stay amidst lush tea plantations and rolling hills in this peaceful cottage.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 2200,
//     location: "Munnar",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [77.0595, 10.0889]
//     }
//   },

//   {
//     title: "Luxury Tent in Jaisalmer",
//     description: "Experience the magic of the Thar Desert with cultural performances and a luxury desert camp stay.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 3000,
//     location: "Jaisalmer",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [70.9083, 26.9157]
//     },
//   },
//     {
//     title: "Riverside Cottage in Rishikesh",
//     description: "Relax by the Ganges and enjoy yoga, adventure sports, and peaceful surroundings.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 2000,
//     location: "Rishikesh",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [78.2676, 30.0869]
//     }
//   },

//   {
//     title: "Hilltop Homestay in Darjeeling",
//     description: "Wake up to stunning Himalayan views and explore Darjeeling's famous tea gardens.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 2400,
//     location: "Darjeeling",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [88.2663, 27.0410]
//     }
//   },

//   {
//     title: "Beach Resort in Pondicherry",
//     description: "Enjoy French-inspired charm and pristine beaches in this stylish seaside resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 3200,
//     location: "Pondicherry",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [79.8083, 11.9416]
//     }
//   },

//   {
//     title: "Snow View Chalet in Gulmarg",
//     description: "Perfect for skiing enthusiasts and mountain lovers, offering spectacular snowy landscapes.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 4500,
//     location: "Gulmarg",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [74.3805, 34.0484]
//     }
//   },

//   {
//     title: "Coffee Estate Stay in Coorg",
//     description: "Escape into nature with a stay surrounded by coffee plantations and misty hills.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 2700,
//     location: "Coorg",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [75.8069, 12.3375]
//     }
//   },

//   {
//     title: "Island Retreat in Andaman",
//     description: "Experience crystal-clear waters, white-sand beaches, and unforgettable sunsets.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 5500,
//     location: "Havelock Island",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [92.9876, 12.0170]
//     }
//   },

//   {
//     title: "Valley View Cottage in Shillong",
//     description: "Discover the beauty of Northeast India from this cozy cottage overlooking lush valleys.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 2300,
//     location: "Shillong",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [91.8933, 25.5788]
//     }
//   },

//   {
//     title: "Luxury House in Hyderabad",
//     description: "Stay in a modern luxury home with easy access to Charminar, Golconda Fort, and the city's food scene.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 3500,
//     location: "Hyderabad",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [78.4867, 17.3850]
//     }
//   },
//     {
//     title: "Lakefront Villa in Nainital",
//     description: "Enjoy serene lake views and cool mountain weather from this beautiful villa.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 2900,
//     location: "Nainital",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [79.4636, 29.3919]
//     }
//   },

//   {
//     title: "Beach Cottage in Gokarna",
//     description: "A peaceful coastal getaway with pristine beaches and laid-back vibes.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 2600,
//     location: "Gokarna",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [74.3188, 14.5479]
//     }
//   },

//   {
//     title: "Eco Resort in Kaziranga",
//     description: "Explore wildlife and enjoy a unique stay close to the famous national park.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 3100,
//     location: "Kaziranga",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [93.1711, 26.5775]
//     }
//   },

//   {
//     title: "Royal Palace Stay in Mysore",
//     description: "Experience the grandeur of Mysore with a luxurious stay inspired by royal architecture.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
//     },
//     price: 4000,
//     location: "Mysore",
//     country: "India",
//     geometry: {
//       type: "Point",
//       coordinates: [76.6394, 12.2958]
//     }
//   }
// ];

// module.exports = { data: sampleListings };







const sampleListings = [
  {
    title: "Beachside Villa in Goa",
    description: "Wake up to the sound of waves in this beautiful beachside villa. Perfect for a relaxing vacation near Goa's famous beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Goa",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.8278, 15.2993]
    },
    category: "Trending"
  },

  {
    title: "Heritage Haveli in Jaipur",
    description: "Experience royal Rajasthani hospitality in this beautifully restored heritage haveli near historic forts and palaces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    location: "Jaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124]
    },
    category: "Castles"
  },

  {
    title: "Houseboat Stay in Alleppey",
    description: "Cruise through Kerala's serene backwaters while enjoying a luxurious houseboat experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=60"
    },
    price: 4200,
    location: "Alleppey",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981]
    },
    category: "Boat"
  },

  {
    title: "Mountain Cabin in Manali",
    description: "Surrounded by snow-capped peaks and pine forests, this cozy cabin is perfect for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Manali",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2432]
    },
    category: "Mountains"
  },

  {
    title: "Lake View Retreat in Udaipur",
    description: "Enjoy breathtaking views of Lake Pichola from this elegant retreat in the City of Lakes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=60"
    },
    price: 3800,
    location: "Udaipur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.7125, 24.5854]
    },
    category: "Iconic Cities"
  },

  {
    title: "Tea Estate Cottage in Munnar",
    description: "Stay amidst lush tea plantations and rolling hills in this peaceful cottage.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Munnar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.0595, 10.0889]
    },
    category: "Farms"
  },

  {
    title: "Luxury Tent in Jaisalmer",
    description: "Experience the magic of the Thar Desert with cultural performances and a luxury desert camp stay.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Jaisalmer",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [70.9083, 26.9157]
    },
    category: "Camping"
  },

  {
    title: "Riverside Cottage in Rishikesh",
    description: "Relax by the Ganges and enjoy yoga, adventure sports, and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 2000,
    location: "Rishikesh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869]
    },
    category: "Trending"
  },

  {
    title: "Hilltop Homestay in Darjeeling",
    description: "Wake up to stunning Himalayan views and explore Darjeeling's famous tea gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
    },
    price: 2400,
    location: "Darjeeling",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [88.2663, 27.0410]
    },
    category: "Mountains"
  },

  {
    title: "Beach Resort in Pondicherry",
    description: "Enjoy French-inspired charm and pristine beaches in this stylish seaside resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    location: "Pondicherry",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.8083, 11.9416]
    },
    category: "Amazing pools"
  },
  {
    title: "Snow View Chalet in Gulmarg",
    description: "Perfect for skiing enthusiasts and mountain lovers, offering spectacular snowy landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=60"
    },
    price: 4500,
    location: "Gulmarg",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.3805, 34.0484]
    },
    category: "Arctic"
  },

  {
    title: "Coffee Estate Stay in Coorg",
    description: "Escape into nature with a stay surrounded by coffee plantations and misty hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=60"
    },
    price: 2700,
    location: "Coorg",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.8069, 12.3375]
    },
    category: "Farms"
  },

  {
    title: "Island Retreat in Andaman",
    description: "Experience crystal-clear waters, white-sand beaches, and unforgettable sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    price: 5500,
    location: "Havelock Island",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [92.9876, 12.0170]
    },
    category: "Trending"
  },

  {
    title: "Valley View Cottage in Shillong",
    description: "Discover the beauty of Northeast India from this cozy cottage overlooking lush valleys.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60"
    },
    price: 2300,
    location: "Shillong",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [91.8933, 25.5788]
    },
    category: "Mountains"
  },

  {
    title: "Luxury House in Hyderabad",
    description: "Stay in a modern luxury home with easy access to Charminar, Golconda Fort, and the city's food scene.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Hyderabad",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.4867, 17.3850]
    },
    category: "Iconic Cities"
  },

  {
    title: "Lakefront Villa in Nainital",
    description: "Enjoy serene lake views and cool mountain weather from this beautiful villa.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60"
    },
    price: 2900,
    location: "Nainital",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.4636, 29.3919]
    },
    category: "Mountains"
  },

  {
    title: "Beach Cottage in Gokarna",
    description: "A peaceful coastal getaway with pristine beaches and laid-back vibes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Gokarna",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.3188, 14.5479]
    },
    category: "Rooms"
  },

  {
    title: "Eco Resort in Kaziranga",
    description: "Explore wildlife and enjoy a unique stay close to the famous national park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=60"
    },
    price: 3100,
    location: "Kaziranga",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [93.1711, 26.5775]
    },
    category: "Farms"
  },

  {
    title: "Royal Palace Stay in Mysore",
    description: "Experience the grandeur of Mysore with a luxurious stay inspired by royal architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Mysore",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.6394, 12.2958]
    },
    category: "Castles"
  },
  {
    title: "Luxury Pool Villa in Lonavala",
    description: "A peaceful luxury villa surrounded by hills with a private pool and beautiful valley views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=60"
    },
    price: 5000,
    location: "Lonavala",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.4072, 18.7546]
    },
    category: "Amazing pools"
  },

  {
    title: "Modern Apartment in Mumbai",
    description: "A stylish city apartment near famous attractions, restaurants, and nightlife spots.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60"
    },
    price: 4500,
    location: "Mumbai",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.0760]
    },
    category: "Iconic Cities"
  },

  {
    title: "Forest Cottage in Wayanad",
    description: "Stay close to nature with a cozy cottage surrounded by forests and waterfalls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60"
    },
    price: 2400,
    location: "Wayanad",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.1320, 11.6854]
    },
    category: "Farms"
  },

  {
    title: "Desert Dome Camp in Pushkar",
    description: "Enjoy a unique dome camping experience under the stars in the Rajasthan desert.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    location: "Pushkar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.5578, 26.4890]
    },
    category: "Domes"
  },

  {
    title: "Cliffside Resort in Mahabaleshwar",
    description: "Relax in the hills with panoramic views, fresh air, and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Mahabaleshwar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.6586, 17.9237]
    },
    category: "Mountains"
  },

  {
    title: "Traditional Villa in Kerala",
    description: "A beautiful Kerala-style villa with traditional architecture and peaceful gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60"
    },
    price: 3500,
    location: "Kochi",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.2673, 9.9312]
    },
    category: "Rooms"
  },

  {
    title: "Mountain Resort in Ooty",
    description: "A charming hill resort surrounded by eucalyptus forests and scenic landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Ooty",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.6950, 11.4102]
    },
    category: "Mountains"
  },

  {
    title: "Royal Fort Stay in Jodhpur",
    description: "Experience royal Rajasthan with a heritage stay near magnificent forts and palaces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60"
    },
    price: 4200,
    location: "Jodhpur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.0243, 26.2389]
    },
    category: "Castles"
  },

  {
    title: "Treehouse Stay in Sakleshpur",
    description: "Enjoy an adventurous treehouse stay surrounded by forests and coffee plantations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    location: "Sakleshpur",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [75.7851, 12.9416]
    },
    category: "Trending"
  },

  {
    title: "Beach House in Kerala",
    description: "A beautiful seaside home offering peaceful mornings and ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    price: 3800,
    location: "Varkala",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.7163, 8.7379]
    },
    category: "Trending"
  },

  {
    title: "Farmhouse Retreat in Punjab",
    description: "Relax in a spacious farmhouse surrounded by greenery and open fields.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=60"
    },
    price: 2500,
    location: "Amritsar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.8723, 31.6340]
    },
    category: "Farms"
  },

  {
    title: "Snow Cabin in Auli",
    description: "A cozy winter cabin offering breathtaking Himalayan snow views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60"
    },
    price: 4800,
    location: "Auli",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [79.5669, 30.5285]
    },
    category: "Arctic"
  },

  {
    title: "Luxury Dome Resort in Bangalore",
    description: "A modern dome stay experience with luxury facilities near the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60"
    },
    price: 3600,
    location: "Bangalore",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716]
    },
    category: "Domes"
  },

  {
    title: "River Camp in Jim Corbett",
    description: "Adventure camping experience near forests, rivers, and wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=800&q=60"
    },
    price: 2900,
    location: "Jim Corbett",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [78.7747, 29.5300]
    },
    category: "Camping"
  },

  {
    title: "Luxury Boat Stay in Srinagar",
    description: "Stay on a traditional houseboat and enjoy the beauty of Dal Lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=60"
    },
    price: 4000,
    location: "Srinagar",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [74.7973, 34.0837]
    },
    category: "Boat"
  },
  {
    title: "Luxury Apartment in Delhi",
    description: "A comfortable modern apartment close to historical monuments, shopping areas, and restaurants.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60"
    },
    price: 4200,
    location: "Delhi",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.1025, 28.7041]
    },
    category: "Iconic Cities"
  },

  {
    title: "Hill Cottage in Kasauli",
    description: "A peaceful hillside cottage surrounded by pine trees and mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60"
    },
    price: 2600,
    location: "Kasauli",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.9641, 30.9010]
    },
    category: "Mountains"
  },

  {
    title: "Beachfront Resort in Varkala",
    description: "Enjoy ocean views, golden sunsets, and a relaxing stay near the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=800&q=60"
    },
    price: 3600,
    location: "Varkala",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.7163, 8.7379]
    },
    category: "Amazing pools"
  },

  {
    title: "Heritage Mansion in Lucknow",
    description: "Stay in a historic mansion showcasing beautiful architecture and royal culture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60"
    },
    price: 3200,
    location: "Lucknow",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [80.9462, 26.8467]
    },
    category: "Castles"
  },

  {
    title: "Forest Lodge in Madhya Pradesh",
    description: "A nature retreat surrounded by forests and wildlife near national parks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=60"
    },
    price: 2800,
    location: "Kanha",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [80.6115, 22.3346]
    },
    category: "Trending"
  },

  {
    title: "Luxury Villa in Alibaug",
    description: "A private villa near the coast with spacious rooms and a refreshing pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=60"
    },
    price: 5500,
    location: "Alibaug",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [72.8727, 18.6414]
    },
    category: "Amazing pools"
  },

  {
    title: "Tea Garden Homestay in Assam",
    description: "Experience peaceful mornings surrounded by endless tea gardens and greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=60"
    },
    price: 2200,
    location: "Dibrugarh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [94.9120, 27.4728]
    },
    category: "Farms"
  },

  {
    title: "Dome Retreat in Ladakh",
    description: "A unique dome stay experience with incredible mountain landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60"
    },
    price: 4500,
    location: "Leh",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [77.5771, 34.1526]
    },
    category: "Domes"
  },

  {
    title: "Backwater Villa in Kumarakom",
    description: "A peaceful lakeside villa offering traditional Kerala hospitality.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60"
    },
    price: 3900,
    location: "Kumarakom",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [76.4300, 9.6170]
    },
    category: "Boat"
  },

  {
    title: "Desert Camp Experience in Bikaner",
    description: "Enjoy traditional food, cultural shows, and a memorable desert camping experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1650000000000-MBHCez7jJg4?auto=format&fit=crop&w=800&q=60"
    },
    price: 3000,
    location: "Bikaner",
    country: "India",
    geometry: {
      type: "Point",
      coordinates: [73.3119, 28.0229]
    },
    category: "Camping"
  }
];
 module.exports = { data: sampleListings };

