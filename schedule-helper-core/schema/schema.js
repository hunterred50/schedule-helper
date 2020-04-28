const graphql = require('graphql');
const _ = require('lodash');

const { 
  GraphQLSchema, 
  GraphQLObjectType, 
  GraphQLID,
  GraphQLString, 
  GraphQLInt,
  GraphQLList,
} = graphql;

var items = [
  { name: 'work on schedule app', id: '1', userId: '1' },
  { name: 'yoga', id: '2', userId: '1' },
  { name: 'run', id: '3', userId: '1' },
  { name: 'big meal', id: '4', userId: '1' },
  { name: 'poopoopeepee', id: '5', userId: '2' },
  { name: 'drum', id: '6', userId: '3' }
];

var users = [
  { name: 'hunter', id: '1', email: 'hunter@mail.com' },
  { name: 'nick', id: '2' },
  { name: 'michael', id: '3' },
]

const ItemType = new GraphQLObjectType({
  name: 'ToDoItem',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    category: { type: GraphQLString },
    project: { type: GraphQLString },
    startTime: { type: GraphQLString },
    duration: { type: GraphQLInt },
    user: {
      type: UserType,
      resolve(parent, args) {
        console.log(parent);
        return _.find(users, { id: parent.userId });
      }
    }
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    birthdate: { type: GraphQLString },
    todoitems: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        return _.filter(items, { userId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    todoitem: {
      type: ItemType,
      args: { id: { type: GraphQLID }},
      resolve(parent, args){
        // code to get data from db / other source
        return _.find(items, { id: args.id });
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID}},
      resolve(parent, args){
        return _.find(users, { id: args.id });
      }
    },
    items: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        return items;
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return users;
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});