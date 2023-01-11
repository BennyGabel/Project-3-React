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
    image: String
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
    addComment(users: String!, comment: String!, itemcode: String!): Reviews
    addUser(email: String!, password:String!): Users
    updateItems(id:ID!, inventory:Int!, price:Float): Greene
  }
`;

module.exports = typeDefs;