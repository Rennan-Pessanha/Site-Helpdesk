



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
    let dados_total = document.getElementById('dados_total').value;
    id = dados_total.split('\t')[0];
    cpf = dados_total.split('\t')[1];
    nome = dados_total.split('\t')[2];

    input_id = document.getElementById('id_id');
    input_cpf = document.getElementById('id_cpf');
    input_nome = document.getElementById('id_nome');

    input_id.value = id;
    input_cpf.value = cpf;
    input_nome.value = nome;

}

document.getElementById('btn_dados').onclick = dados;

// =============================