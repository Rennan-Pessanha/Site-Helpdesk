
var callcenter = []
var email = []
var whatszap = []
var tdados


var xhttp = new XMLHttpRequest();
xhttp.open("GET", '/atendimentos/todos', false);
xhttp.send();//Utilizando esse carinha legal para inserir logo mais tarde no dashboard



var resultado = xhttp.responseText;

resultado = JSON.stringify(resultado);
console.log(resultado)
function problemas(){
resultado.forEach(element => {
    switch(element.aluno_Atendimentos
     )
    {
     case "Callcenter":
       callcenter = callcenter+1
       break
     case "Email" :
       email = email+1
       break
       case "Whatszap" :
        whatszap = whatszap+1
        break
      
       default :
    }
    console.log(email,whatszap,callcenter)
   });

};
function listaProblemas() {
 
  resultado = tdados
  tdados = document.getElementById('dados');
  tbody.innerHTML = '';

  for (let i = 0; i < tdados.length; i++) {
    let tr = tdados.insertCell();

    callcenter = tr.insertCell();
    email = tr.insertCell();
    whatszap = tr.insertCell();

   // ainda estou codando esse cara aqui...paciencia 
}}







