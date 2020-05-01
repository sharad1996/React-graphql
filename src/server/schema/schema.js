import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from '../resolvers/resolvers';

const typeDefs = `
  type CategoryType {
    _id: ID!,
    image_url: String,
    name: String,
    children: [ChildrenType]
  }

  type ChildrenType {
    _id: Int
    parant_id: ID
    name: String
  }

  type ProductType {
    _id: ID!,
    category_id: ID!,
    description: String,
    image_url: String,
    name: String,
    price: Int,
    vendor_location: String,
    vendor_name: String,
  }

  type Query {
    category(id: ID!): CategoryType
    categories: [CategoryType]
    product(id: ID!): ProductType
    products: [ProductType]
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
