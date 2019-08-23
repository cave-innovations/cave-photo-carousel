const { MongoClient } = require('mongodb');
const faker = require('faker');

const url = 'mongodb://localhost:27017';

// Seeds fake data into database
const insert = (db, callback) => {
  // Array of 100 rows of fake listings to be filled
  const listings = [];
  // Fills 'listings'
  for (let i = 1; i <= 100; i += 1) {
    // Sets fake description, photo list, and photo count for each listing
    const desc = `${faker.lorem.word().toUpperCase()} at ${faker.address.city()}`;
    const photoList = [`https://photo-carousel.s3-us-west-1.amazonaws.com/building-${i}.jpeg`];
    const photoCount = Math.floor(Math.random() * 100);
    for (let j = 0; j < photoCount; j += 1) {
      const randomPhoto = `https://photo-carousel.s3-us-west-1.amazonaws.com/building-${(Math.floor(Math.random() * 100) + 1)}.jpeg`;
      if (!photoList.includes(randomPhoto)) {
        photoList.push(randomPhoto);
      }
    }
    listings.push({
      listingId: i,
      main: `https://photo-carousel.s3-us-west-1.amazonaws.com/building-${i}.jpeg`,
      photos: photoList,
      description: desc,
      totalPhotos: photoList.length,
    });
  }
  // Inserts 'listings' into 'cave' collection
  const collection = db.collection('cave');
  collection.insertMany(listings, (err, result) => {
    callback(result);
  });
};

// Creates connection to 'cave' db and calls insert()
MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MongoDB');
    const db = client.db('cave');
    insert(db, () => {
      client.close();
    });
  }
});
