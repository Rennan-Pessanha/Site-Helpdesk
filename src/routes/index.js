const { Router } = require('express');
const path = require('path');
const routes = new Router();
const chamadosController = require('../controllers/chamadosController')

routes.get('/', (req, res) => {
    res.render('index');
});

routes.get('/atendimentos', (req, res) =>{
    res.render('Meus-Atendimentos')
})

routes.get('/perfil', (req, res)=>{
    res.render('MeuPerfil.html')
})

routes.get('/dashboard', (req, res)=>{
    res.render('dash.html')
})

routes.get('/padroes', (req, res)=>{
    res.render('P.D.Email.html')
})

routes.get('/all', chamadosController.listarChamados)

module.exports = routes;
