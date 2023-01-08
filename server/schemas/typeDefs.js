const { gql } = require('apollo-server-express');

// docs  https://graphql.org/learn/queries/

const typeDefs = gql`
  type greenes {
    _id: ID
    name: String
    brand: String
    price: String
    inventory: Number
    reviews: [Comment]!
  }

  type users {
    _id: ID
    email: String
    password: String
    comments: [Comment]!
  }

  type Query {
    --: [name of the schema]!  
    --( argVariable  : ID!): the schema
  }

  type Mutation {
    addUser(--id: String!, userName: String!): model/schema name
    addComment(--id: ID!, commentText: String!): model/schema name
    addItem(--id: ID!, itemName: ID!): model/schema name

    removeUser(userName: String!, thoughtAuthor: String!): model/schema name
    removeItem(itemId: ID!, commentId: ID!): model/schema name
    removeComment(commentID: ID!): model/schema name

  }
`;

module.exports = typeDefs;