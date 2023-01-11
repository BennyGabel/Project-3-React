import { gql } from '@apollo/client';

export const QUERY_ITEMS_ALL = gql`
  query allItems {
    greenes {
      _id
      name
      brand
      price
      image
      itemcode
      inventory
      category
      comments {
        comment
      }
    }
  }
`;

export const QUERY_ONE_USER = gql`
  query oneuser {
    users {
      _id
      email
      password
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  query allusers {
    users {
      _id
      email
      password
    }
  }
`;

// export const QUERY_ONE_USER

// export const QUERY_CATEGORIES = gql`
//   query byCategory ($category: category!){
//     greenes(category:$category) {
//       _id
//       name
//       brand
//       price
//       image
//       itemcode
//       inventory
//       category
//       comments {
//         comment
//       }
//     }
//   }
// `;


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
