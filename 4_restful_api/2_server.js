const express = require('express')
const app = express()
const musics = require('./db')

app.get('/musics', (req, res) => {
  res.json(musics)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
  })