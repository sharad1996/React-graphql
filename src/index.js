import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/components/App';

const PORT = 4001;
const client = new ApolloClient({
  uri: `http://localhost:${PORT}/graphql`,
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>, document.getElementById('root'));
