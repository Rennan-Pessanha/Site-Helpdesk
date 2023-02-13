

window.addEventListener ('load',abrirtab('form1'))
document.querySelectorAll('.path')[0].style.fill = '#AED8DE'
window.addEventListener ('load',function(){
    let myButton = document.querySelectorAll('.tab > button');

myButton.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles();
        svgColor(this)
        this.setAttribute('class', 'buttonClicked');

        console.log('clicou')
    });
})

myButton[0].setAttribute('class', 'buttonClicked');

function svgColor(ele){
    switch(ele){
        case myButton[0]:
            document.querySelectorAll('.path')[0].style.fill = '#AED8DE'
            break;
        case myButton[1]:
            document.querySelectorAll('.path')[1].style.fill = '#AED8DE'
            break; 
        case myButton[2]:
            document.querySelectorAll('.path')[2].style.fill = '#AED8DE'
            break; 
    }
}

function removeStyles(){
    for(let i = 0;i < myButton.length;i++){
        document.querySelectorAll('.tab > button')[i].classList.add('botaoN');
        console.log('limpou')
    }
    let svgs = document.querySelectorAll('.path');
    for(i=0;i<svgs.length;i++){
        svgs[i].style.fill = '#F1DBDA'
    }
}
})

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
    var dados_total = document.getElementById('dados_id').value;
    var dados_total = document.getElementById('dados_cpf').value;
    var dados_total = document.getElementById('dados_nome').value;
    var ov_total = document.getElementById('ov_data').value;
    var ov_total = document.getElementById('ov_produto').value;
    var ov_total = document.getElementById('ov_status').value;
    var chamado_total = document.getElementById('chamado_data').value;
    var chamado_total = document.getElementById('chamado_hora').value;
    var chamado_total = document.getElementById('chamado_responsavel').value;

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

