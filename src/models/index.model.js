const connection = require('./mongoConnection');

async function getAllModels(){
    const db = await connection();
    return db.collection('chamados').find({}).toArray()
}

const create = async (aluno_id, aluno_cpf, aluno_nome, aluno_ov, aluno_ov_data, aluno_ov_status, aluno_chamado_data, aluno_chamado_hora, responsavel, aluno_dispositivo, aluno_card_id, aluno_app_versao, aluno_reproducao)=>{
    const db = await connection();
    db.collection('chamados').insertOne({ aluno_id, aluno_cpf, aluno_nome, aluno_ov, aluno_ov_data, aluno_ov_status, aluno_chamado_data, aluno_chamado_hora, responsavel, aluno_dispositivo, aluno_card_id, aluno_app_versao, aluno_reproducao});
    return {aluno_id, aluno_nome, responsavel}
}

module.exports = {getAllModels, create};