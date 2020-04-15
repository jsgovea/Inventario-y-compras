import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: ({netwotError, graphQLErrors}) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('netwotError', netwotError);
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Hola</h1>
    </ApolloProvider>
  );
}

export default App;
