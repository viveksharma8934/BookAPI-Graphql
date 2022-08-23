const express = require('express');
const graphqlHTTP = require('express-graphql'); 
require('dotenv').config();
const schema = require('./schema/schema');
const _ = require('lodash');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql:true
}));

app.listen(4000, () => {
    console.log('Server is running on port 4000');
} );