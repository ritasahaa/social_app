const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello rita! get')
})

app.post('/api/publish', (req, res) => {
  res.send('Hello rita! post')
})

app.put('/api/update', (req, res) => {
  res.send('Hello rita! put')
})

app.delete('/api/remove', (req, res) => {
  res.send('Hello rita! delete')
})

app.listen(port, () => {
  console.log(`web app listening on port ${port}`);
})