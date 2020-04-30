import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import SidePanel from './components/SidePanel';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Schedule-helper</h1>
        <AddItem />
        <ItemList />
        <SidePanel />
      </div>
    </ApolloProvider>
  );
}

export default App;
