import { gql } from 'apollo-boost';

const getItemsQuery = gql`
  {
    items{
      name
      id
      startTime
      duration
    }
  }
`

const getItemQuery = gql`
  query($id: ID) {
    item(id: $id) {
      id
      name
      description
      category
      project
      startTime
      duration
      user {
        id
        name
        email
        items{
          name
          id
        }
      }
    }
  }
`

const getUsersQuery = gql`
  {
    users{
      name
      id
    }
  }
`

const addItemMutation = gql`
  mutation($name: String!, $description: String, $category: String, $project: String, $startTime: String, $duration: Number, $userId: ID!) {
    addItem(name: $name, description: $description, category: $category, project: $project, startTime: $startTime, userId: $userId){
      name
      id
    }
  }
`

const removeItemMutation = gql`
  mutation($id: ID!) {
    removeItem(id: $id) {
      id
    }
  }
`

export { getItemsQuery, getItemQuery, getUsersQuery, addItemMutation, removeItemMutation };