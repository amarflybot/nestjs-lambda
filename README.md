## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Docker local setup

```bash
# Build docker image
docker build -t local-lambda .

# Run local image
docker run --rm -p 9000:8080 --name local-lambda local-lambda

# Request for data
curl --location --request POST 'http://localhost:9000/2015-03-31/functions/function/invocations' \
--header 'Content-Type: application/json' \
--data-raw '{
    "resource": "/{proxy+}",
    "path": "/",
    "httpMethod": "GET"
}'

```
