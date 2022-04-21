





function burguer() {
let menuMobile = document.querySelector('.mobile-menu')
if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove("open")
} else { 
    menuMobile.classList.add('open')
}

}


document.getElementById('tabpadrao').click()

function abrirtab(idtab) {

var conteudos = document.getElementsByClassName('form-content')

for (var i = 0; i < conteudos.length; i++) {
    conteudos[i].style.display = 'none'
}

document.getElementById(idtab).style.display = 'block'
}
