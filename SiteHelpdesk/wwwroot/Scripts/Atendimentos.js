window.onload = function(){
    let input = document.getElementById('number');
    let btn = document.getElementById('refresh')

    input.addEventListener('keydown', (event)=>{
        if(event.key=='Enter'){
            loadChamados();
        }
    })
}


function loadChamados(){
    limparChamados()
    const chamadosBox = document.getElementById('chamados-box')
    let id = document.getElementById('number').value;
     fetch(window.location.origin + `/atendimentos/aluno/${id}`).then((result)=>{
        result.json().then((res)=>{
            console.log(res)
            if(res.length==0){
                chamadosBox.innerHTML = `O aluno ID ${id} não possui chamados registrados.`
            }else{
            res.forEach((r,i)=>{
                
                
                //Criando elementos <ul>, <li>. <a>. <div>
                const lista = document.createElement('ul')
                //const liNome = document.createElement('li')
                const liData = document.createElement('li')
                const liResponsavel = document.createElement('li')
                const liAlunoId = document.createElement('li')
                const liAppVersao = document.createElement('li')
                const liAlunoOv = document.createElement('li')
                const liStatus = document.createElement('li')
                const liDispositivo = document.createElement('li')
                const liReproduzido = document.createElement('li')
                const liCard = document.createElement('li')
                const liProcesso = document.createElement('li')
                const liDemanda = document.createElement('li')
                const liAplicativo = document.createElement('li')
                const liArea = document.createElement('li')
                const liProblema = document.createElement('li')
                const liDescrição = document.createElement('li')
                const div = document.createElement('div');
                div.className = 'chamado'
                div.id = `chamado${i}`
                div.onclick = function(){
                    preencherTudo(div.id)
                    div.onclick = function(){
                        loadChamados()
                    }
                }


                const link = document.createElement('a')

                
                //Transformando dados em texto
                const dispositivo = document.createTextNode(`Dispositivo: ${r.aluno_dispositivo}`);
                const card = document.createTextNode(`CARD: ${r.aluno_card_id}`);
                const reproduzido = document.createTextNode(`Reproduzido?: ${r.aluno_reproducao}`);
                const appVersao = document.createTextNode(`Versão APP: ${r.aluno_app_versao}`);
                const ov = document.createTextNode(`Ordem de venda: ${r.aluno_ov}`);
                const ovStatus = document.createTextNode(`Status: ${r.aluno_ov_status}`);
                //const nome = document.createTextNode(`Aluno: ${r.aluno_nome}`);
                const data = document.createTextNode(`Data: ${r.aluno_chamado_data}`)
                const responsavel = document.createTextNode(`Responsável: ${r.responsavel}`)
                const alunoId = document.createTextNode(`Aluno ID: ${r.aluno_id}`)
                const process = document.createTextNode(`Processo: ${r.aluno_Processos}`)
                const demanda = document.createTextNode(`Demanda: ${r.aluno_Demanda}`)
                const app = document.createTextNode(`Aplicativo: ${r.aluno_app}`)
                const area = document.createTextNode(`Area: ${r.Aluno_Area}`)
                const problema = document.createTextNode(`Problema: ${r.Aluno_Problema}`)
                const desc = document.createTextNode(`Descrição: ${r.aluno_Desc}`)
                
                //Adicionando classe nos conteúdos para ficarem escondidos
                liDispositivo.className = 'infoHide'
                liResponsavel.className = 'infoHide'
                liCard.className = 'infoHide'
                liReproduzido.className = 'infoHide'
                liAlunoId.className = 'infoHide'
                liAppVersao.className = 'infoHide'
                liAlunoOv.className = 'infoHide'
                liStatus.className = 'infoHide'
                liDescrição.className = 'infoHide'

                let campoNome = document.getElementById('campoNome');
                campoNome.innerHTML = `Aluno: ${r.aluno_nome}`

                //Adicionando conteúdos nos <li>
                if(dispositivo.nodeValue!='Dispositivo: '){
                   liDispositivo.appendChild(dispositivo)
                }

                if(dispositivo.nodeValue!='Processo: '){
                    liProcesso.appendChild(process)
                 }

                 if(dispositivo.nodeValue!='Demanda: '){
                    liDemanda.appendChild(demanda)
                 }

                 if(dispositivo.nodeValue!='Aplicativo: '){
                    liAplicativo.appendChild(app)
                 }

                 if(dispositivo.nodeValue!='Ârea: '){
                    liArea.appendChild(area)
                 }

                 if(dispositivo.nodeValue!='Problema: '){
                    liProblema.appendChild(problema)
                 }
                
                 if(dispositivo.nodeValue!='Descrição do Problema: '){
                    liDescrição.appendChild(desc)
                 }

                if(card.nodeValue!='CARD: ' && card.nodeValue!='CARD: N/A'){
                    liCard.appendChild(card)
                }     

                if(reproduzido.nodeValue!='Reproduzido?: ' && reproduzido.nodeValue!='Reproduzido?: N/A'){
                    liReproduzido.appendChild(reproduzido)
                }
                
                if(appVersao.nodeValue!='Versão APP: '){
                   liAppVersao.appendChild(appVersao)
                }
                liAlunoOv.appendChild(ov)
                liStatus.appendChild(ovStatus)
                liAlunoId.appendChild(alunoId)
                //liNome.appendChild(nome)
                liData.appendChild(data)
                liResponsavel.appendChild(responsavel)
                
                //Adicionando <li> na <ul>
                //lista.appendChild(liNome)
                
                lista.appendChild(liData)
                lista.appendChild(liResponsavel)
                lista.appendChild(liAlunoId)
                lista.appendChild(liAlunoOv)
                lista.appendChild(liStatus)
                lista.appendChild(liAppVersao)
                lista.appendChild(liDispositivo)
                lista.appendChild(liCard)
                lista.appendChild(liReproduzido)
                lista.appendChild(liProcesso)
                lista.appendChild(liDemanda)
                lista.appendChild(liAplicativo)
                lista.appendChild(liArea)
                lista.appendChild(liProblema)
                lista.appendChild(liDescrição)
                div.appendChild(lista)
                link.appendChild(div)
                
                chamadosBox.appendChild(link);
            })
        }
        })
        
    })
}

function limparChamados(){
    const chamadosBox = document.getElementById('chamados-box')
    const campoNome = document.getElementById('campoNome')
    chamadosBox.innerHTML = ''
    campoNome.innerHTML = ''
}

function preencherTudo(chamadoId){

    const chamadosBox = document.getElementById('chamados-box')
    let clicado = document.getElementById(chamadoId);
    limparChamados();
    chamadosBox.appendChild(clicado);
    let tamanho = document.getElementsByClassName('infoHide').length
    console.log(`Existem ${tamanho} infoHide`)
    for(i=0;i<tamanho;i++){
        document.getElementsByClassName('infoHide')[0].className = 'infoShow'
        
    }
    
}









