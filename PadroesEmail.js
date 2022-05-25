
function burguer() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove("open")
    } else { 
        menuMobile.classList.add('open')
    }
    
    }

    


var btn = document.querySelector("#Perfil");

btn.addEventListener("click", function() {

    var div = document.querySelector(".Sub-Menu-Perfil");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
});

var btn = document.querySelector("#Not");

btn.addEventListener("click", function() {

    var div = document.querySelector(".Sub-Menu-Not");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
});

var btn = document.querySelector("#Tarefas");

btn.addEventListener("click", function() {

    var div = document.querySelector(".Sub-Menu-Tar");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
});