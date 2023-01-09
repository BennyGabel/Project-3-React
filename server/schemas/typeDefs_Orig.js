const { gql } = require('apollo-server-express');

// docs  https://graphql.org/learn/queries/

const typeDefs = gql`
  type Greene {
    _id: ID
    name: String
    brand: String
    price: String
    itemcode: String
    inventory: Int
    category: String
    comments: [Reviews]
  }

  type Users {
    _id: ID
    email: String
    password: String
  
  }
  type Reviews {
    _id: ID
    comment: String
    user: Users
    itemcode: Greene
  
  }

  type Query {
    greenes: [Greene]
    greene(id:ID!): Greene
    comments: [Reviews]
 
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