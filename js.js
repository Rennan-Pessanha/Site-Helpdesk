



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
    document.querySelector('.tabela_resultado').style.display = "block"

}

document.getElementById('btn_dados').onclick = dados;

// Segunda parte do formulário. 

function DadosII(){
    let dados_dispositivos = document.getElementById('Dispositivo').value;
    let id_card = document.getElementById('Id-Card').value;
    let versao_do_app = document.getElementById('versao').value;
    let reproducao = document.getElementById('foi_reproduzido').value;

    let input_dispositivo = document.getElementById('id_dispositivo');
    let input_card = document.getElementById('id_id_card');
    let input_versao_app = document.getElementById('id_versao_app');
    let input_reproduzido = document.getElementById('id_reproduzido');

    input_dispositivo.value = dados_dispositivos
    input_card.value = id_card
    input_versao_app.value = versao_do_app
    input_reproduzido.value = reproducao
}

// Foto 

var img = document.getElementById("Foto-Espelho")
var none = undefined

// Parte III do formulário

function Clicar(valor) {
    
    if(valor == "Medsoft-Pro") {

        img.src = "img/Fotos-Medsoft/Medsoft-Pro.png"

        document.querySelector('.drop2').style.display = "inline-block"
    } 
    else {
        document.querySelector('.drop2').style.display = "none"
    }
    if(valor == "Recursos") { 

        img.src = "img/Fotos-Medsoft/P-Recursos.png"
        document.querySelector('.drop3').style.display = "inline-block"
    }
    else {
        document.querySelector('.drop3').style.display = "none"
    }
    if(valor == 'MEDELETRO') { 
        img.src = "img/Fotos-Medsoft/Medeletro.jpg"
        document.querySelector('.drop4').style.display = "inline-block"
    }
    else {
        document.querySelector('.drop4').style.display = "none"
    }
    if(valor == 'AreaRestrita') { 
        img.src = "img/Fotos-Medsoft/Area-Restrita.png"
        document.querySelector('.drop5').style.display = "inline-block"
    }
    else {
        document.querySelector('.drop5').style.display = "none"
    }
    if(valor == 'Concursos') { 
        img.src = "img/Fotos-Medsoft/Concursos.jpg"
        document.querySelector('.drop6').style.display = "inline-block"
    } else {
        document.querySelector('.drop6').style.display = "none"
    }
    if(valor == 'Academico') {
        img.src = "img/Fotos-Medsoft/Outros.jpg"
    } else if(valor == 'Outros') { 
        img.src = 'img/Fotos-Medsoft/duvida.jpg'
    } else { 
        return none
    }
}

// Revelar Problema Drop2


    function RevelarProblemaDrop2(valor) { 

        if(valor == 'Login') {

            img.src = "img/Fotos-Medsoft/Medsoft-Pro.png"
            document.querySelector('.Problema-Login').style.display = "inline-block"
        } else {
            document.querySelector('.Problema-Login').style.display = "none"
        }

        if(valor == 'Aula') { 
            img.src = "img/Fotos-Medsoft/Aba-Aulas.png"
            document.querySelector('.Problema-Aulas').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Aulas').style.display = "none"
        }
        if(valor == 'Material') {
            img.src = "img/Fotos-Medsoft/Aba-Materiais.png"
            document.querySelector('.Problema-Materiais').style.display = "inline-block"
        } else {
            document.querySelector('.Problema-Materiais').style.display = "none"
        }
        if(valor == 'Questões') {
            img.src = "img/Fotos-Medsoft/Aba-Questão.png"
            document.querySelector('.Problema-Questoes').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Questoes').style.display = "none"
        }
        if(valor == 'Medsmarth') {
            img.src = "img/Fotos-Medsoft/medsmarth.png"
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
            img.src = "img/Fotos-Medsoft/Mentoria.png"
            document.querySelector('.Problema-Mentoria').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Mentoria').style.display = "none"
        }
        if(valor == 'Cronograma') { 
            img.src = "img/Fotos-Medsoft/cronograma.png"
            document.querySelector('.Problema-Cronograma').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Cronograma').style.display = "none"
        }
        if(valor == 'Simulados') { 
            img.src = "img/Fotos-Medsoft/Simulados.png"
            document.querySelector('.Problema-Simulados').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Simulados').style.display = "none"
        }
        if(valor == 'Concurso na Integra') { 
            img.src = "img/Fotos-Medsoft/Mentoria.png"
            document.querySelector('.Problema-Concurso-Integra').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Concurso-Integra').style.display = "none"
        }
        if(valor == 'Monta Provas') { 
            img.src = "img/Fotos-Medsoft/Monta-Provas.png"
            document.querySelector('.Problema-Monta-Provas').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Monta-Provas').style.display = "none"
        }
        if(valor == 'Slide de Aula') {
            img.src = "img/Fotos-Medsoft/Slide-De-Aula.png"
            document.querySelector('.Problema-Slide-de-Aulas').style.display = "inline-block"
        } else {
            document.querySelector('.Problema-Slide-de-Aulas').style.display = "none"
        }
        if(valor == 'MedPlanner') {
            img.src = "img/Fotos-Medsoft/Med-Planner.png"
            document.querySelector('.Problema-Medplanner').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Medplanner').style.display = "none"
        }
        if(valor == 'Material Virtual') { 
            img.src = "img/Fotos-Medsoft/Material-Virtual.png"
            document.querySelector('.Problema-Material-Virtual').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-Material-Virtual').style.display = "none"
        }
        if(valor == 'Atualizações e Erratas') {
            img.src = "img/Fotos-Medsoft/Arualização-E-Erratas.png"
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
            img.src = "img/Fotos-Medsoft/No-Papo.png"
            document.querySelector('.Problema-NoPapo').style.display = "inline-block"
        } else { 
            document.querySelector('.Problema-NoPapo').style.display = "none"
        }
        if(valor == 'Administrativo') { 
            img.src = "img/Fotos-Medsoft/admin.png"
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





  
