const chamados = require('../models/Chamado')

class chamadosController{

    static listarChamados = (req, res)=>{
        chamados.find((err, chamados)=>{
        res.status(200).json(chamados)
        })
    }

    static criarChamado = (req, res)=>{
        let chamado = new chamados(req.body);

        chamado.save((err)=>{
            if(err){
                res.status(500).send({message: err.message + " falha ao criar"})
            } else{
                res.status(201).send((chamado.toJSON()))
            }
        })
    }
    static chamadoId = (req, res)=>{
        let id = req.params.id;
        chamados.findById(id, (err, aluno)=>{
            if(err){
                res.status(404).send({message: err.message + "id não existe"})
            }else{
                res.status(200).send((aluno.toJSON()))
            }
        })
    }
}

module.exports = chamadosController;