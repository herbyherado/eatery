const express = require('express')
const app = express()
const PORT = 3000
const dashboard = require('./routes/dashboard')
const bodyParser = require('body-parser')
const model = require('./models')
const session = require('express-session')
const register = require('./routes/register')
const edit = require('./routes/edit')
const list = require('./routes/list')

app.use(express.static('public'))
app.locals.helper = require('./helpers/index.js')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

app.use('/edit', edit)
app.use('/list', list)
app.use('/register', register)
app.use('/dashboard', dashboard)

app.get('/', (req, res) => {
  console.log(req.query)
  if (!req.query){
    res.render('home.ejs', {err: null})
  } else {
    res.render('home.ejs', {err: req.query})
  }
})

app.post('/', (req, res) => {
  console.log(req.body)
  model.User.findOne({
    where: {Username: req.body.Username}
  })
  .then(user => {
    if (!user){
      res.redirect(`/?err=Username+not+found`)
    } else {
      model.User.findOne({
        where: {
          Username: req.body.Username,
          Password: req.body.Password
        }
      })
      .then(password => {
        if (!password){
          res.redirect('/?err=Incorrect+password')
        } else {
          req.session.isLogin = true
          req.session.profile = user
          res.redirect(`/dashboard`)
        }
      })
    }
  })
})

// Server
app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`)
})