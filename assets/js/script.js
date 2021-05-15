// Lógica 1 - Recupera dado de nome do DB local do navegador
let nome = sessionStorage.getItem('nome')
			
// Lógica 2 - Dia index
let data =  new Date();

// Requisição HTTP via Ajax
$(document).ready(function() {

    $('#home').on('click', function() {
        $.get('./assets/docs/index3.html', data => { 
			$('#principal').html(data)
		}) 
    })

    $('#objetivo').on('click', function() {
        $.get('./assets/docs/objetivo.html', data => { 
			$('#principal').html(data)
		}) 
    })

    $('#sobre').on('click', function() {
        $.get('./assets/docs/sobre.html', data => { 
			$('#principal').html(data)
		}) 
    })

    $('#formacao').on('click', function() {
        $.get('./assets/docs/formacao.html', data => { 
			$('#principal').html(data)
		}) 
    })

    $('#experiencia').on('click', function() {
        $.get('./assets/docs/experiencias.html', data => { 
			$('#principal').html(data)
		}) 
    })

    $('#quali').on('click', function() {
        $.get('./assets/docs/qualificacoes.html', data => { 
			$('#principal').html(data)
		}) 
    })

    $('#contato').on('click', function() {
        $.get('./assets/docs/contato.html', data => { 
			$('#principal').html(data)
		}) 
    })
})