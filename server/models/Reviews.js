const { Schema, model } = require('mongoose');
// const Review = require('./Review');

// const mongoose = require('mongoose');
// const connection = require('../../config/connection');
// const users = require('../seed/users.json');
// const { Schema, model } = require('mongoose'); //  <==


// 2) -------------------   Construct a new instance of the schema class
// const UsersSchema = new mongoose.Schema(
const ReviewSchema = new Schema(
  {
    // email:     { type: String},
    comment:   { type: String},
    createdAt: { type: Date, default: Date.now },
    user:    [{type: Schema.Types.ObjectId, ref: 'Users'}],
    itemcode: [{type: Schema.Types.ObjectId, ref: 'Greene'}]
  }
)

const Reviews = model('Reviews', ReviewSchema);

module.exports = Reviews;

