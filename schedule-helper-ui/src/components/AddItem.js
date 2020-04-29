import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import compose from 'lodash/flowRight';
import { getUsersQuery, addItemMutation, getItemsQuery } from '../queries/queries';

const AddItem = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [project, setProject] = useState("");
  const [userId, setUserId] = useState("");

  // let state = {name, description, category, project, userId};
  
  function displayUsers(){
    let data = props.getUsersQuery;
    if(data.loading){
      return (<option disabled>loading users...</option>);
    } else {
      return data.users.map(user => {
        return (<option key={user.id} value={user.id}>{user.name}</option>);
      })
    }
  }

  function submitForm(e){
    e.preventDefault();
    props.addItemMutation({
      variables: {
        name: name,
        description: description,
        category: category,
        project: project,
        userId: userId
      },
      refetchQueries: [{ query: getItemsQuery}]
    });
  }

  return (
    <form id="add-item" onSubmit={submitForm}>
      <div className="field">
        <label>Item name:</label>
        <input type="text" onChange={ e => setName(e.target.value)}/>
      </div>

      <div className="field">
        <label>Description:</label>
        <input type="text" onChange={ e => setDescription(e.target.value)}/>
      </div>

      <div className="field">
        <label>Category (optional):</label>
        <input type="text" onChange={ e => setCategory(e.target.value)}/>
      </div>

      <div className="field">
        <label>Project (optional):</label>
        <input type="text" onChange={ e => setProject(e.target.value)}/>
      </div>

      <div className="field">
        <label>User:</label>
        <select onChange={ e => setUserId(e.target.value)}>
          <option>Select user</option>
          {displayUsers()}
        </select>
      </div>

      <button>+</button>
    </form>
  )
}

export default compose(
  graphql(getUsersQuery, { name: "getUsersQuery"}),
  graphql(addItemMutation, { name: "addItemMutation"})
)(AddItem);
