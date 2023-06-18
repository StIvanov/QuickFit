const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.static('public'));

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/Pages/index.html'));
});
app.get('/test', function(req, res) {
  res.sendFile(path.join(__dirname, '/pages/test.html'));
});

app.listen(PORT, () => console.log(`Listen on port ${PORT}`));