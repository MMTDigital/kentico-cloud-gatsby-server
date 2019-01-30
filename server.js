const { ApolloServer, gql } = require('apollo-server')
const schema = require('./schema')
const resolvers = require('./resolvers')

const startServer = () => {
  const typeDefs = [ schema ]
  const server = new ApolloServer({ typeDefs, resolvers })
  return server.listen().then(({ url }) => url)
}

module.exports = startServer
