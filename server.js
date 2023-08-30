const express = require('express');

const myApp = express();

myApp.get('/', (req, res) => {
  res.send('My hello world with express')
});

myApp.listen(3001)

console.log('Server on port 3001');