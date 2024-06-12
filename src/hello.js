const express = require('express')
const app = express()
const { greet } = require('../service/greetings')

app.get('/hello/:name', (req, res) => {
  res.send(greet(req.params.name))
})

module.exports = app
