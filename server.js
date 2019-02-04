const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const schema = require('./schema')
const resolvers = require('./resolvers')

const port = process.env.GRAPHQL_SERVER_PORT || 4000
const path = process.env.GRAPHQL_PATH || '/graphql'

const startServer = () => {
  const app = express()
  const typeDefs = [ schema ]
  const graphqlServer = new ApolloServer({ typeDefs, resolvers })
  graphqlServer.applyMiddleware({ app, path })
  app.listen({ port }, () => console.info(`\n 🚀  GraphQL server ready at 0.0.0.0:${port}${path} \n`))
}


module.exports = startServer
