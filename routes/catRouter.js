'use strict';

const express = require('express');
const Router = express.Router();

const {  CatQueue, peek } = require('../queue');

Router.get('/', function(req, res, next) {
  let cat = peek(CatQueue);
  res.send(cat);
});

Router.delete('/', (req, res, next) => {
  CatQueue.dequeue();
  res.sendStatus(204);
});

module.exports = Router;
