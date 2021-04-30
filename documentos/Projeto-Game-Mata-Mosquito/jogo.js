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
    if(document.getElementById('mosquito')){
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

    // Ação de Matar o Mosquito
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

// Random de Tamanho do Mosquito
function tamanhoMosquito() {
    let classe = Math.ceil(Math.random() * 3)
    
    switch(classe) {
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
    
    switch(classe) {
        case 1:
            return 'ladoA'
        case 2: 
            return 'ladoB'
    }
}

// Criando o cronometro
let tempo = 100

let cronometro = setInterval(function() {

                    tempo -= 1
                    if(tempo < 0) {
                        clearInterval(cronometro)
                        clearInterval(criaMosquito)
                        window.location.href = "youWin.html"
                    } else {
                        document.getElementById('tempo').innerHTML = tempo
                    }
                }, 1000)
                
// Estabelecendo o Nível de Dificuldade
let nivel = sessionStorage.getItem('level')

let criaMosquitoTempo = 2000

if(nivel === 'easy') {
    //2000
    criaMosquitoTempo = 2000
} else if(nivel === 'medium') {
    //1500
    criaMosquitoTempo = 1500
} else if(nivel === 'hard') {
    //1000
    criaMosquitoTempo = 1000
} else if(nivel === 'very-hard') {
    //750
    criaMosquitoTempo = 600
} 

