const { Schema, model } = require('mongoose');

const GreeneSchema = new Schema({
    name: { type: String, required: true },   
    brand: { type: String, required: true },  
    price: {type: Number, required: true },
    itemcode: String,
    image: String,  
    inventory: Number,
    category: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'Reviews' }],
    lastAccessed: { type: Date, default: Date.now } 
});

const Greene = model('Greene', GreeneSchema);
module.exports = Greene;


