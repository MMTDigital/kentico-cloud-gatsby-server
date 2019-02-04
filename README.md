# kentico-cloud-graphql-server

> A graphql server that dynamically updates its schema from your Kentico Cloud instance using webhooks.

<br />

![](https://i.giphy.com/cbG9wtoO8QScw.gif)

## Getting started

### Prerequisites 

* Installed latest stable NodeJS
* Installed yarn

### Set the following environment variables on your system:
  
* `KENTICO_CLOUD_PROJECT_ID` — **Required**
* `GRAPHQL_SERVER_PORT` — **Optional** (default `4000`)
* `GRAPHQL_SERVER_PATH` — **Optional** (default `/graphql`) Note: remember the forward slash

[bash - How do I add environment variables?](https://askubuntu.com/questions/58814/how-do-i-add-environment-variables)

### Install dependencies:

```bash
yarn
```

### Start server

```bash
yarn start
```

### Visually browse your API and schema or make requests to it

```
http://0.0.0.0:4000/graphql
```

Note: If you changed the port or path your URL will be different to the above.

## Other useful information

### Adding more data sources

This server prescribes Kentico Cloud as a data source, but you are free to add other sources that your GraphQL API can exposes with your Kentico Cloud data.

* Add your schema in the `schema` folder. The schema should have a `.graphql` extension and be **pure, valid graphql schema** — as opposed to — an exported module, string or `gql` function. You do not need to add this file to the index, new schemas will be picked up automatically.

* Add your resolvers in the `resolvers` folder. Your resolvers file should export a default object with one or more resolvers that map to your schema. You do not need to add this file to the index, new resolvers will be picked up automatically.

For more information on how to build schemas and resolvers, check out the Apollo server documentation: 

https://www.apollographql.com/docs/apollo-server/essentials/schema.html

https://www.apollographql.com/docs/apollo-server/essentials/data.html

### Generating the schema manually

Should you need to generate the schema without running the server, you can run:

```bash
yarn run generate-schema
```

Your schema will be generated in the following location: `schema/kentico-cloud-schema.graphql`
