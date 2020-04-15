import React, { Fragment } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Header from './components/Header';
import Clientes from './components/Clients';
import NewClient from './components/NewClient';
import EditClient from './components/EditClient';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  onError: ({ netwotError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors);
    console.log('netwotError', netwotError);
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Clientes} />
              <Route exact path="/cliente/editar/:id" component={EditClient} />
              <Route exact path="/cliente/nuevo" component={NewClient} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
