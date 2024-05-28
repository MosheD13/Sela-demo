const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('AM ISRAEL HAI!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;
