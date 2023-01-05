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

  const greenes = await Greene.insertMany(inventory);
  const users  = await Users.insertMany(usersData);
  const reviews = await Users.insertMany(reviewsData);

  

  /*
//  for (newItem of greenes) {
    // randomly add each class to a school
    const tempGreene = greene[Math.floor(Math.random() * greenes.length)];
    tempGreene.push(tempGreene._id);
    await tempGreene.save();

    // randomly add a professor to each class
    const tempUsers = users[Math.floor(Math.random() * users.length)];
    newUsers.professor = tempUsers._id;
    await tempUsers.save();

    // reference class on professor model, too
    tempProfessor.classes.push(newClass._id);
    await tempProfessor.save();
  // }
*/



  
    console.log('all done!');
    process.exit(0);
 
});

