import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'https://point.md/graphql',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query articles {
        contents(
          project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1", 
          lang: "ru", 
          skip: 0, 
          take: 10
        ) {
          id
        }
      }
    `,
  })
  .then((result) => console.log(result, 'apollo'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
