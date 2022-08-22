document.querySelector('.Orientações').style.display = "none"
document.querySelector('.Demanda-Option').style.display = "none"





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
    var dados_total = document.getElementById('dados_total').value;
    var ov_total = document.getElementById('ov_total').value;
    var chamado_total = document.getElementById('chamado_total').value;

    if(dados_total == '' || ov_total == '' || chamado_total == ''){
        document.getElementById('msg_erro').innerHTML = 'Preencha todos os campos antes de aplicar.'
        document.querySelector('.tabela_resultado').style.display = "none"
    }
    else{

        document.getElementById('msg_erro').innerHTML = ''
        //Separando dados em variaveis
        var id = dados_total.split('\t')[1];
        var cpf = dados_total.split('\t')[2];
        var nome = dados_total.split('\t')[3];

        var ov_produto = ov_total.split('\t')[4];
        var ov_data = ov_total.split('\t')[2];
        var ov_status = (ov_total.split('\t')[6] + " " + ov_total.split('\t')[7]);

        var chamado_data = chamado_total.split('\t')[2];
        var chamado_hora = chamado_total.split('\t')[3];
        var chamado_responsavel = chamado_total.split('\t')[9];

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
        document.querySelector('.tabela_resultado').style.display = "block"
    }
}

document.getElementById('btn_dados').onclick = dados;

// Segunda parte do formulário. 

function DadosII(){
    var dados_dispositivos = document.getElementById('Dispositivo').value;
    var id_card = document.getElementById('Id-Card').value;
    var versao_do_app = document.getElementById('versao').value;
    var reproducao = document.getElementById('foi_reproduzido').value;

    var input_dispositivo = document.getElementById('id_dispositivo');
    var input_card = document.getElementById('id_id_card');
    var input_versao_app = document.getElementById('id_versao_app');
    var input_reproduzido = document.getElementById('id_reproduzido');

    input_dispositivo.value = dados_dispositivos
    input_card.value = id_card
    input_versao_app.value = versao_do_app
    input_reproduzido.value = reproducao

    document.querySelector('.tabela_resultadoII').style.display = "block"
}

// Parte III do formulário

function ClicarI(valor) {

    if(valor == 'Demanda') { 
    document.querySelector('.Demanda-Option').style.display = "block"
    document.querySelector('.dropdown-select').style.display = "none"
     } else { 
    document.querySelector('.Demanda-Option').style.display = "none"
    document.querySelector('.dropdown-select').style.display = "block"
    }
}

function Aplicacao(){
    let aplicacao = document.getElementById('Apps')

    let opc1 = ['N/A', 'Academico', 'Medsoft-Pro', 'Recursos', 'MEDELETRO', 'AreaRestrita', 'Concursos', 'Outros']

    for(val of opc1){
        let opc1 = document.createElement('option')
        option.text = `${val}`
        option.value = `${val}`
    }

        aplicacao.appendChild(option)
}

function area() {

    let aplicacao = document.getElementById('Apps')
    let aplicacao2 = document.getElementById('Area')

    aplicacao2.innerHTML = ''

    let temp = []
    switch(apps.value) {
        case 'Academico':
            temp = ['teste', 'teste', 'teste']
        break
        case 'N/A':
            temp = ['teste', 'teste', 'teste']
        break
    }

    for(val of temp){
        let option = document.createElement('option')
        option.text = `${val}`
        option.value = `${val}`

        aplicacao2.appendChild(option)

    }
}



// Configuração botões 

let myButton = document.querySelectorAll('.tab > button');

myButton.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles();
        this.setAttribute('class', 'buttonClicked');
    });
})

function removeStyles(){
    for(let i = 0;i < myButton.length;i++){
        document.querySelectorAll('.tab > button')[i].classList.add('botaoN');
    }
}

// Botão de Enviar o Formulário

function SubmitForm() {

    var XHR = new XMLHttpRequest()

    var dados_total = document.getElementById('dados_total').value;
    var ov_total = document.getElementById('ov_total').value;
    var chamado_total = document.getElementById('chamado_total').value;

    if(dados_total != '' && ov_total != '' && chamado_total != ''){

        var id = dados_total.split('\t')[1];
        var cpf = dados_total.split('\t')[2];
        var nome = dados_total.split('\t')[3];

        var ov_produto = ov_total.split('\t')[4];
        var ov_data = ov_total.split('\t')[2];
        var ov_status = (ov_total.split('\t')[6] + " " + ov_total.split('\t')[7]);

        var chamado_data = chamado_total.split('\t')[2];
        var chamado_hora = chamado_total.split('\t')[3];
        var chamado_responsavel = chamado_total.split('\t')[9];

        var dados_dispositivos = document.getElementById('Dispositivo').value;
        var id_card = document.getElementById('Id-Card').value;
        var versao_do_app = document.getElementById('versao').value;
        var reproducao = document.getElementById('Reproduzido').value;


        var processos = document.getElementById('Processos').value;
        var orientação = document.getElementById('Orientacoes').value;
        var demanda = document.getElementById('Demanda-Option').value;
        var app = document.getElementById('Apps').value;
        // Areas Selecionadas no Dropdown //
        // Problemas Selecionados no Dropdown do medsoft-pro //

        //var processos = document.getElementById('Processos').value;
        ///var Orientação = document.getElementById('Orientacoes').value;
        //var Demanda = document.getElementById('Demanda-Option').value;
        //var App = document.getElementById('Apps').value;
        //var Area = undefined




        var SubmitForm = {
            "aluno_id":id,
            "aluno_cpf":cpf,
            "aluno_nome":nome,
            "aluno_ov":ov_produto,
            "aluno_ov_data":ov_data,
            "aluno_ov_status":ov_status,
            "aluno_chamado_data":chamado_data,
            "aluno_chamado_hora":chamado_hora,
            "responsavel":chamado_responsavel,
            "aluno_dispositivo":dados_dispositivos,
            "aluno_card_id":id_card,
            "aluno_app_versao":versao_do_app,
            "aluno_reproducao":reproducao,

            "aluno_Processos":processos,
            "aluno_Orientação":orientação,
            "aluno_Demanda":demanda,
            "aluno_app":app,
            "area_Med":areaMed,
            "area_Rec":areaRec,
            "area_Eletro":areaEletro,
            "area_Res":areaRes,
            "ares_Concurso":areaConcurso,



            //"aluno_Processos":processos,
            //"aluno_Orientação":Orientação,
            //"aluno_Demanda":Demanda,
            //"aluno_app":App

            
        }
        
        
        SubmitForm = JSON.stringify(SubmitForm)
        
        
            XHR.open('POST', '/send', true);
            XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
            XHR.send(SubmitForm);

            //window.location.reload()

    }else{
        abrirtab('form1');
        document.getElementById('msg_erro').innerHTML = 'Preencha todos os campos antes de aplicar'
    }
}





