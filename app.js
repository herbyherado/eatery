const express = require('express')
const app = express()
const PORT = 3000
const dashboard = require('./routes/dashboard')

// Testing
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!'})
})

app.use(express.static('public'))
app.use('/dashboard', dashboard)

// Server
app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`)
})