'use strict';

const nconf = require('nconf');

const config = {
  mongodb: {
    connectString: 'mongodb://localhost:27017/rrwhm',
    server: {
      socketOptions: {
        keepAlive: 1,
        connectTimeoutMS: 5000
      },
      auto_reconnect: true
    }
  }
};

nconf.defaults(config);

module.exports = nconf;
