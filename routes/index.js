const routes = require('express').Router()
const Models = require('../models')

// Testing
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!'})
})

module.exports = routes;