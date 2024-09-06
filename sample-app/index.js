const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions Workshop!');
});

app.listen(port, () => {
  console.log(`Sample app listening at http://localhost:${port}`);
});
