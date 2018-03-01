const express = require('express')
const app = express()
const PORT = 3000

const bodyParser = require('body-parser')

const Models = require('./models')
const index = require('./routes/index')
const edit = require('./routes/edit')
const list = require('./routes/list')
const register = require('./routes/register')

app.locals.helper = require('./helpers/index.js')
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', index)
app.use('/edit', edit)
app.use('/list', list)
app.use('/register', register)

// Testing
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Connected!'})
// })

// Server
app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`)
})