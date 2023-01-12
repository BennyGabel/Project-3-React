const mongoose = require('mongoose');
// Mern Activity 1 connection 
mongoose.set('strictQuery', true);  // new pho added

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/greeneshop',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;