import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import { buildSchema } from 'graphql';
import { schema } from './schema/schema';
import Categories from './models/category.js';
import Product from './models/product.js';

mongoose.connect('mongodb://localhost:27017/products');
mongoose.connection.once('open', () => {
  console.log('Connected to db...');
});

const PORT = 4001;
const server = express();
server.use('*', cors({ origin: '*' }));

server.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
