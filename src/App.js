import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import SidePanel from './components/SidePanel';
import Navbar from './components/Navbar/Navbar';
import Schedule from './components/Schedule';

const client = new ApolloClient({
  uri: 'https://schedule-helper-core.hunterred50.now.sh/graphql'//'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <Navbar />
        <div className="mid">
        <Schedule />
        <SidePanel />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
