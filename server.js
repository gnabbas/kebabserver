const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

function isDoenerstag() {
  return new Date().getDay() == 4;
}

app.get('/', (req, res) => {
  if (isDoenerstag()) {
    res.sendFile(path.join(__dirname + '/true.html'));
  }
  else {
    res.sendFile(path.join(__dirname + '/false.html'));
  }
});

app.get('/api', (req, res) => {
  if (isDoenerstag()) {
    res.json('true');
  }
  else {
    res.json('false');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});