
function Getall(){
let xhttp = new XMLHttpRequest();
xhttp.open("GET", 'https://localhost:7190/listacategorias', false);
xhttp.send();
let categorias = xhttp.responseText;
categorias = JSON.parse(categorias)  
return categorias
}
const select3 = document.querySelector("#ProblemaD")
const select2 = document.querySelector("#Area")
const  select1 = document.querySelector("#Apps")
const select = document.querySelector("#Processos")

function createSelect(){

  let lista = Array(Getall())
  console.log (lista)
  lista.forEach(e => {
   e.processos.forEach(e => {
    select.options[select.options.length] = new Option(e.valor, e.id)   
    });
      e.aplicacao.forEach(e => {
          select1.options[select1.options.length] = new Option(e.valor, e.id) 
          });    
  });// Essa parte está buscando dados do banco e criando options no html
}
function loadSelect2(id){
  const app = document.getElementById(id).value
  let lista = Array(Getall())
  lista.forEach(e => {
    select3.options.length = 1 
    select2.options.length = 1
       e.area.forEach(e => {
        if (e.idPai == app ){
        select2.options[select2.options.length] = new Option(e.valor, e.id) 
      }else{
        console.log("nao encontrou")
      }
        });
   });
}
function loadSelect3(id){
  let lista = Array(Getall())
  lista.forEach(e => { 
    const app = document.getElementById(id).value
    
    select3.options.length = 1 
       e.problema.forEach(e => {
        if (e.idPai == app ){
          select3.options[select3.options.length] = new Option(e.valor, e.id) 
         
        }else{
          console.log("nao encontrou")
        }});    
   });// Fim do método GET do select abaixo está o Post
}
// essa parte ela cria o post pro banco, cuidado em mexer nela.
function Refresh(){
  window.location.reload();   
  window.addEventListener ('load',abrirtab('form2'))
}
function postSelect() {
  let campo = document.getElementById("titulo-option").innerHTML;
  let dados = document.getElementById("valorpost").value;
 
  campo = campo.replace(":", "");
  let nid = 0

  if (campo == 'Processos') {
      nid = 1; console.log(nid)
  }

  if (campo == 'Aplicação') {
      nid = 2; console.log(nid)
  }
  if(campo == 'Área'){
    
    nid = 3; console.log(nid)
  }
  
  if( campo == 'Problema') {
      nid = 4; console.log(nid)
  }
  if(nid ===1 || nid===2)
  {
      dados = {
          Valor: dados 
         }
        
         fetch('/criarCategoria/'+nid+'', {
             method: "POST",
             body: JSON.stringify(dados),
             headers: {"Content-type": "application/json; charset=UTF-8"}
           })
           .then(response => response.json()) 
           .then(json => console.log(json));
           Refresh()
  }if(nid===3){
      dados = {
          Valor: dados, 
          IdPai: document.getElementById('Apps').value
         }
        
         fetch('/criarCategoria/'+nid+'', {
             method: "POST",
             body: JSON.stringify(dados),
             headers: {"Content-type": "application/json; charset=UTF-8"}
           })
           .then(response => response.json())
           .catch(error => {alert("Insira uma aplicação!");}) 
           .then(json => console.log(json));
          Refresh()

  }
  if(nid===4){
      dados = {
          Valor: dados, 
          IdPai: document.getElementById('Area').value
         }
        
         fetch('/criarCategoria/'+nid+'', {
             method: "POST",
             body: JSON.stringify(dados),
             headers: {"Content-type": "application/json; charset=UTF-8"}
           })
           .then(response => response.json()) 
           .catch(error => {alert("Insira uma área!");})
           .then(json => console.log(json));
           
           Refresh()

  }
}
$(window).on("load", createSelect());




