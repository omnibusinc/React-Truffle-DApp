'use strict';

const debug = require('debug')('services:exampleService');
const exampleModel = require('../models/example');
const exampleService = {};

exampleService.getExample = function() {
  try{
    const query = exampleModel.findOne({}).limit(1);
    query.lean();
    let result = query.exec();
    return result;
  } catch(ex) {
    debug('failed to query: %s', exception);
    return new Promise(function (fulfill, reject) {
      reject(exception);
    });
  }
};

module.exports = exampleService;
