const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const ItemType = new GraphQLObjectType({
  name: 'ToDoItem',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    category: { type: GraphQLString },
    project: { type: GraphQLString },
    startTime: { type: GraphQLString },
    duration: { type: GraphQLInt }
  })
})