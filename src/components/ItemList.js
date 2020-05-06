import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import compose from 'lodash/flowRight';
import { getItemsQuery, removeItemMutation } from '../queries/queries';

import ItemDetails from './ItemDetails';

const ItemList = (props) => {
  const [selected, setSelected] = useState(null)
  console.log(props.getItemsQuery.items);

  function removeItem(id) {
    console.log(id);
    props.removeItemMutation({
      variables: {
        id: id
      },
      refetchQueries: [{ query: getItemsQuery}]
    });
  }

  function displayItems() {
    let data = props.getItemsQuery;
    if(data.loading) {
      return(<div>Loading items...</div>);
    } else {
      return data.items.map(item => {
        return(
          <div key={item.id}>
            <li onClick={ e => setSelected(item.id)}>
              { item.name } { item.startTime } 
            </li>
            <button onClick={ e => removeItem(item.id) }>x</button>
          </div> // item modal
        )
      })
    }
  }

  return (
    <div className="item-list">
      <ul>
        { displayItems() }
      </ul>
      <ItemDetails itemId={selected} />
    </div>
  )
}

export default compose(
  graphql(getItemsQuery, { name: "getItemsQuery" }),
  graphql(removeItemMutation, { name: "removeItemMutation"})
)(ItemList);
