



let Email = document.getElementById('Email-Login')
let Senha = document.getElementById('Senha-Login')
let RepitaSenha = document.getElementById('Repita-Senha-Login')
let form = document.querySelector('form')
let textEmail = document.getElementById('textEmail')
let TextSenha = document.getElementById('TextSenha')

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    if(Email.value == '' || Senha.value == '' || RepitaSenha.value == '') { 
        textform.textContent = 'Você precisa preencher todos os campos'
    } else if(Senha.value !== RepitaSenha.value) {
        textform.textContent = 'Há algum erro nos seus campos de cadastro :/'
    } else if(ValidarEmail(Email.value) === true && ValidarSenha(Senha.value) === true){ 
        console.log(Email.value)
        console.log(Senha.value)
        console.log(RepitaSenha.value)
    } else { 
        textform.textContent = 'Há algum erro nos seus campos de cadastro :/'
    }
})

Email.addEventListener('keyup', ()=> {
    if(ValidarEmail(Email.value) !== true) {
        textEmail.textContent = 'formato do email deve ser ex: Fulano.silva@medgrupo.com'
    } else { 
        textEmail.textContent = ''
    }

})

function ValidarEmail(Email) { 
    let emailValidacao = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
    return emailValidacao.test(Email)
}


Senha.addEventListener('keyup', ()=> {
if(ValidarSenha(Senha.value) !== true) {
TextSenha.textContent = 'A senha tem que possuir uma letra maiúscula, 1 caracter especial e 6 caracters'
} else {
    TextSenha.textContent = ''
}
})

function ValidarSenha(Senha){
    let SenhaValidacao = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return SenhaValidacao.test(Senha)
}