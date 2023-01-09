import { gql } from '@apollo/client';

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