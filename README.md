# kentico-cloud-graphql-server

> A graphql server that dynamically updates its schema from your Kentico Cloud instance using webhooks.

## Getting started

### Prerequisites

* Installed latest stable NodeJS
* Installed yarn

### Set the following environment variables on your system:
  
* `KENTICO_CLOUD_PROJECT_ID`

### Install dependencies:

```bash
yarn
```
### Generate the schema

```bash
yarn run generate-schema
```
💁‍♂️ You should notice that a file called `schema.js` has been generated. This is the dynamic schema that is pulled in from your headless CMS. 

### Start server

⚠️ The command below **will not** work if you have not generated a schema.

```bash
yarn start
```
