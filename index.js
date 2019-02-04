const generateSchema = require('./generate-schema')
const startServer = require('./server')

if (!process.env.KENTICO_CLOUD_PROJECT_ID) {
  throw new Error('Please set the KENTICO_CLOUD_PROJECT_ID environment variable')
}

generateSchema()
  .then(startServer)
  .catch(error => console.error('🚫  Error starting GraphQL server \n\n', error, '\n\n'))
