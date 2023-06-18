const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/pages/index.html'));
});
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/pages/test.html'));
});

app.listen(3000)