const { gql } = require('apollo-server-express');

// docs  https://graphql.org/learn/queries/

const typeDefs = gql`
  type Greene {
    _id: ID
    name: String
    brand: String
    price: String
    image: String
    itemcode: String
    inventory: Int
    category: String
    comments: [Reviews]!
  }

  type Users {
    _id: ID
    email: String
    password: String
  
  }

  type Reviews {
    _id: ID
    comment: String
    author: String
    users: Users
    itemcode: Greene
    allcomments: [Comment]!
  
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    greenes: [Greene]
    greene(id:ID!): Greene
    categories(category:String!):Greene
    comments: [Reviews]
    allusers:[Users]
    oneuser(username: String!): User
    
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password:String!): Auth
    addComment(comment: String!, author: String!, itemcode: String!): Reviews
    addComments(reviewId:ID!, commentTxt: String!, commentAuth: String!, itemCode: String!): Reviews
    delComment(reviewId:ID!): Reviews
    delComments(reviewId:ID!, commentId: ID!): Reviews
    updateItems(id:ID!, inventory:Int!, price:Float): Greene
  }
`;

module.exports = typeDefs;