import React from 'react';
import { graphql } from 'react-apollo';
import { getItemQuery } from '../queries/queries';

const ItemDetails = (props) => {
  function displayItemDetails() {
    const { item } = props.data;
    if(item) {
      return(
        <div>
          <h2>{ item.name }</h2>
          <h3>{ item.user.name }</h3>
          <p>{ item.description }</p>
          <p>{ item.category }</p>
          <ul className="other-items">
            {
              item.user.items.map(thing => {
                return <li key={ thing.id }>{thing.name}</li>
              })
            }
          </ul>
        </div>
      )
    } else {
      return (
      <div>No item selected...</div>
      )
    }
  }

  return (
    <div id="book-details">
      {displayItemDetails()}
    </div>
  )
}

export default graphql(getItemQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.itemId
      }
    }
  }
})(ItemDetails);