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

  //  await Greene.insertMany(inventory);
  //  await Users.insertMany(userData);
  //  await Reviews.insertMany(reviewsData);
  const reviews = await Reviews.insertMany(reviewsData);
  const greenes = await Greene.insertMany(inventory);
  const users  = await Users.insertMany(userData);


  
// const randGrn = Greene.findOne({});
// const randUsr = Users.findOne({});

//  for (grnItem of greenes) {
//     // randomly add each class to a school
//     const tempRev = greenes[itemcode];


//     // randomly add a professor to each class
//     const tempUsers = users[Math.floor(Math.random() * users.length)];
//     tempRev.comment = tempUsers._id;
//     await rv.save();

//     // reference class on professor model, too
//     tempUsers.comment.push(rv._id);
//     await tempUsers.save();
//   }

  
    console.log('all done!');
    process.exit(0);
 
});

