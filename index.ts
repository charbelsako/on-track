import Client from './models/Client.js'
import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => console.log('App listening on port 3000'))
