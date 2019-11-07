const express = require('express')
const app = express()
const musics = require('./db')

app.get('/musics', (req, res) => {
  res.json(musics)
})

app.get('/musics/:id', (req, res) => {
    res.json(musics.find(music => music.id === req.params.id))
  })

app.listen(3000, () => {
    console.log('Start server at port 3000.')
  })