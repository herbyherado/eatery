const express = require('express')
const app = express()
const PORT = 3000

// Testing
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!'})
})

// Server
app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`)
})