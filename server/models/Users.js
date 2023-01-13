const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: { 
      type: String, 
      required: true, 
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },  
    password: {
      type: String, 
      required: true,
      minlength: 8
    },
    usercomments: [{ type: Schema.Types.ObjectId, ref: 'Reviews' }],
    lastAccessed: { type: Date, default: Date.now }
  });
// --------------------------------------------------------------------
UserSchema.pre('save', async function (next) {  //------------------------- pre-save middleware to create password
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds); //------- bcrypt function hash(data: string | Buffer, saltOrRounds: string | number): Promise<string>;   
  }
  next();

});

UserSchema.methods.isCorrectPassword = async function (password) { //------ compare passwords
  return bcrypt.compare(password, this.password);
};

const Users = model('Users', UserSchema);
module.exports = Users;