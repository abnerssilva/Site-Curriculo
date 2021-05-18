// Lógica 1 - Recupera dado de nome do DB local do navegador
let nome = sessionStorage.getItem('nome')
			
// Lógica 2 - Dia index
let data =  new Date();

// Largura da Janela
let largura = 0

// Requisição HTTP via Ajax
$(document).ready(function() {

    $('#home').on('click', function() {
      largura = window.innerWidth
        $.get('./assets/docs/index3.html', data => { 
          $('#principal').html(data)
          if(largura <= 1199.98) {
            setTimeout(function () { 
              $('.navbar-toggler').trigger('click') 
            }, 10)
          }
        }) 
    })

    $('#objetivo').on('click', function() {
      largura = window.innerWidth
        $.get('./assets/docs/objetivo.html', data => { 
			    $('#principal').html(data)
          if(largura <= 1199.98) {
            setTimeout(function () { 
              $('.navbar-toggler').trigger('click') 
            }, 10)
          }
		    }) 
    })

    $('#sobre').on('click', function() {
      largura = window.innerWidth
        $.get('./assets/docs/sobre.html', data => { 
          $('#principal').html(data)
          if(largura <= 1199.98) {
            setTimeout(function () { 
              $('.navbar-toggler').trigger('click') 
            }, 10)
          }
        }) 
    })

    $('#formacao').on('click', function() {
      largura = window.innerWidth
        $.get('./assets/docs/formacao.html', data => { 
          $('#principal').html(data)
          if(largura <= 1199.98) {
            setTimeout(function () { 
              $('.navbar-toggler').trigger('click') 
            }, 10)
          }
        }) 
    })

    $('#experiencia').on('click', function() {
      largura = window.innerWidth
        $.get('./assets/docs/experiencias.html', data => { 
          $('#principal').html(data)
          if(largura <= 1199.98) {
            setTimeout(function () { 
              $('.navbar-toggler').trigger('click') 
            }, 10)
          }
        }) 
    })

    $('#quali').on('click', function() {
      largura = window.innerWidth
        $.get('./assets/docs/qualificacoes.html', data => { 
          $('#principal').html(data)
          if(largura <= 1199.98) {
            setTimeout(function () { 
              $('.navbar-toggler').trigger('click') 
            }, 200)
          }
        }) 
    })

    $('#contato').on('click', function() {
      largura = window.innerWidth
        $.get('./assets/docs/contato.html', data => { 
          $('#principal').html(data)
          if(largura <= 1199.98) {
            setTimeout(function () { 
              $('.navbar-toggler').trigger('click') 
            }, 10)
          }
        }) 
    })
})