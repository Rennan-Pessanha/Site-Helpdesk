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
var submenu = document.querySelector(".Sub-Menu-Perfil");

btn.addEventListener("mouseover", function(){
  let submenu = document.querySelector(".Sub-Menu-Perfil")
    if(submenu.style.display=='none'){
      submenu.style.display = "block";
  }
});

document.querySelector(".Sub-Menu-Perfil").addEventListener("mouseleave", function(){
  let submenu = document.querySelector(".Sub-Menu-Perfil")
    if(submenu.style.display == 'block'){
      submenu.style.display = "none";
  }
});


  var btn = document.querySelector("#Not");
  var submenu = document.querySelector(".Sub-Menu-Not");
    btn.addEventListener("mouseover", function(){
      let submenu = document.querySelector(".Sub-Menu-Not")
        if( submenu.style.display === "none"){
            submenu.style.display = "block";
          
        } 
        
    });
    document.querySelector(".Sub-Menu-Not").addEventListener("mouseleave", function(){
      let submenu = document.querySelector(".Sub-Menu-Not")
        if(submenu.style.display == 'block'){
          submenu.style.display = "none";
      }
    });

    var btn = document.querySelector("#Tar");
    var submenu = document.querySelector(".Sub-Menu-Tar");
      btn.addEventListener("mouseover", function(){
    
        var div = document.querySelector(".Sub-Menu-Tar");
        
      if(div.style.display === "none") {
            div.style.display = "block";
            document.querySelector('.Sub-Menu-Perfil').style.display = "none"
            document.querySelector('.Sub-Menu-Not').style.display = "none"
        } else {
          div.style.display = "none";
      }
        
    });

    
