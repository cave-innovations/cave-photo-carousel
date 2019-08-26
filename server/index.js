const express = require('express');
const db = require('../database/index.js');

const app = express();

app.use(express.static('public'));

app.get('/api/photos/:id', (req, res) => {
  const num = req.params.id;
  db.getCavePhotos(num, (data) => {
    res.send(data);
  });
});

module.exports = app;
