const { Greene, Users }= require('../models');

const resolvers = {
    Query: {
        greene: async() => {
            return Greene.find().sort({ name: 1 });   // [1] Ascending  [-1] Descending
        }
    },

    // ***  Don't forget to add a comma in line 8 if another function is added ***

    // thought: async (parent, { thoughtId }) => {
    //     return Thought.findOne({ _id: thoughtId });
    //   },    

    Mutation: {
        // reduceOH = reduce On Hand - after inventory is sold
        reduceOH: async (parent, {name, brand}) => {
            return Greene.create({ name, brand });
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