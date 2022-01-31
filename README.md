## Description

A middleware backend supplying GraphQL services for frontend from REST API backend.

Project uses code-first approach to generate GraphQL Schema and Definitions from supplied Typescript models.

### Structure:

`src/common` - Common interfaces used in model definitions

`src/services` - Services Root

`src/services/api` - API-related services

`src/graphql` - GraphQL Typescript definitions

`src/graphql/dto` - GraphQL Input type's Argument type definitions

`src/graphql/models` - GraphQL Typescript model definitons

`src/graphql/resolvers` - GraphQL Typescript Resolvers

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Contributions

- Author - [Alvin Ahmadov](https://github.com/alvinahmadov)

## License

Nest is [MIT licensed](LICENSE).
