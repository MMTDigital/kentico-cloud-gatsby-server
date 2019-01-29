# kentico-cloud-graphql-server

> A graphql server that dynamically updates its schema from your Kentico Cloud instance using webhooks.

## Getting started

### Prerequisites

* Installed latest stable NodeJS
* Installed yarn

### Set the following environment variables on your system:
  
* `KENTICO_CLOUD_PROJECT_ID`

[bash - How do I add environment variables?](https://askubuntu.com/questions/58814/how-do-i-add-environment-variables)

### Install dependencies:

```bash
yarn
```
### Generate the schema

```bash
yarn run generate-schema
```
💁‍♂️ You should notice that a file called `kentico-cloud-schema.graphql` has been generated in the `schema` folder. This is the dynamic schema that is pulled in from your headless CMS. Please do not change the gitgnore or check this file into the repo.

### Start server

⚠️ The command below **will not** work if you have not generated a schema.

```bash
yarn start
```

### Adding more data sources

This server only prescribes Kentico Cloud as a data source, but you are free to add other sources that your GraphQL API can exposes with your Kentico Cloud data.