function Aplicacao(){
    let aplicacao = document.getElementById('Apps')

    let opc1 = ['N/A', 'Academico', 'Medsoft-Pro', 'Recursos', 'MEDELETRO', 'AreaRestrita', 'Concursos', 'Outros']

    for(val of opc1){
        let option = document.createElement('option')
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
    switch(aplicacao.value) { 
        case 'Medsoft-Pro':
            temp = ['Login', 'Aula', 'Materiais', 'Questões', 'Medsmart', 'Revalida', 'Cronograma', 'Simulados', 'Concurso Na Integra', 'Monta Prova', 'Slide De Aula', 'MedPlaner', 'Material Virtual', 'Atualização E Erratas', 'Medcode', 'Instalacao', 'No-Papo', 'Administrativo', 'Outros']
            break;
        case 'Recursos':
            temp = ['Login', 'Perfil', 'Forum Pré', 'Forum Pró', 'Ranking', 'Outros']
        break
        case 'MEDELETRO':
            temp = ['login']
        break
        case 'AreaRestrita':
            temp = ['Login', 'Financeiro', 'Dados Cadastrais', 'Contrato','Imagem Da Semana', 'Med Clipping','Headline', 'Autorização Do Portador']
        break
        case 'Concursos': 
            temp = ['Login', 'Editorial Não Encontrado', 'Pagina Não Carrega']
        break
        default:
            temp = ['--']
        break
    }

    for(val of temp){
        let option = document.createElement('option')
        option.text = `${val}`
        option.value = `${val}`

        aplicacao2.appendChild(option)

    }
}

function ProblemaD(){

    let aplicacao2 = document.getElementById('Area')
    let aplicacao3 = document.getElementById('ProblemaD')

    aplicacao3.innerHTML = ''

    let temp = []
    switch(aplicacao2.value){
        case 'Aula':
            temp = ['Vídeos Não Carregam', 'Aula Presencial', 'Video Travando', 'Videos Indisponiveis', 'Videos Trocados', 'Resolução de vídeo', 'Função Avançar/Retroceder', 'Qualidade Dos Videos', 'Qualidade Dos Audios', 'Vídeos Sem Audio', 'Aba Indisponivel', 'Conflito Em Porcentagem', 'Tela Cheia', 'Dificuldade Em Download', 'Aulas Repetidas', 'Bloco De Material Anterior', 'Dúvida']
        break
        case 'Login':
            temp = ['Acesso Bloqueado', 'Travando na tela configuração de ambiente', 'Email Não Cadastrado', 'Login nao carrega', 'Serviço indisponivel', 'Erro de Senha', 'Reset De Senha', 'Usuario Sem OV Permitida', 'Logout', 'Instabilidade Momentânea', 'Assinatura de contrato', 'Regras De Acesso', 'Dùvida', 'Email Duplicado', 'Outros', 'Liberação de secundário', 'Troca de principal']
        break
        case 'Questões':
            temp = ['Resetar Questões', 'Respostas Não Ficam Salvas', 'Questões Duplicadas', 'Questões Indisponíveis', 'Filtro De Questões', 'Imprimir Questões', 'Conflito Em Porcentagem', 'Aba Indisponivel', 'Problema Em Imagem', 'Dificultade em Favoritar', 'Dificuldade Em Download', 'Gabarito Comentado', 'Dificuldade Em Depositar Duvidas', 'Questões Desordenadas', 'Dúvida']
        break
        case 'Materiais':
            temp = ['Apostila Indisponivel', 'Apostila Não Carrega', 'Imagens Não Carrega', 'Imagens Trocadas', 'Erro De Requisição', 'Marcação de Texto', 'Anotações', 'Índice de Apostila', 'Vídeo De Apostila Indisponível', 'Conflito Em Porcentagem', 'Tela Cheia Em Vídeos', 'Dificuldade Em Donwload', 'Dúvida']
        break
        case 'Medsmart':
            temp = ['medsmart Indisponivel', 'Medsmart Não Carrega', 'Questões Já Realizadas', 'Questões Já Repetidas', 'Métricas', 'Revisões Não Carregam', 'SmartCard Indisponivel', 'Temas Não Vistos', 'Questões Não Contabilizam', 'Dúvida', 'Sugestão']
        break
        case 'Revalida':
            temp = ['Conteudo Indisponivel', 'Dúvida']
        break
        case 'Cronograma':
            temp = ['Conteudos Não Liberados', 'Cronograma Indisponivel', 'Cronograma Divergente', 'Imprimir Cronograma', 'Dúvida']
        break
        case 'Simulados':
            temp = ['Reset De Simulado', 'Simulado Não Carrega', 'Simulado Indisponivel', 'Simulado Não Finaliza', 'Filtro de Ranking', 'Ranking Em Processamento', 'Ranking Indisponivel', 'Dificuldade Em Imprimir', 'Nota Divergente', 'Multimidia Indisponivel', 'Prazo Encerrado', 'Métrica De Desempenho']
        break
        case 'Concurso Na Integra':
            temp = ['Imprimir Provas', 'Prova Não Encontrada', 'Ranking De Acertos', 'Prova Não Carrega', 'Função Indisponivel', 'Dúvida',]
        break
        case 'Monta Prova':
            temp = ['Pesquisa Por Temas', 'Especialidade', 'Concurso', 'Conflito Em Filtro De Ano', 'Filtros Especiais', 'Dúvidas']
        break
        case 'Slide De Aula':
            temp = ['Slide Indisponivel', 'Mapa Mental Indisponivel', 'Slide Não Carrega', 'Vídeo Mapa Mental Não Carrega', 'Dúvida']
        break
        case 'MedPlaner':
            temp = ['Função Indisponivel', 'Função Não Carrega', 'Informação', 'Dùvida']
        break
        case 'Material Virtual':
            temp = ['Função Indisponivel', 'Função Não Carrega', 'Informação', 'Dúvida']
        break
        case 'Atualização E Erratas':
            temp = ['Dificuldade de Imprenssão', 'Conteudos Indisponiveis', 'Dificuldade em baixar', 'Dúvida']
        break
        case 'Medcode':
            temp = ['Leitura QR CODE', 'Tela Preta', 'Dúvida']
        break
        case 'Instalacao':
            temp = ['Dificuldade em instalar no Mac', 'Dificuldade em instalar no Windows', 'Dificuldade em instalar no Smartphone', 'Dificuldade em instalar no tablet', 'Requisitos Minimos']
        break
        case 'Administrativo':
            temp = ['Boleto não Carreta', 'Notas Fiscais']
        break
        case 'Outros':
            temp = ['--']
        break
        case 'Perfil':
            temp = ['Excluir Foto']
        break
        case 'Forum Pré':
            temp = ['Exclusão De Comentário'], ['Análise De Recurso']
        break
        case 'Forum Pró':
            temp = ['Exclusão De Comentário']
        break
        case 'Ranking':
            temp = ['Exclusão De Nota']
        break
        default:
            temp = ['--']
        break
    }


    for(val of temp){
        let option = document.createElement('option')
        option.text = `${val}`
        option.value = `${val}`

        aplicacao3.appendChild(option)
    }

    

}



// Configuração botões 



// Botão de Enviar o Formulário



function SubmitForm() {

    var XHR = new XMLHttpRequest()

    var dados_id = document.getElementById('dados_id').value;
    var dados_cpf = document.getElementById('dados_cpf').value;
    var dados_nome = document.getElementById('dados_nome').value;

    var ov_data = document.getElementById('ov_data').value;
    var ov_produto = document.getElementById('ov_produto').value;
    var ov_status = document.getElementById('ov_status').value;


    var chamado_data = document.getElementById('chamado_data').value;
    var chamado_hora = document.getElementById('chamado_hora').value;
    var chamado_responsavel = document.getElementById('chamado_responsavel').value;
    
    
    var Descricao = document.getElementById('descricao-problema').value


    var processos = document.getElementById('Processos').value;
    var demanda = document.getElementById('Demanda-Option').value;
    var app = document.getElementById('Apps').value;
    var Area = document.getElementById('Area').value
    var Problema = document.getElementById('ProblemaD').value
   
    let list = [dados_id,dados_cpf,dados_nome,ov_data,ov_produto,ov_status,chamado_data,chamado_hora,chamado_responsavel,Descricao,processos,demanda,app,Area,Problema];
    console.log(list);



    
    if ('funciona vai'){

        var id = dados_id 
        var cpf = dados_cpf
        var nome = dados_nome;
        
        

        var ov_produto = ov_produto
        var ov_data = ov_data
        var ov_status = ov_status

        var chamado_data = chamado_data
        var chamado_hora = chamado_hora
        var chamado_responsavel = chamado_responsavel

        var dados_dispositivos = document.getElementById('Dispositivo').value;
        var id_card = document.getElementById('Id-Card').value;
        var versao_do_app = document.getElementById('versao').value;
        var reproducao = document.getElementById('Reproduzido').value;
        var atendimentos = document.getElementById('Atendimentos').value
       



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
            "aluno_Desc":Descricao,

            "aluno_Processos":processos,
            "aluno_Demanda":demanda,
            "aluno_app":app,

            "Aluno_Area": Area,
            "Aluno_Problema":Problema,
            "aluno_Atendimentos":atendimentos
            


            
        }
        if (dados_id.length < 5 && list.value !=''){
            alert('Por favor, preenche o campo ID ')
            return ;
        }if (dados_cpf.length < 11 && list.value !=''){
            alert('Atenção!!!verifique o CPF do aluno, está vazio ou faltando numero ')
            return ;
        }if (dados_nome.length < 5 &&list.value !=''){
            alert('Atenção!!! O campo aluno está vaziou ou faltando caracteres')
            return ;}
        
        console.log(SubmitForm)
        SubmitForm = JSON.stringify(SubmitForm)
        
        
            XHR.open('POST', '/send', true);
            XHR.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
            XHR.send(SubmitForm);
            window.location.reload()
            window.alert('Formulário enviado por sucesso!') 

    }else{
        abrirtab('form1');
        window.alert('Formulário não enviado, verifique os campos ou entre em contato com os desenvolvedores ')
    }

    
} 
/* Em caso de manutenção cuidado essa parte é o pulo de um input para o outro e a contagem se basea nos \t */

    var campos = document.querySelectorAll('.input_total')
    for (let i = 0; i < campos.length; ++i){
        campos[i].addEventListener('keydown',function(e){ 
            if (e.key =="Delete"){
    
                
                var mens = confirm("deseja apagar tudo?")
                if (mens == true){
                    campos[0].value = ''
                    campos[1].value = ''
                    campos[2].value = ''
                    campos[3].value = ''
                    campos[4].value = ''
                    campos[5].value = ''
                    campos[6].value = ''
                    campos[7].value = ''
                    campos[8].value = ''
                    

                }else{
                    return false
                }
                
            
            }})}
   
    
   

    for (let i = 0; i < campos.length; ++i){
        campos[i].addEventListener('paste',function(e){ 
      console.log(i)
          
    var clipboardData, pastedData;

    e.stopPropagation();
    e.preventDefault();

    clipboardData = e.clipboardData || window.Clipboard;
    pastedData = clipboardData.getData('Text');

     pastedData = pastedData+"\t"
    console.log(pastedData);
    
    
    pastedData=pastedData.split('\t')
   
    pastedData.splice(pastedData.indexOf(""),1)
    pastedData.splice(pastedData.indexOf(""),1)
     console.log(pastedData)
    
    

    if(campos[i].id=="dados_id"){
        
        console.log(pastedData)
        

        campos[0].value=pastedData[0]
        campos[1].value=pastedData[1]
        campos[2].value=pastedData[2]



    }
    if(campos[i].id=="ov_data"){

        
       

        campos[3].value=pastedData[1];
        campos[4].value=pastedData[3];
        campos[5].value=pastedData[5]+" "+pastedData[6];


    }if(campos[i].id=="chamado_data"){
       
        campos[6].value=pastedData[1];
        campos[7].value=pastedData[2];
        campos[8].value=pastedData[8];


    }  
        })}
        function apagarcampo(event)
{
    
    if (event.key =="Backspace"){

        campo1.value = ''

        campo2.value = ''
    
    }
}





