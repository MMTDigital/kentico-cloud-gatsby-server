const generateSchema = require('./generate-schema')
const startServer = require('./server')

if (!process.env.KENTICO_CLOUD_PROJECT_ID) {
  throw new Error('Please set the KENTICO_CLOUD_PROJECT_ID environment variable')
}

generateSchema()
  .then(startServer)
  .then(url => console.info(`\n 🚀  GraphQL server ready at ${url} \n`))
  .catch(error => console.error('🚫  Error starting GraphQL server \n\n', error, '\n\n'))
