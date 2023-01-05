const { Schema, model } = require('mongoose');
const Greene = require('./Greene');
// const mongoose = require('mongoose');
// const connection = require('../../config/connection');
// const users = require('../seed/users.json');
// const { Schema, model } = require('mongoose'); //  <==


// 2) -------------------   Construct a new instance of the schema class
// const UsersSchema = new mongoose.Schema(
const UserSchema = new Schema(
  
  {

    email:    { type: String, required: true },    // Configure individual properties using Schema Types 
    password: { type: String, required: true },  // The type of data is set to 'String' and required is set to false, meaning it will accept null values
    // Use built in date method to get current date
    comment: [{type: Schema.Types.ObjectId, ref: 'Greene'}],
    lastAccessed: { type: Date, default: Date.now },
  }
  // {
  //   toJSON: {
  //       virtuals: true,
  //       getters: true
  //   },
  //   // prevents virtuals from creating duplicate of _id as `id`
  //   id: false
  // }
);

//3) --------------  import/require JSON file to loop through & Seed the database --
// const Users = mongoose.model('users', UsersSchema);
const Users = model('Users', UserSchema);

module.exports = Users;
// const handleError = (err ? handleError(err) : console.log('New User was created'))

// connection.once('open', async () => {
//   console.log('connected- deleting prior records users');
//   await Users.deleteMany({});
//   console.log('connected- seeding users');
//   await Users.insertMany(users);
// });


//4) ------------------------  Create a New Instance the model, a document
// Users.create(
//     {
//         email: "podasin@gmail.com",
//         password: "WhatsApp"
//     },
//     (err) => (err ? handleError(err) : console.log('Created New User'))
// );
    
  


