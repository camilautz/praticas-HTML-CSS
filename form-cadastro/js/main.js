const nameUser = window.document.getElementById('inputName')
const emailUser = window.document.getElementById('inputEmail')
const passwordUser = window.document.getElementById('inputPass')

function validation(){
    if(!nameUser.value == "" && !emailUser == "" & !passwordUser ==""){
        window.location = ("cadastroEfetuado.html")
    }
}

function acessarConta(){
    window.location = ("loginPage.html")
}
