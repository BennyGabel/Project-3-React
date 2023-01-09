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
    }
   
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




// reduceOH: async (parent, {itemcode, inventory}) => {
//     return Greene.findByIdAndUpdate({ inventory });
// },

       // getAllUsers: async() => {
        //     return Users.find().sort({email: 1})
        // },
        // getOneUser: async(parent, args) => {
        //     return Users.findOne({args.user}).
        // },
   


    // Query: {
    //     reviews: async() => {
    //         return Reviews.find().sort({itemcode: 1,createdAt: -1})
    //     }
    // },
    // Query: {
    //     users: async() => {
    //         return Users.find().sort({email: 1})
    //     }
    // },

    // ***  Don't forget to add a comma in line 8 if another function is added ***

    // thought: async (parent, { thoughtId }) => {
    //     return Thought.findOne({ _id: thoughtId });
    //   },    