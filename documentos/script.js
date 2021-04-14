// Lógica 1 - Recupera dado de nome do DB local do navegador
var nomePrincipal

function recuperar(callbackNome) {
	callbackNome(localStorage.getItem('nome'))
}

var callbackNome = function (nome) {
	nomePrincipal = nome
}

recuperar(callbackNome)



// Lógica 2 - Dia index
var data =  new Date()