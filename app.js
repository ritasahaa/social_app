const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello rita! get')
})

app.post('/', (req, res) => {
  res.send('Hello rita! post')
})

app.put('/', (req, res) => {
  res.send('Hello rita! put')
})

app.delete('/', (req, res) => {
  res.send('Hello rita! delete')
})

app.listen(port, () => {
  console.log(`web app listening on port ${port}`);
})