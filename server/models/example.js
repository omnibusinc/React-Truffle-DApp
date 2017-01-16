'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
  example: String
});

const Example = mongoose.model('example', exampleSchema);
module.exports = Example;
