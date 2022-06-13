const { Router } = require('express');
const path = require('path');
const getAll = require('../controllers/index.controller')
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

routes.get('/dashboard', (req, res)=>{
    res.sendFile(path.join(__dirname, '../views', 'dash.html'))
})

routes.get('/padroes', (req, res)=>{
    res.sendFile(path.join(__dirname, '../views', 'P.D.Email.html'))
})

routes.get('/all', getAll)

module.exports = routes;
