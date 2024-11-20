import graphql from 'graphql';
import userQuery from '../queries/userQuery.js';
import usersQuery from '../queries/usersQuery.js';

const queryType = new graphql.GraphQLObjectType({
    name: "Query",
    fields: {
        user: userQuery,
        users: usersQuery,
    },
});


export default queryType;