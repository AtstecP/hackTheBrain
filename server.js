const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/another', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'another.html'));
});


app.get('/polygons', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'polygons.html'));
});


app.listen(3000, () => console.log('http://localhost:3000'));
