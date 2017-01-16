'use strict';

const debug = require('debug')('routes');
const exampleService = require('../services/exampleService');

const routeHandlers = {};

routeHandlers.example = function(request, reply) {
  let obj = {
    example: 'updated value from API'
  };
  reply(obj);
}

routeHandlers.mongoose = function(request, reply) {
  exampleService.getExample().then((result) => {
    reply(result);
  });
}

module.exports.routes = [
  {
    method: 'GET',
    path: '/api/example',
    handler: routeHandlers.example,
    config: {
      cors: {
        origin: ['http://localhost:3001'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    }
  },
  {
    method: 'GET',
    path: '/api/mongoose',
    handler: routeHandlers.mongoose,
    config: {
      cors: {
        origin: ['http://localhost:3001'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    }
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '/',
        listing: false,
        index: true
      }
    }
  }
];
