const { gql } = require('apollo-server-express');

// docs  https://graphql.org/learn/queries/

const gqlDefs = gql`
  type --- {
    _id: ID
    --: String
    --: String
    --: String
    --: [Comment]!
  }

  type Comment {
    _id: ID
    --: String
    --: String
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

module.exports = gqlDefs;