import Category from '../models/category.js';
import Product from '../models/product.js';

export const resolvers = {
  Query: {
    product: async (root, id) => {
      return Product.findById(id);
    },
    products: () => {
      return Product.find({});
    },
    category: (root, { id }) => {
      return Category.findById(id);
    },
    categories: () => {
      return Category.find({});
    },
  },
};
