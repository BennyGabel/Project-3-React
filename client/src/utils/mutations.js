import { gql } from '@apollo/client';

// BEG From Class
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
  ) {
    addUser(
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

// END From Class

// add fix 
// export const addNewUser = gql`
//   mutation addNewUser($--: String!, $--: String!) {
//     addThought(--: $--, --: $--) {
//       _id
//       userId
//       password
//       createdAt
//       comments {
//         _id
//         comment
//       }
//     }
//   }
// `;

// export const addComment = gql`
//   mutation addComment($commentId:ID!, $user: String!, $comment: String!, $itemcode: String!) {
//     addComment(user: $userId, comment: $comment) {
//       _id
//       userName
//       comments {
//         _id
//         commentText
//         createdAt
//       }
//     }
//   }
// `;