// Definição do Palco do Jogo
let altura = 0
let largura = 0

function ajusteTela() {
    altura = window.innerHeight
    largura = window.innerWidth

    altura = altura > 1017 ? 1017 : altura
    largura = largura > 2560 ? 2560 : largura
}

ajusteTela()

// Elemento de vidas
let vidas = 1

// Random de Posição dos Mosquitos

function posicaoMosquito() {

    // Remover o mosquito, caso exista
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        // Afetando as vidas do Jogador
        if (vidas >= 5) {
            window.location.href = "gameOver.html"

        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 70
    let posicaoY = Math.floor(Math.random() * altura) - 70

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // Criação do Mosquito no HTML
    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoMosquito() + ' ' + ladoMosquito()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    let somRaquete = document.getElementById('raquete')

    // Ação de Matar o Mosquito
    mosquito.onmousedown = function () {
        somRaquete.play()
        this.remove()
    }

    document.body.appendChild(mosquito)
}

// Random de Tamanho do Mosquito
function tamanhoMosquito() {
    let classe = Math.ceil(Math.random() * 3)

    switch (classe) {
        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2'
        case 3:
            return 'mosquito3'
    }
}

// Random de Lado do Mosquito
function ladoMosquito() {
    let classe = Math.ceil(Math.random() * 2)

    switch (classe) {
        case 1:
            return 'ladoA'
        case 2:
            return 'ladoB'
    }
}

// Criando o cronometro
let tempo = 100

let cronometro

function iniciaCronometro() {

    cronometro = setInterval(function () {

        tempo -= 1
        if (tempo < 0) {
            clearInterval(cronometro)
            clearInterval(criaMosquito)
            window.location.href = "youWin.html"
        } else {
            document.getElementById('tempo').innerHTML = tempo
        }
    }, 1000)
}

// Estabelecendo o Nível de Dificuldade
let level = sessionStorage.getItem('level')

let criaMosquitoTempo = 2000

if (level === 'easy') {
    //2000
    criaMosquitoTempo = 2000
} else if (level === 'medium') {
    //1500
    criaMosquitoTempo = 1500
} else if (level === 'hard') {
    //1000
    criaMosquitoTempo = 1000
} else if (level === 'very-hard') {
    //750
    criaMosquitoTempo = 750
}

// Pause no Jogo
let pausar

setTimeout(function () {
    pausar = document.querySelector('#pause')
    pausar.addEventListener('click', function (e) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        pauseSom()


        $("#diag3").modal({ backdrop: 'static', keyboard: false })
        $("#diag3").modal('show')

        $('#cancelar3').click(function () {
            $("#diag3").modal('hide')
            iniciaCronometro()
            iniciaCriaMosquito()
            execSom()
        })
    })
}, 900)

// Música Tema

$(document).ready(function () {
    let navegadores = "";

    if (navegadores = navigator.userAgent.toLowerCase().indexOf('op') > -1) {
        $('#pop2').remove()

        setTimeout(function () {
            iniciaCronometro()
            iniciaCriaMosquito()
        }, 500)

    } else if (navegadores = navigator.userAgent.indexOf('MSIE') > -1) {
        $('#pop2').remove()

        setTimeout(function () {
            iniciaCronometro()
            iniciaCriaMosquito()
        }, 500)

    } else if (navegadores = navigator.userAgent.indexOf('Firefox') > -1) {

        clearInterval(cronometro)
        clearInterval(criaMosquito)

        setTimeout(function () {
            $("#diag2").modal({ backdrop: 'static', keyboard: false })
            $("#diag2").modal('show')
        }, 500)

        $('#cancelar2').click(function () {
            $("#diag2").modal('hide')
            iniciaCronometro()
            iniciaCriaMosquito()
        })

    } else if (navegadores = navigator.userAgent.indexOf('Epiphany') > -1) {
        $('#pop2').remove()

        setTimeout(function () {
            iniciaCronometro()
            iniciaCriaMosquito()
        }, 500)

    } else if (navegadores = navigator.userAgent.indexOf('Chrome') > -1) {

        clearInterval(cronometro)
        clearInterval(criaMosquito)

        setTimeout(function () {
            $("#diag2").modal({ backdrop: 'static', keyboard: false })
            $("#diag2").modal('show')
        }, 500)

        $('#cancelar2').click(function () {
            $("#diag2").modal('hide')
            iniciaCronometro()
            iniciaCriaMosquito()
        })

    } else if (navegadores = navigator.userAgent.indexOf('Safari') > -1) {
        $('#pop2').remove()

        setTimeout(function () {
            iniciaCronometro()
            iniciaCriaMosquito()
        }, 500)


    }

    if ((navigator.userAgent.indexOf('Chrome') > -1) && (navigator.userAgent.indexOf('Safari') > -1)) safari = false;
    if ((navigator.userAgent.indexOf('Chrome') > -1) && (navigator.userAgent.toLowerCase().indexOf('op') > -1)) chrome = false;
    if ((navigator.userAgent.indexOf('Safari') > -1) && (navigator.userAgent.indexOf('Epiphany') > -1)) safari = false;
})
