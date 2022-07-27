window.onload = loadChamados();

function loadChamados(){
    limparChamados()
    const chamadosBox = document.getElementById('chamados-box')
    let id = document.getElementById('number').value;
     fetch(window.location.origin + `/aluno/${id}`).then((result)=>{
        result.json().then((res)=>{
            console.log(res)
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
                const liCard = document.createElement('li')
                const liReproduzido = document.createElement('li')
                const div = document.createElement('div');
                div.className = 'chamado'
                div.id = `chamado${i}`
                div.onclick = function(){
                    preencherTudo(div.id)
                }


                const link = document.createElement('a')
                //link.href = `/chamado/${r._id}`
                //link.href = 'javascript:limparChamados()'
                //link.href = 'javascript:preencherTudo()'

                
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
                
                //Adicionando classe nos conteúdos para ficarem escondidos
                liDispositivo.className = 'infoHide'
                liCard.className = 'infoHide'
                liReproduzido.className = 'infoHide'
                liAlunoId.className = 'infoHide'
                liAppVersao.className = 'infoHide'
                liAlunoOv.className = 'infoHide'
                liStatus.className = 'infoHide'

                let campoNome = document.getElementById('campoNome');
                campoNome.innerHTML = `Aluno: ${r.aluno_nome}`

                //Adicionando conteúdos nos <li>
                if(dispositivo.nodeValue!='Dispositivo: '){
                   liDispositivo.appendChild(dispositivo)
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
                div.appendChild(lista)
                link.appendChild(div)
                
                chamadosBox.appendChild(link);
            })
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









