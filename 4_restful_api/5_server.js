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

app.put('/musics/:id', (req, res) => {
  const updateIndex = musics.findIndex(music => music.id === req.params.id)
  res.json(Object.assign(musics[updateIndex], req.body))
})


app.listen(3000, () => {
    console.log('Start server at port 3000.')
  })