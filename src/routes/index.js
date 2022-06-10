const { Router } = require('express');
const path = require('path');
const { send } = require('process');

const routes = new Router();

routes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

routes.get('/atendimentos', (req, res) =>{
    res.sendFile(path.join(__dirname, '../views', 'Meus-Atendimentos.html'))
})

routes.get('/perfil', (req, res)=>{
    res.sendFile(path.join(__dirname, '../views', 'MeuPerfil.html'))
})

module.exports = routes;
