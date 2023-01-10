import { gql } from '@apollo/client';

export const QUERY_ITEMS_ALL = gql`
  query allItems {
    greenes {
      _id
      name
      brand
      price
      itemcode
      inventory
      category
      comments {
        comment
      }
    }
  }
`;

// export const QUERY_ITEMS_BRAND = gql`
  // query getSingleThought($brand: brand!) {
  //   thought(brand: $brand) {
  //     _id
  //     name
  //     brand
  //     price
  //     inventory
  //     category
  //     }
  //   }
  // }
// `;
