const { Schema, model } = require('mongoose');

  const GreeneSchema = new Schema(
    {
      name: { type: String, required: true },    // Configure individual properties using Schema Types 
      brand: { type: String, required: true },  // The type of data is set to 'String' and required is set to false, meaning it will accept null values
      price: {type: Number, required: true },
      itemcode: String,
      image: String,  
      inventory: Number,
      category: String,
      comments: [{ type: Schema.Types.ObjectId, ref: 'Reviews' }],
      lastAccessed: { type: Date, default: Date.now } // Use built in date method to get current date
    }
);

const Greene = model('Greene', GreeneSchema);
module.exports = Greene;


