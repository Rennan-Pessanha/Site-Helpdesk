const {getAllModels, create} = require('../models/index.model');

async function getAllServices(){

    const all = await getAllModels();
    return all;
}

const createServ = async (aluno_id, aluno_cpf, aluno_nome, aluno_ov, aluno_ov_data, aluno_ov_status, aluno_chamado_data, aluno_chamado_hora, responsavel, aluno_dispositivo, aluno_card_id, aluno_app_versao, aluno_reproducao)=>{
    const chamado = await create(aluno_id, aluno_cpf, aluno_nome, aluno_ov, aluno_ov_data, aluno_ov_status, aluno_chamado_data, aluno_chamado_hora, responsavel, aluno_dispositivo, aluno_card_id, aluno_app_versao, aluno_reproducao)
    return chamado;
}


module.exports = {getAllServices, createServ}