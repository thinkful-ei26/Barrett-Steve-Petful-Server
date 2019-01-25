'use strict';

const express = require('express');
const Router = express.Router();

const {  DogQueue, peek } = require('../queue');


Router.get('/', function(req, res) {
  let dog = peek(DogQueue);
  res.send(dog);
});

Router.delete('/', (req, res, next) => {
  DogQueue.dequeue();
  res.sendStatus(204);
});

module.exports = Router;
