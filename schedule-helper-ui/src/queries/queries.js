import { gql } from 'apollo-boost';

const getItemsQuery = gql`
  {
    items{
      name
      id
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
  mutation($name: String!, $description: String, $category: String, $project: String, $userId: ID!) {
    addItem(name: $name, description: $description, category: $category, project: $project, userId: $userId){
      name
      id
    }
  }
`

export { getItemsQuery, getItemQuery, getUsersQuery, addItemMutation };