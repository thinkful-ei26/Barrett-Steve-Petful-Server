const express = require('express')
const Router = express.Router()

let cats = [
  {
    imageURL:
      'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription:
      'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
]

Router.get('/', function(req, res) {
  res.send(cats[0])
})

Router.delete('/', (req, res, next) => {
  cats.shift()
  res.sendStatus(204)
})

module.exports = Router
