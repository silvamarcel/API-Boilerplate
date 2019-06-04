# API Documentation

## API Status
[![Build Status](https://semaphoreci.com/api/v1/<semaphoreAccount>/<apiProjectName>/branches/master/badge.svg)](https://semaphoreci.com/<semaphoreAccount>/<apiProjectName>)

## Table of contents

* [Dependencies](#dependencies)
* [Install](#install)
* [Run](#run)
* [Test](#test)
* [Deploy](#deploy)
* [Structure of the API](#structure-of-the-api)
* [Deploying to prod](#deploying-to-prod)

# Follow the next steps to Install, Run, Test and Deploy the API.

## Dependencies

* NodeJS
* MongoDB
* Docker (Optional)

## Install
```
npm i
```

## Run
```
npm start
```

## Tests
### Runs all tests like in the CI environment
```
npm test
```
### Runs all tests like in the CI environment and keep watching
```
npm run test:auto
```
### Coverage tests
```
npm run coverage
```
### Lint tests
```
npm run lint
```

## Deploy
```
It automatically deploys the code to Staging when it is committed in the Master branch.
```

## Structure of the API
    .
    ├── server                  # Server Source files
        ├── api                 # API Modules/Routers/Features files
        ├── auth                # Authentication files
        ├── config              # Config files
        ├── middleware          # Middlewares of the application
        ├── utils               # Tools and utilities
        ├── server.js           # Server definition file of the application
    ├── tests                   # Setup, tools and utilities for tests
        ├── utils               # Tools and utilities for tests
        ├── setup.js            # Setup for all integration tests
    ├── index.js                # Main file of the application
    ├── package.json            # NPM configuration file
    ├── LICENSE                 # MIT License file
    └── README.md               # This file

## Deploying to prod 
```
TODO
```
