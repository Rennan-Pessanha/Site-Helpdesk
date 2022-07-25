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
    res.render('MeuPerfil')
})

routes.get('/dashboard', (req, res)=>{
    res.render('dash')
})

routes.get('/padroes', (req, res)=>{
    res.render('P.D.Email')
})

routes.get('/all', chamadosController.listarChamados)

routes.post('/send', chamadosController.criarChamado)

routes.get('/chamado/:id', chamadosController.chamadoId)


module.exports = routes;
