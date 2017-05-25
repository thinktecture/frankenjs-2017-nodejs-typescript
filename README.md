# frankenjs-2017-nodejs-typescript

Slides for this talk are on [SpeakerDeck](https://speakerdeck.com/manuelrauber/modern-web-apis-with-node-dot-js-and-typescript).

Very simple sample for Node.js Web API bootstrapping with restify using TypeScript.

## Setup

Run `npm i` or `yarn` to install all dependencies. Then run `npm start` to start.

## Routes 

Routes can be found in the controllers, as well as the needed parameters.

* [Customer](https://github.com/thinktecture/frankenjs-2017-nodejs-typescript/blob/master/src/controllers/customer.ts#L9)

## Model relationships

This sample contains no relationships between models. 
If you are interest in this, please take a look here: [basta-spring-2017-nodejs-typescript-demo](https://github.com/thinktecture/basta-spring-2017-nodejs-typescript-demo)

## Resources

* [restify](http://restify.com/) Used for Web API hosting.
* [SequelizeJS](http://sequelizejs.com) Used to provide an ORM accessing the PostgreSQL database. 
* [ts-node](https://github.com/TypeStrong/ts-node) Used to run the TypeScript API directly from the npm scripts.
