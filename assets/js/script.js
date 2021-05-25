//////////////////////////////////////////////////////////////////////////////////////// LÓGICA AJAX E ANIMAÇÕES //////////////////////////////////////////////////////////////////////////////

  // Lógica 1 - Recupera dado de nome do DB local do navegador
  let nome = sessionStorage.getItem('nome')
        
  // Lógica 2 - Dia index
  let data =  new Date();

  // Variáveis
  let largura = 0
  let conteudo
  let footer

  // FUNÇÕES
  // Função que adiciona Efeito no rodapé
  function footerFadeIn() {
    footer.setAttribute('class', 'anime-in centralizar mt-2 pt-2')
    setTimeout(function() {
      footer.removeAttribute('class')
      footer.setAttribute('class', 'centralizar mt-2 pt-2')
    }, 1000)
  }

  // Função que cria a requisição da Home
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

  // Função que cria a requisição da seção Objetivo
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

  // Função que cria o HTML da seção Objetivo com a animação
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
      footer.setAttribute('class', 'anime-in centralizar mt-2 pt-2')
      $('#principal').prepend(section)
      reqObjetivo()
    }
  }

  // Função que cria a requisição da seção Sobre
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

  // Função que cria o HTML da seção Sobre com a animação
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

  // Função que cria a requisição da seção Formação
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

  // Função que cria o HTML da seção Formação com a animação
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

  // Função que cria a requisição da seção Experiência
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

  // Função que cria o HTML da seção Experiência com a animação
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

  // Função que cria a requisição da seção Qualificações
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

  // Função que cria o HTML da seção Qualificações com a animação
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

  // Função que cria a requisição da seção Contato
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

    footer = document.getElementById('rodape')
    footerFadeIn()

      $('#home').on('click', function() {
        largura = window.innerWidth
        footerFadeIn()
        reqIndex() 
      })

      $('#objetivo').on('click', function() {
        largura = window.innerWidth
        footerFadeIn()
        criaSectionObj() 
      })

      $('#sobre').on('click', function() {
        largura = window.innerWidth
        footerFadeIn()
        criaSectionSobre()  
      })

      $('#formacao').on('click', function() {
        largura = window.innerWidth
        footerFadeIn()
        criaSectionFormacao()  
      })

      $('#experiencia').on('click', function() {
        largura = window.innerWidth
        footerFadeIn()
        criaSectionExperiencia()  
      })

      $('#quali').on('click', function() {
        largura = window.innerWidth
        footerFadeIn()
        criaSectionQuali() 
      })

      $('#contato').on('click', function() {
        largura = window.innerWidth
        footerFadeIn()
        reqContato()   
      })
  })