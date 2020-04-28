const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://hunter:riolu1@schedulecluster-ey7zq.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema, // both names are the same so es6 doesn't need schema: schema
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('listening on port 4000');
});