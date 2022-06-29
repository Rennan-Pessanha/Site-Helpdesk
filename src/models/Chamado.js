const mongoose = require('mongoose');

const chamadosSchema = new mongoose.Schema({
    
    aluno_id: {type: String, required: true},
    aluno_cpf: {type: String, required: true},
    aluno_nome: {type: String, required: true},
    aluno_ov: {type: String, required: true},
    aluno_ov_data: {type: String, required: true},
    aluno_ov_status: {type: String, required: true},
    aluno_chamado_data: {type: String, required: true},
    aluno_chamado_hora: {type: String, required: true},
    responsavel: {type: String, required: true},
    aluno_dispositivo: {type: String},
    aluno_card_id: {type: String},
    aluno_app_versao: {type: String},
    aluno_reproducao: {type: String},
})

const chamados = mongoose.model('chamados', chamadosSchema);

module.exports = chamados;