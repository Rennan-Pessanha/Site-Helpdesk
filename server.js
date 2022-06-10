const app = require('./app');
const express = require('express');
const path = require('path');

app.listen(3005, () => {
  console.log('Conexão aberta na porta 3005');
});

app.use(express.static(path.join(__dirname,'./src/public')))