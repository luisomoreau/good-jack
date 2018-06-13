# Good Jack Project

Donations project - From a simple REST API in nodeJS using loopback Framework to Angular 6 integration.

## Requirements

This project has been developed using node v10.1.0 and npm v5.6.0.

Install loopback CLI globally:

```
npm i -g loopback-cli
```

Install @angular/cli globally:

```
npm i -g @angular/cli
```

## Get started

### API

Jump into the api/ repository and install the required dependencies:

```
npm i
```

To start the application run:

```
MONGODB_URI="mongodb://<user>:<password>@<url>:<port>/<dbname>" npm start
```

Go to http://localhost:3000/explorer to see the API explorer

** Experimental ** To generate the Angular SDK (It is just a reminder it should be installed while installing all the depencies):

```
npm install --save-dev @mean-expert/loopback-sdk-builder
```

To generate Angular models from loopback, just run:

```
npm run build:sdk
```

### Webapp

From the root of your project, go to the webapp/ repository and run:`

```
npm i
```

We will also install the socket io client to have more fun :) (It is just a reminder it should be installed while installing all the depencies)

```
npm install --save @types/socket.io-client
```
