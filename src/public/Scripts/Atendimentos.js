window.onload = () =>{
    const chamadosBox = document.getElementById('chamados-box')
     fetch(window.location.origin + "/all").then((result)=>{
        result.json().then((res)=>{
            console.log(res)
            res.forEach((r)=>{
                const div = document.createElement('div');
                div.className = 'chamado'

                const lista = document.createElement('ul')
                const liNome = document.createElement('li')
                const liData = document.createElement('li')
                const liResponsavel = document.createElement('li')


                const nome = document.createTextNode(`Aluno: ${r.aluno_nome}`);
                const data = document.createTextNode(`Data: ${r.aluno_chamado_data}`)
                const responsavel = document.createTextNode(`Responsável: ${r.responsavel}`)
                
                liNome.appendChild(nome)
                liData.appendChild(data)
                liResponsavel.appendChild(responsavel)
                
                lista.appendChild(liNome)
                lista.appendChild(liData)
                lista.appendChild(liResponsavel)
                div.appendChild(lista)
                
                chamadosBox.appendChild(div);
            })
        })
        
    })
    
} 








