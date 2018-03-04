const routes = require('express').Router()
const Models = require('../models')

routes.get('/', (req, res) => {
  if(Object.keys(req.query).length === 0) {
    res.render('register.ejs', {succeed: false, err: null})
  } else {
    console.log(req.query)
    if(!req.query.succes) {
      res.render('register.ejs', {err: req.query.err, succeed: false})
    } else {
      res.render('register.ejs', {succeed: true, err: null})
    }
  }
})

routes.post('/', (req, res) => {
  let newUser = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Age: req.body.Age,
    Username: req.body.Username,
    Password: req.body.Password
  }

  Models.User.create(newUser)
    .then(() => {
      res.redirect('/register?succes=success')
    }).catch(err => {
      res.redirect(`/register?err=${err.message}`)
    })
})

module.exports = routes;