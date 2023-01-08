import { gql } from '@apollo/client';

export const nameOfQuery = gql`
  query schemaName($id: ID!) {
    keyName1(id: $Id) {
        _id
        keyName1-key1
        keyName1-key2
    }
  }
`;

export const nameOfQuery2 = gql`
  query schemaName($id: ID!) {
    keyName1(id: $Id) {
      _id
      keyName1-key1
      keyName1-key2
      keyName1-key3 {
        _id
        keyName1-key3-key1
        keyName1-key3-key2
      }
    }
  }
`;

