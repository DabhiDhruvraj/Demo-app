const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('<h1 style="color: #3498db;">Hello, everyone!<br/>My Name is Dhruvrajsinh</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
