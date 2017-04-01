'use strict';

const debug = require('debug')('routes');

const routeHandlers = {};

routeHandlers.example = function(request, reply) {
  let obj = {
    example: 'updated value from API'
  };
  reply(obj);
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
