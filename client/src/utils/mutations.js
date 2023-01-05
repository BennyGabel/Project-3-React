import { gql } from '@apollo/client';

export const addNewUser = gql`
  mutation addNewUser($--: String!, $--: String!) {
    addThought(--: $--, --: $--) {
      _id
      userId
      password
      createdAt
      comments {
        _id
        comment
      }
    }
  }
`;

export const addComment = gql`
  mutation addComment($userId: ID!, $comment: String!) {
    addComment(userId: $userId, comment: $comment) {
      _id
      userName
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;