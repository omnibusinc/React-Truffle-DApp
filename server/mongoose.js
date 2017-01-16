const mongoose =  require('mongoose');
const config = require('../config/server.config.development');
const debug = require('debug')('app:mongoose');

const mongoConfig = config.get('mongodb');

mongoose.connect(mongoConfig.connectString, mongoConfig.server);
debug('starting mongoose');

mongoose.connection.on('connected', function () {
  debug('Mongoose connection open');
});

mongoose.connection.on('error', function (err) {
  console.error('Mongoose connection error: %s'.red, err);
});

mongoose.connection.on('disconnected', function () {
  debug('Mongoose default connection disconnected');
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.warn('Mongoose connection disconnected through app termination'.red);
    process.exit(0);
  });
});

module.exports = mongoose;
