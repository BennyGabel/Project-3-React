import { gql } from '@apollo/client';

export const QUERY_ITEMS_ALL = gql`
  query allItems {
    itemcode {
      _id
      itemcode
      name
      brand
      price
      inventory
      category
    }
  }
`;

export const QUERY_ITEMS_BRAND = gql`
  query getSingleThought($brand: brand!) {
    thought(brand: $brand) {
      _id
      name
      brand
      price
      inventory
      category
      }
    }
  }
`;
