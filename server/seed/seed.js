// const db = require('../../config/connection');
const db = require('../config/connection');
const { Greene, Users, Reviews } = require('../models');

const inventory = require('./items.json');
const userData = require('./users.json');
const reviewsData = require('./reviews.json');

db.once('open', async () => {
  // clean database
  await Greene.deleteMany({});
  await Users.deleteMany({});
  await Reviews.deleteMany({});
  // bulk create each model


  const greenes = await Greene.insertMany(inventory);
  const users  = await Users.insertMany(userData);
  const reviews = await Reviews.insertMany(reviewsData);

    console.log('all done!');
    process.exit(0);
 
});


