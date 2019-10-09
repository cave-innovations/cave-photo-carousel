const express = require('express');
const cors = require('cors');
const compression = require('compression');
const db = require('../database/index.js');

const app = express();

app.use(cors());
app.use(compression());
app.use('/listing/:id', express.static('public'));
app.use(express.static('public'));

app.get('/api/photos/:id', (req, res) => {
  const num = req.params.id;
  db.getCavePhotos(num, (data) => {
    res.send(data);
  });
});


module.exports = app;
