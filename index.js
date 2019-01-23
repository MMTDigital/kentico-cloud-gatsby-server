const { ApolloServer, gql } = require('apollo-server')
const { TYPE_DEFINITION } = require('./schema')
const { queryTypes, resolvers } = require('./queries')

const server = new ApolloServer({
  typeDefs: [
    queryTypes,
    TYPE_DEFINITION
  ],
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀  Kentico Cloud GraphQL server ready at ${url}`)
})
