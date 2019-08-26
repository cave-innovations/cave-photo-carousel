const express = require('express');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/photos/:id', (req, res) => {
  const num = req.params.id;
  db.getCavePhotos(num, (data) => {
    res.send(data);
  });
});

app.listen(port, () => { console.log(`Listening on port ${port}`); });
