const { AuthenticationError } = require('apollo-server-express');
const { Greene, Reviews, Users }= require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    greenes: async() => {
      return await Greene.find({}).populate('comments').populate({     // [1] Ascending  [-1] Descending
        path: 'comments',
        populate: 'user'
      }); 
    },
    greene: async (parent, args) => {
        return await Greene.findById(args.id);
      },
    comments: async() => {
      return await Reviews.find({}).populate('itemcode');
    },
    allusers: async () => {
      return await Users.find({});
    },
    getCategory: async (parent, args) => {
      return await Greene.find(args.category);
    },
    users: async () => {
      return Users.find()
        .select('-__v -password')
    },

  },
  
  Mutation: {

    addUser: async (parent, args) => {
      const user = await Users.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }















  //   updateItems: async (parent, { id, inventory, price }) => {
  //     return await Greene.findOneAndUpdate(
  //       {_id: id}, 
  //       {inventory},
  //       {price},
  //       {new: true}
  //     );
  //   }
  }
}

module.exports = resolvers;
