const fs = require('fs')
const { promisify } = require('util')
const { DeliveryClient } = require('kentico-cloud-delivery')
const { projectId } = require('./config/kentico-delivery-config')
const { SchemaGenerator } = require('kentico-cloud-graphql-schema-generator/_commonjs/schema-generator')

const deliveryClient = new DeliveryClient({
  enableSecuredMode: false,
  projectId
})

const writeFile = promisify(fs.writeFile)
const generator = new SchemaGenerator(deliveryClient)

generator.getSchema()
  .then(result => writeFile('./schema/kentico-cloud-schema.graphql', result))
  .catch(error => console.error('Error while writing schema to file', error))
