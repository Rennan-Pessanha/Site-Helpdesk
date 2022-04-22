



// Parte da responsividade, menu-Hamburguer 

function burguer() {
let menuMobile = document.querySelector('.mobile-menu')
if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove("open")
} else { 
    menuMobile.classList.add('open')
}

}

// Configuração de abas na div para o formulário.

document.getElementById('tabpadrao').click()

function abrirtab(idtab) {

var conteudos = document.getElementsByClassName('form-content')

for (var i = 0; i < conteudos.length; i++) {
    conteudos[i].style.display = 'none'
}

document.getElementById(idtab).style.display = 'block'
}

// Prenchimento automatico na tabela 'dados do aluno'

function dados(){  
    //Coletando dados do input bruto
    let dados_total = document.getElementById('dados_total').value;
    let ov_total = document.getElementById('ov_total').value;
    let chamado_total = document.getElementById('chamado_total').value;

    //Separando dados em variaveis
    let id = dados_total.split('\t')[0];
    let cpf = dados_total.split('\t')[1];
    let nome = dados_total.split('\t')[2];

    let ov_produto = ov_total.split('\t')[4];
    let ov_data = ov_total.split('\t')[2];
    let ov_status = (ov_total.split('\t')[6] + " " + ov_total.split('\t')[7]);

    let chamado_data = chamado_total.split('\t')[2];
    let chamado_hora = chamado_total.split('\t')[3];
    let chamado_responsavel = chamado_total.split('\t')[9];

    //Adicionando campos dos inputs variaveis
    input_id = document.getElementById('id_id');
    input_cpf = document.getElementById('id_cpf');
    input_nome = document.getElementById('id_nome');

    input_ov_produto = document.getElementById('id_produto');
    input_ov_data = document.getElementById('id_ov_data');
    input_ov_status = document.getElementById('id_ov_status');

    input_chamado_data = document.getElementById('id_chamado_data');
    input_chamado_hora = document.getElementById('id_chamado_hora');
    input_chamado_responsavel = document.getElementById('id_chamado_responsavel');


    //Preenchendo campos de resposta
    input_id.value = id;
    input_cpf.value = cpf;
    input_nome.value = nome;

    input_ov_produto.value = ov_produto;
    input_ov_data.value = ov_data;
    input_ov_status.value = ov_status;

    input_chamado_data.value = chamado_data;
    input_chamado_hora.value = chamado_hora;
    input_chamado_responsavel.value = chamado_responsavel
    
    //Exibindo tabela com respostas
    document.querySelector('#tabela_resultado').style.display = "block"

}

document.getElementById('btn_dados').onclick = dados;

// =============================