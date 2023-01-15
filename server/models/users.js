const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema(
    {
    email:    { type: String, required: true  },  
    password: { type: String, required: true  },  
    lastAccessed: { type: Date, default: Date.now },
  },
  {
    toJSON: {
      virtuals: true
    }
  }

);

// set up pre-save middleware to create password
UserSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};


const Users = model('Users', UserSchema);

module.exports = Users;