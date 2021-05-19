// Lógica 1 - Recupera dado de nome do DB local do navegador
let nome = sessionStorage.getItem('nome')
			
// Lógica 2 - Dia index
let data =  new Date();

// Variáveis
let largura = 0
let conteudo
let link

//Funções
function reqIndex() {
  $.get('./assets/docs/index3.html', data => { 
    $('#principal').html(data)
    if(largura <= 1199.98) {
      setTimeout(function () { 
        $('.navbar-toggler').trigger('click') 
      }, 10)
    }
  })
}

function reqObjetivo() {
  $.get('./assets/docs/objetivo.html', data => { 
    $('#conteudo').html(data)
    if(largura <= 1199.98) {
      setTimeout(function () { 
        $('.navbar-toggler').trigger('click') 
      }, 10)
    }
  }) 
}

function criaSectionObj() {
  conteudo = document.getElementById('conteudo')

  if (conteudo.classList.contains('ind')) {
    $('#principal').children().remove()
    const section = document.createElement('section')
    $(section).attr('id', `conteudo`)
    $(section).attr('class', `obj anime conteiner`)
    $('#principal').prepend(section)
    reqObjetivo()
  } else {
    $('#principal').children().remove()
    const section = document.createElement('section')
    $(section).attr('id', `conteudo`)
    $(section).attr('class', `obj anime-reverse conteiner`)
    $('#principal').prepend(section)
    reqObjetivo()
  }
}

function reqSobre() {
  $.get('./assets/docs/sobre.html', data => { 
    $('#conteudo').html(data)
    if(largura <= 1199.98) {
      setTimeout(function () { 
        $('.navbar-toggler').trigger('click') 
      }, 10)
    }
  })
}

function criaSectionSobre() {
  conteudo = document.getElementById('conteudo')

  if (conteudo.classList.contains('ind') || conteudo.classList.contains('obj')) {
    $('#principal').children().remove()
    const section = document.createElement('section')
    $(section).attr('id', `conteudo`)
    $(section).attr('class', `sob anime conteiner`)
    $('#principal').prepend(section)
    reqSobre()
  } else {
    $('#principal').children().remove()
    const section = document.createElement('section')
    $(section).attr('id', `conteudo`)
    $(section).attr('class', `sob anime-reverse conteiner`)
    $('#principal').prepend(section)
    reqSobre()
  }
}

function reqFormacao() {
  $.get('./assets/docs/formacao.html', data => { 
    $('#conteudo').html(data)
    if(largura <= 1199.98) {
      setTimeout(function () { 
        $('.navbar-toggler').trigger('click') 
      }, 10)
    }
  }) 
}

function criaSectionFormacao() {
  conteudo = document.getElementById('conteudo')

  if (conteudo.classList.contains('ind') || conteudo.classList.contains('obj') || conteudo.classList.contains('sob')) {
    $('#principal').children().remove()
    const section = document.createElement('section')
    $(section).attr('id', `conteudo`)
    $(section).attr('class', `forma anime conteiner`)
    $('#principal').prepend(section)
    reqFormacao()
  } else {
    $('#principal').children().remove()
    const section = document.createElement('section')
    $(section).attr('id', `conteudo`)
    $(section).attr('class', `forma anime-reverse conteiner`)
    $('#principal').prepend(section)
    reqFormacao()
  }
}

function reqExperiencia() {
  $.get('./assets/docs/experiencias.html', data => { 
    $('#conteudo').html(data)
    if(largura <= 1199.98) {
      setTimeout(function () { 
        $('.navbar-toggler').trigger('click') 
      }, 10)
    }
  })
}

function criaSectionExperiencia() {
  conteudo = document.getElementById('conteudo')

  if (conteudo.classList.contains('cont') || conteudo.classList.contains('qualify')) {
    $('#principal').children().remove()
    const section = document.createElement('section')
    $(section).attr('id', `conteudo`)
    $(section).attr('class', `exp anime-reverse conteiner`)
    $('#principal').prepend(section)
    reqExperiencia()
  } else {
    $('#principal').children().remove()
    const section = document.createElement('section')
    $(section).attr('id', `conteudo`)
    $(section).attr('class', `exp anime conteiner`)
    $('#principal').prepend(section)
    reqExperiencia()
  }
}

function reqQuali() {
  $.get('./assets/docs/qualificacoes.html', data => { 
    $('#conteudo').html(data)
    if(largura <= 1199.98) {
      setTimeout(function () { 
        $('.navbar-toggler').trigger('click') 
      }, 10)
    }
  }) 
}

function criaSectionQuali() {
  conteudo = document.getElementById('conteudo')

  if (conteudo.classList.contains('cont')) {
    $('#principal').children().remove()
    const section = document.createElement('section')
    $(section).attr('id', `conteudo`)
    $(section).attr('class', `qualify anime-reverse conteiner`)
    $('#principal').prepend(section)
    reqQuali()
  } else {
    $('#principal').children().remove()
    const section = document.createElement('section')
    $(section).attr('id', `conteudo`)
    $(section).attr('class', `qualify anime conteiner`)
    $('#principal').prepend(section)
    reqQuali()
  }
}

function reqContato() {
  $.get('./assets/docs/contato.html', data => { 
    $('#principal').html(data)
    if(largura <= 1199.98) {
      setTimeout(function () { 
        $('.navbar-toggler').trigger('click') 
      }, 10)
    }
  }) 
}                                             


// Requisição HTTP via Ajax
$(document).ready(function() {

    $('#home').on('click', function() {
      largura = window.innerWidth
      reqIndex() 
    })

    $('#objetivo').on('click', function() {
      largura = window.innerWidth
      criaSectionObj() 
    })

    $('#sobre').on('click', function() {
      largura = window.innerWidth
      criaSectionSobre()  
    })

    $('#formacao').on('click', function() {
      largura = window.innerWidth
      criaSectionFormacao()  
    })

    $('#experiencia').on('click', function() {
      largura = window.innerWidth
      criaSectionExperiencia()  
    })

    $('#quali').on('click', function() {
      largura = window.innerWidth
      criaSectionQuali() 
    })

    $('#contato').on('click', function() {
      largura = window.innerWidth
      reqContato()   
    })
})