const express = require('express');
const app = express();
const morgan = require('morgan');
const mainPage = require('./views/layout.js')
const { db } = require('./models');

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.send(mainPage(''))
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`)
} )
