const res = require('express/lib/response');
const {getAllServices, createServ} = require('../services/index.services')

const getAll = async (req, res) => {
    const all = await getAllServices();
    return res.status(200).json(all)
}

const createControl = async (req, res)=>{
    const {aluno_id, aluno_cpf, aluno_nome, aluno_ov, aluno_ov_data, aluno_ov_status, aluno_chamado_data, aluno_chamado_hora, responsavel, aluno_dispositivo, aluno_card_id, aluno_app_versao, aluno_reproducao} = req.body;
    const chamado = await createServ(aluno_id, aluno_cpf, aluno_nome, aluno_ov, aluno_ov_data, aluno_ov_status, aluno_chamado_data, aluno_chamado_hora, responsavel, aluno_dispositivo, aluno_card_id, aluno_app_versao, aluno_reproducao)
    return res.status(200).json(chamado);
}


module.exports = {getAll, createControl}