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

routes.get('/login', (req, res)=>{
    res.render('login')
})

routes.get('/cadastro', (req, res)=>{
    res.render('Cadastro')
})

routes.get('/padroes', (req, res)=>{
    res.render('padroes')
})


routes.get('/all', chamadosController.listarChamados)

routes.post('/send', chamadosController.criarChamado)

routes.get('/chamado/:id', chamadosController.chamadoId)

routes.get('/aluno/:id', chamadosController.consultaAluno)


module.exports = routes;