//adicionando a função de adicionar novo option a todos os botões
const btnClicado = document.querySelectorAll("#AdicionarCampo");

function hideInserir(){
    var element = document.querySelector(".InserirDados");
    element.classList.remove("showInserirDados");
    
}

function Enviardados(){
    alert("Enviardados");
}
let h4 = document.querySelectorAll('#icone-adicionar');

function mostrarPopUp() {
    var element = document.querySelector(".InserirDados");
    element.classList.add("showInserirDados");
}
function alteraTitulo(num) {
    let popup = document.querySelector(".aplicacao-input");
    document.getElementById("titulo-option").innerHTML = num.getAttribute("class") + ":";

    num = num.getAttribute("class");
    console.log(num);
    popup.placeholder = "Nova opção em " + num;
    
    if (num ==="Processos"){
        select_opts = document.getElementById('Processos');
    }
    if (num ==="Aplicação"){
        select_opts = document.getElementById('Apps');
    }
    if (num ==="Processos"){
        select_opts = document.getElementById('Processos');
    }
    if (num ==="Área"){
        select_opts = document.getElementById('Area');
    }
    if (num ==="Problema"){
        select_opts = document.getElementById('ProblemaD');
    }
}

btnClicado.forEach((val,i)=>{
    btnClicado[i].addEventListener("click",function clicouBotao(){
        mostrarPopUp()
        alteraTitulo(btnClicado[i]);
        console.log(i)
    })
})


//adicionando o novo input ao select

let input_inserido = document.querySelector('.aplicacao-input');
let botaoInserir = document.querySelector('#AdicionarCampos');
let select_opts = document.getElementById('Apps');
console.log(select_opts);

function adicionarSelect() {
    let input_valor = input_inserido.value;
    console.log(input_inserido);
     if(input_valor != '') {
       select_opts.innerHTML += '<option>' +input_valor+ '</option>';
       input_inserido.value = '';
     }
   };    
     
   botaoInserir.addEventListener('click', adicionarSelect);






    
