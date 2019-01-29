const { ApolloServer, gql } = require('apollo-server')
const schema = require('./schema')
const { queryTypes, resolvers } = require('./queries')

const server = new ApolloServer({
  typeDefs: [
    queryTypes,
    schema
  ],
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀  Kentico Cloud GraphQL server ready at ${url}`)
})
