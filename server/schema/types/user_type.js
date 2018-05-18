const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'UserType',
    firelds: {
        email: { type: GraphQLString }
    }

});

module.exports = UserType;