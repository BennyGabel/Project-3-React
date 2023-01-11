const { Greene, Reviews, Users }= require('../models');

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
    oneuser: async(parent, {emaild}) => {
       return await Users.findOne({_id:emailId});
    },
    allusers: async() => {
      return await Users.find({});
    },
    userId: async(parents, args) => {
      return await Users.findById(args.id).populate('email');
   },

  },
  
  Mutation: {
    addComment: async (parent, {comment, user, itemcode}) => {
      return await Reviews.create({comment, user, itemcode})
    },
    addUser: async (parent, {email, password}) => {
      return await Users.create({email, password})
    },
    updateItems: async (parent, { id, inventory, price }) => {
      return await Greene.findOneAndUpdate(
        {_id: id}, 
        {inventory},
        {price},
        {new: true}
      );
    }
  }
}

module.exports = resolvers;
