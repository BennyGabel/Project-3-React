const { Greene, Reviews, Users }= require('../models');

const resolvers = {
    Query: {
        greene: async() => {
            return Greene.find().sort({ name: 1 });   // [1] Ascending  [-1] Descending
        }
    },
    Query: {
        reviews: async() => {
            return Reviews.find().sort({itemcode: 1,createdAt: -1})
        }
    },

    // ***  Don't forget to add a comma in line 8 if another function is added ***

    // thought: async (parent, { thoughtId }) => {
    //     return Thought.findOne({ _id: thoughtId });
    //   },    

    Mutation: {
        // reduceOH = reduce On Hand - after inventory is sold
        reduceOH: async (parent, {itemcode, inventory}) => {
            return Greene.findByIdAndUpdate({ inventory });
        },
        addComment: async (parent, {comment, email, itemcode}) => {
            return Reviews.create({comment, email, itemcode})
        }

        /*
            addThought: async (parent, { thoughtText, thoughtAuthor }) => {
            return Thought.create({ thoughtText, thoughtAuthor });
            },
            addComment: async (parent, { thoughtId, commentText }) => {
            return Thought.findOneAndUpdate(
                { _id: thoughtId },
                {
                $addToSet: { comments: { commentText } },
                },
                {
                new: true,
                runValidators: true,
                }
            );
            },
        */

    }


}

module.exports = resolver;