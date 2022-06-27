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

function Clicar(valor) {
    
    if(valor == "Medsoft-Pro") {
        document.querySelector('.drop2').style.display = "inline-block"
    } 
    else {
        document.querySelector('.drop2').style.display = "none"
    }
    if(valor == "Recursos") { 
        document.querySelector('.drop3').style.display = "inline-block"
    }
    else {
        document.querySelector('.drop3').style.display = "none"
    }
    if(valor == 'MEDELETRO') { 
        document.querySelector('.drop4').style.display = "inline-block"
    }
    else {
        document.querySelector('.drop4').style.display = "none"
    }
    if(valor == 'AreaRestrita') { 
        document.querySelector('.drop5').style.display = "inline-block"
    }
    else {
        document.querySelector('.drop5').style.display = "none"
    }
    if(valor == 'Concursos') { 
        document.querySelector('.drop6').style.display = "inline-block"
    } else {
        document.querySelector('.drop6').style.display = "none"
    }
    if(valor == 'Orientação') { 
        document.querySelector('.Orientações').style.display = "inline-block"
        
    } else { 
        document.querySelector('.Orientações').style.display = "none"
    }
    
    if(valor == 'Demanda') { 
    document.querySelector('.Demanda-Option').style.display = "inline-block"
    
     } else { 
    document.querySelector('.Demanda-Option').style.display = "none"
    }
}

// Revelar Problema Drop2


    function RevelarProblemaDrop2(valor) { 

        var Area = document.getElementById('.Area-Med').value

        if(valor == 'Login') {
            document.querySelector('.Problema-Login').style.display = "inline-block"
        } else {
            document.querySelector('.Problema-Login').style.display = "none"
        }

        if(valor == 'Aula') { 
            document.querySelector('.Problema-Aulas').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Aulas').style.display = "none"
        }
        if(valor == 'Material') {
            document.querySelector('.Problema-Materiais').style.display = "inline-block"
        } else {
            document.querySelector('.Problema-Materiais').style.display = "none"
        }
        if(valor == 'Questões') {
            document.querySelector('.Problema-Questoes').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Questoes').style.display = "none"
        }
        if(valor == 'Medsmart') {
            document.querySelector('.Problema-Medsmart').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Medsmart').style.display = "none"
        }
        if(valor == 'Revalida') { 
            document.querySelector('.Problema-Revalida').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Revalida').style.display = "none"
        }
        if(valor == 'Mentoria') { 
            document.querySelector('.Problema-Mentoria').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Mentoria').style.display = "none"
        }
        if(valor == 'Cronograma') { 
            document.querySelector('.Problema-Cronograma').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Cronograma').style.display = "none"
        }
        if(valor == 'Simulados') { 
            document.querySelector('.Problema-Simulados').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Simulados').style.display = "none"
        }
        if(valor == 'Concurso na Integra') { 
            document.querySelector('.Problema-Concurso-Integra').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Concurso-Integra').style.display = "none"
        }
        if(valor == 'Monta Provas') { 
            document.querySelector('.Problema-Monta-Provas').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Monta-Provas').style.display = "none"
        }
        if(valor == 'Slide de Aula') {
            document.querySelector('.Problema-Slide-de-Aulas').style.display = "inline-block"
        } else {
            document.querySelector('.Problema-Slide-de-Aulas').style.display = "none"
        }
        if(valor == 'MedPlanner') {
            document.querySelector('.Problema-Medplanner').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Medplanner').style.display = "none"
        }
        if(valor == 'Material Virtual') { 
            document.querySelector('.Problema-Material-Virtual').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Material-Virtual').style.display = "none"
        }
        if(valor == 'Atualizações e Erratas') {
            document.querySelector('.Problema-Atualizacao-Erratas').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Atualizacao-Erratas').style.display = "none"
        }
        if(valor == 'Medcode') {
            document.querySelector('.Problema-Medcode').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Medcode').style.display = "none"
        }
        if(valor == 'Instalacao') {
            document.querySelector('.Problema-Medcode').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Medcode').style.display = "none"
        }
        if(valor == 'No Papo') {
            document.querySelector('.Problema-NoPapo').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-NoPapo').style.display = "none"
        }
        if(valor == 'Administrativo') { 
            document.querySelector('.Problema-Administrativo').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Administrativo').style.display = "none"
        }
        if(valor == 'Outros') { 
            document.querySelector('.Problemas-Outros').style.display = "inline-block"
        } else { 
            
        }

       
}   

    function RevelarProblemaDrop3(valor) {

        var Area = document.getElementById('.Area-Rec').value

        if(valor == 'Login') { 
            document.querySelector('.Problema-Login-D3').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Login-D3').style.display = "none"
        } 
        if(valor == 'Perfil') {
            document.querySelector('.Problema-Perfil-D3').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Perfil-D3').style.display = "none"
        }
        if(valor == 'Forum-Pré') { 
            document.querySelector('.Problema-ForumPre-D3').style.display = "inline-block"
        } else {
            document.querySelector('.Problema-ForumPre-D3').style.display = "none"
        }
        if(valor == 'Forum-Pró') {
            document.querySelector('.Problema-ForumPos-D3').style.display = "inline-block"
        } else {
            document.querySelector('.Problema-ForumPos-D3').style.display = "none"
        }
        if(valor == 'Ranking') {
            document.querySelector('.Problema-ForumPos-D3').style.display = "inline-block"
        }
        if(valor == 'Outros') { 
            document.querySelector('.Problema-Outros').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Outros').style.display = "none"
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
        var Orientação = document.getElementById('Orientacoes').value;
        var Demanda = document.getElementById('Demanda-Option').value;
        var App = document.getElementById('Apps').value;
        var Area = undefined



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
            "aluno_Orientação":Orientação,
            "aluno_Demanda":Demanda,
            "aluno_app":App,
            
        }

            SubmitForm = JSON.stringify(SubmitForm)

            XHR.open('POST', '/send', true);
            XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
            XHR.send(SubmitForm);

            window.location.reload()

    }else{
        abrirtab('form1');
        document.getElementById('msg_erro').innerHTML = 'Preencha todos os campos antes de aplicar'
    }
}





