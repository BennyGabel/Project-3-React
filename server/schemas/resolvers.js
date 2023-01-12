const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/token');
const { Greene, Reviews, Users }= require('../models');

const resolvers = {
  Query: {
    greenes: async() => {
      return Greene.find().populate('usercomments');      // [1] Ascending  [-1] Descending
    },
    greene: async (parent, {grnId}) => {
      return Greene.findOne( {_id:grnId} );
    },
    allusers: async () => {
      return Users.find().populate('usercomments');
    },
    oneuser: async (parent, { email }) => {
      return Users.findOne({ email }).populate('usercomments');
    },
    usercomments:  async (parent, { email }) => {
      const params = email ? { email } : {};   // ternorary ? falsy : truthsy
      return Reviews.find(params).sort({ createdAt: -1 });
    },
    onecomment: async (parent, { commentId }) => {
      return Reviews.findOne({ _id: commentId });
    },
  },
  
  Mutation: {
    login: async (parent, { email, password }) => {
      const userLogin = await Users.findOne({ email });
      if (!userLogin) {throw new AuthenticationError('No Record of Email')} // -----------------  condition: if Unknown email
      
      const correctPw = await userLogin.isCorrectPassword(password); // ------------------------  condition: if Known email, check password
      if (!correctPw) {throw new AuthenticationError('Check Ya-Self B4 Ya Wreck Ya-Self')} // ---------  condition: if Incorrect password
      
      const token = signToken(userLogin); // ---------------------------------------------------  condition: email & password match correctly, sign user in app jwt
      return { token, userLogin }   // ---------------------------------------------------------  returns 'Auth' object of user's profile 
  },
    addUser: async (parent, {email, password}) => {
      const newUser = await Users.create({email, password});
      const token = signToken(newUser); //---------------------------------------------------  signed in automatically when created new user
      return { token, newUser }; // ---------------------------------------------------------  returns 'Auth' object of user's profile 
  },

    addComment: async (parent, {comment, author, itemcode}) => {
      const newComment = await Reviews.create({comment, author, itemcode});
      await Users.findOneAndUpdate(
        { email: author },
        { $addToSet: { usercomments: newComment._id } }
      );
      return newComment;
    },

    addComments: async (parent, {reviewId, commentTxt, commentAuth, itemCode }) => {
      return Reviews.findOneAndUpdate(
        { _id: reviewId },
        { $addToSet: { allcomments: { commentTxt, commentAuth, itemCode }}},
        { new: true, runValidators: true }
      );
    },

    delComment: async (parent, { reviewId }) => {
      return Reviews.findOneAndDelete({ _id: reviewId });
    },
    delComments: async (parent, { reviewId, commentId }) => {
      return Reviews.findOneAndUpdate(
        { _id: reviewId },
        { $pull: { allcomments: { _id: commentId } }},
        { new: true }
      );
    }
    // ,
    // updateItems: async (parent, { id, inventory, price }) => {
    //   return await Greene.findOneAndUpdate(
    //     {_id: id}, 
    //     {inventory},
    //     {price},
    //     {new: true}
    //   );
    // }
  }
}

module.exports = resolvers;
