
function Getall(){
let xhttp = new XMLHttpRequest();
xhttp.open("GET", 'https://localhost:7190/listacategorias', false);
xhttp.send();
let categorias = xhttp.responseText;
categorias = JSON.parse(categorias)  
return categorias
}

function createSelect(){

  let lista = Array(Getall())
  console.log (lista)
  lista.forEach(e => {
   const select = document.querySelector("#Processos")
   const select1 = document.querySelector("#Apps")

   e.processos.forEach(e => {
    select.options[select.options.length] = new Option(e.valor, e.id) 
    console.log(e)
    });
   
      e.aplicacao.forEach(e => {
          select1.options[select1.options.length] = new Option(e.valor, e.id) 
          console.log(e)
          });    
  });// Essa parte está buscando dados do banco e criando selects no html
}


function loadSelect2(id){
  const app = document.getElementById(id).value
  let lista = Array(Getall())
  lista.forEach(e => {
    const select3 = document.querySelector("#ProblemaD")
    const select2 = document.querySelector("#Area")
    select3.options.length = 1 
    select2.options.length = 1
       e.area.forEach(e => {
        if (e.idPai == app ){
        select2.options[select2.options.length] = new Option(e.valor, e.id) 
        console.log(e)
      }else{
        console.log("nao encontrou")
      }
        });
    
    
    
   });// Essa parte está buscando dados do banco e criando selects no html
}
function loadSelect3(id){
  let lista = Array(Getall())
  lista.forEach(e => { 
    const app = document.getElementById(id).value
    const select3 = document.querySelector("#ProblemaD")
    select3.options.length = 1 
       e.problema.forEach(e => {
        if (e.idPai == app ){
          select3.options[select3.options.length] = new Option(e.valor, e.id) 
           console.log(e)
        }else{
          console.log("nao encontrou")
        }});    
   });// Essa parte está buscando dados do banco e criando selects no html
}
function zerarSelect()
{

}

$(window).on("load", createSelect());




