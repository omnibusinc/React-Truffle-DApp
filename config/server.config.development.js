'use strict';

const nconf = require('nconf');

const config = {
  //put network configs for truffle here (for use in /truffle.js)?
};

nconf.defaults(config);

module.exports = nconf;
