// Parte da responsividade, menu-Hamburguer 

function burguer() {
    let menuMobile = document.querySelector('.mobile-menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove("open")
    } else { 
        menuMobile.classList.add('open')
    }
    
    }

    
// Dropdown-Menu-Superior.

    var btn = document.querySelector("#Perfil");

    btn.addEventListener("click", function(){
    
        var div = document.querySelector(".Sub-Menu-Perfil");
        
      if(div.style.display === "none") {
            div.style.display = "block";
            document.querySelector('.Sub-Menu-Not').style.display = "none"
            document.querySelector('.Sub-Menu-Tar').style.display = "none"
        } else {
          div.style.display = "none";
      }
        
    });

    var btn = document.querySelector("#Not");

    btn.addEventListener("click", function(){
    
        var div = document.querySelector(".Sub-Menu-Not");
        
      if(div.style.display === "none") {
            div.style.display = "block";
            document.querySelector('.Sub-Menu-Perfil').style.display = "none"
            document.querySelector('.Sub-Menu-Tar').style.display = "none"
        } else {
          div.style.display = "none";
      }
        
    });

    var btn = document.querySelector("#Tarefas");

    btn.addEventListener("click", function(){
    
        var div = document.querySelector(".Sub-Menu-Tar");
        
      if(div.style.display === "none") {
            div.style.display = "block";
            document.querySelector('.Sub-Menu-Perfil').style.display = "none"
            document.querySelector('.Sub-Menu-Not').style.display = "none"
        } else {
          div.style.display = "none";
      }
        
    });