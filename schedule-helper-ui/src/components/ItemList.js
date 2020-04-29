import React, { useState } from 'react'
import { graphql } from 'react-apollo';
import { getItemsQuery } from '../queries/queries';

import ItemDetails from './ItemDetails';

const ItemList = (props) => {
  const [selected, setSelected] = useState(null)
  console.log(props.data);
  function displayItems() {
    let data = props.data;
    if(data.loading) {
      return(<div>Loading items...</div>);
    } else {
      return data.items.map(item => {
        return(
        <li key={item.id} onClick={ e => setSelected(item.id)}>{ item.name }</li>
        )
      })
    }
  }
  return (
    <div>
      <ul id="item-list">
        { displayItems() }
      </ul>
      <ItemDetails itemId={selected} />
    </div>
  )
}

export default graphql(getItemsQuery)(ItemList);
