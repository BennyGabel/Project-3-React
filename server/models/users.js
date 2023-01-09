const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
    email:    { type: String},  
    password: { type: String },  
    lastAccessed: { type: Date, default: Date.now },
  }

);

const Users = model('Users', UserSchema);

module.exports = Users;