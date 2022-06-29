const app = require('./app');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const db = require('./src/configs/mongoConnection')

app.listen(3005, () => {
  console.log('Conexão aberta na porta 3005');
});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname,'./src/public')))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.json())
app.set('views', path.join(__dirname, './src/views'))

db.on("error", console.log.bind(console, "erro de conexão"))
db.once('open', ()=>{
    console.log('Conectado ao banco de dados')
})
