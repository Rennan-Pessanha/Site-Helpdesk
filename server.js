const app = require('./app');
const express = require('express');
const path = require('path');
const ejs = require('ejs')

app.listen(3005, () => {
  console.log('Conexão aberta na porta 3005');
});

app.use(express.static(path.join(__dirname,'./src/public')))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, './src/views'))
