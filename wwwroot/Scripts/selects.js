var xhttp = new XMLHttpRequest();
xhttp.open("GET", 'https://localhost:7190/listacategorias', false);
xhttp.send();
var categorias = xhttp.responseText;
categorias = JSON.parse(categorias)  
 
let lista = Array(categorias)
console.log (lista)
lista.forEach(e => {
 let select = document.querySelector("#Apps")
 let select1 = document.querySelector("#Area")
 let select2 = document.querySelector("#ProblemaD")
 let select3 = document.querySelector("#Processos")

 e.aplicacao.forEach(e => {
  select.options[select.options.length] = new Option(e.valor, e.id) 
  console.log(e.valor)
  });
 
    e.aplicacao.forEach(e => {
        select1.options[select1.options.length] = new Option(e.valor, e.id) 
        console.log(e.valor)
        });

    e.problema.forEach(e => {
        select2.options[select2.options.length] = new Option(e.valor, e.id) 
        console.log(e.valor)
        });

        e.processos.forEach(e => {
          select3.options[select3.options.length] = new Option(e.valor, e.id) 
          console.log(e.valor)
          });
   
});// Essa parte está buscando dados do banco e criando selects no html



