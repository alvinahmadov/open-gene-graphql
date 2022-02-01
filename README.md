## Description

A middleware backend supplying GraphQL services for frontend from REST API backend.

Project uses code-first approach to generate GraphQL Schema and Definitions from supplied Typescript models.

To test graphql endpoints, go to `src/app.module.ts` and set `playground` field of `GraphQLModule.forRoot` option to `true`.
Next open your browser and go to `http://localhost:5500/graphql` (default, look .env).

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

## GraphQL usage instructions

Query endpoint:
```graphql
query($lang: String!, $paging: PagingOptions, $filter: FilterOptions, $sortBy: SortOptions, $sortOrder: SortOrder) {
    search(lang: $lang, paging: $paging, filter: $filter, sortBy: $sortBy, sortOrder: $sortOrder) {
      items {
          id
          name
          ncbiId
          aliases
          ensembl
          expressionChange
          homologueTaxon
          methylationCorrelation
          symbol
          diseases
          diseaseCategories
          timestamp {
              changed
              created
          }
          origin {
              id
              age
              order
              phylum
          },
          familyOrigin {
              id
              age
              order
              phylum
          },
          ...
        }
    }
}
```
Variables:
```json
{
  "lang": "en",
  "sortBy": "Default",
    "sortOrder": "ASC",
    "paging": {
      "page": 1,
      "pageSize": 1
    },
    "filter": {
      "byDiseases": "160",
      "byDiseaseCategories": "685"
    }
}
```

Result:
```json
{
  "data": {
    "search": {
      "items": [
        {
          "id": 114,
          "name": "Fas cell surface death receptor",
          "ncbiId": 355,
          "aliases": [
            "ALPS1A",
            "APO-1",
            "APT1",
            "CD95",
            "FAS1",
            "FASTM",
            "TNFRSF6"
          ],
          "ensembl": "ENSG00000026103",
          "expressionChange": 2,
          "homologueTaxon": "Euteleostomi",
          "methylationCorrelation": "",
          "symbol": "FAS",
          "diseases": {
            "160": {
              "name": "Autoimmune lymphoproliferative syndrome",
              "icdCode": "D47.9",
              "icdName": "Neoplasm of uncertain or unknown behaviour of lymphoid, haematopoietic and related tissue, unspecified"
            }
          },
          "diseaseCategories": {
            "685": {
              "icdCode": "D37-D48",
              "icdCategoryName": "Neoplasms of uncertain or unknown behaviour"
            }
          },
          "timestamp": {
            "changed": "1638463685",
            "created": ""
          },
          "origin": {
            "id": null,
            "age": "",
            "order": null,
            "phylum": ""
          },
          "familyOrigin": {
            "id": 24,
            "age": "",
            "order": 25,
            "phylum": ""
          }
        }
      ]
    }
  }
}
```

[comment]: <> (## Test)

[comment]: <> (```bash)

[comment]: <> (# unit tests)

[comment]: <> ($ yarn run test)

[comment]: <> (# e2e tests)

[comment]: <> ($ yarn run test:e2e)

[comment]: <> (# test coverage)

[comment]: <> ($ yarn run test:cov)

[comment]: <> (```)

## Contributions

- Author - [Alvin Ahmadov](https://github.com/alvinahmadov)

## License

Nest is [MIT licensed](LICENSE).
