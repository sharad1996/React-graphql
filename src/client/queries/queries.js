import { gql } from 'apollo-boost';

const getCategoryQuery = gql`
  query($id: ID!){
    category(id: $id){
      _id
      image_url
      name
      children{
        _id
        name
        parant_id
      }
    }
  }
`;

const getCategoriesQuery = gql`
  query{
    categories{
      _id
      image_url
      name
      children{
        _id
        name
        parant_id
      }
    }
  }
`;

const getProductQuery = gql`
  query($id: ID!){
    product(id: $id){
      _id
      category_id
      description
      image_url
      name
      price
      vendor_location
      vendor_name
    }
  }
`;

const getProductsQuery = gql`
  query{
    products {
      _id
      name
      category_id
      description
      image_url
      price
      vendor_location
      vendor_name
    }
  }
`;

export {
  getCategoryQuery,
  getCategoriesQuery,
  getProductQuery,
  getProductsQuery,
};
