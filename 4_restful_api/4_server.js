const express = require('express')
const app = express()
const musics = require('./db')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/musics', (req, res) => {
  res.json(musics)
})

app.get('/musics/:id', (req, res) => {
    res.json(musics.find(music => music.id === req.params.id))
  })

app.post('/musics', (req, res) => {
  musics.push(req.body)
  res.status(201).json(req.body)
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
  })