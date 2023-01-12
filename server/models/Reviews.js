const { Schema, model } = require('mongoose');

const ReviewSchema = new Schema({
    comment: { 
      type: String, 
      minlength: 1,
      maxlength: 280,
      required: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    },
    itemcode: {
      type: String
    },
    createdAt: { type: Date, default: Date.now },
    users:    {type: Schema.Types.ObjectId, ref: 'Users'},
    itemcodes: {type: Schema.Types.ObjectId, ref: 'Greene'},
    allcomments: [{
      commentTxt: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280
        },
        commentAuth: {
          type: String,
          required: true
        },
        itemCode:{
          type: String
        },
        createdAt: {
          type: Date,
          default: Date.now,
        }
      }]
  });

const Reviews = model('Reviews', ReviewSchema);

module.exports = Reviews;

