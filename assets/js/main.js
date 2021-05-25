///////////////////////////////////////////////////////////////////////////////// MAIN JavaScript (SITE CURRÍCULO) ///////////////////////////////////////////////////////////////////////////

// IIFS (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
(function() {

//////////////////////////////////////////////////////////////////////////////////////// INÍCIO DA LÓGICA ////////////////////////////////////////////////////////////////////////////////////
    $(document).ready(function () {

        // Constantes e Variáveis
        let nome = sessionStorage.getItem('nome')
        let modal = document.getElementById('modal1')
        let efeitosForm = document.getElementById('first')
        const escrita = 60
        const escritaFrase2 = modal.innerText.length * (escrita - 20)

        // Forçar nome 'inicio' caso não exista nenhum nome gravado no Storage da sessão
        if(!nome){
            nome = 'inicio'
            console.log(nome)
        }

        // Identiificação de Navegadores
        let navegadores = "";

        if (navegadores = navigator.userAgent.toLowerCase().indexOf('op') > -1) {
            $('#pop2').remove();
            navegadoresNaoSafari()
        
        } else if (navegadores = navigator.userAgent.indexOf('MSIE') > -1) {
            $('#pop2').remove();
            navegadoresNaoSafari()
        
        } else if (navegadores = navigator.userAgent.indexOf('Firefox') > -1) {
            $('#pop2').remove();
            navegadoresNaoSafari()
            
        } else if (navegadores = navigator.userAgent.indexOf('Epiphany') > -1) {
            $('#pop2').remove();
            navegadoresNaoSafari()
        
        } else if (navegadores = navigator.userAgent.indexOf('Chrome') > -1) {
            $('#pop2').remove();
            navegadoresNaoSafari()
        
        } else if (navegadores = navigator.userAgent.indexOf('Safari') > -1) {
            navegadorSafari()
            $('#browser').html('SAFARI');
        }

        if ((navigator.userAgent.indexOf('Chrome') > -1) && (navigator.userAgent.indexOf('Safari') > -1)) safari = false;
        if ((navigator.userAgent.indexOf('Chrome') > -1) && (navigator.userAgent.toLowerCase().indexOf('op') > -1)) chrome = false;
        if ((navigator.userAgent.indexOf('Safari') > -1) && (navigator.userAgent.indexOf('Epiphany') > -1)) safari = false;
        

        // FUNÇÕES
        // Função para setar classe de animação em botões e formulários
        function entraClasse() {
            efeitosForm.setAttribute('class', 'anime-form input-group-prepend')
        }

        // Função que determina qual texto será escrito
        function valorModal(valor) { // Ex.: ('modal5')
            modal = document.getElementById(valor)
            maqEscrever(modal)
        }

        // Função que determina qual caixa de diálogo vai entrar
        function entraModal(hashtagDialog) { // Ex.: ('#diag1')
            $(hashtagDialog).modal({ backdrop: 'static', keyboard: false })
            $(hashtagDialog).modal('show')
        }

        // Função de start no efeito dos formulários
        function efeitoFormulario(idForm) { // Ex.: 'noName'
            setTimeout(function(){
                efeitosForm = document.getElementById(idForm)
                entraClasse()
            }, 2000)
        }

        // Função que concatena as três anteriores para limpar o código
        function concatFunctions(idValor, hashtagDialog, idForm) { // Ex.: 'modal5', '#diag5', 'name2'
            setTimeout(function () {   
                valorModal(idValor)                         
                entraModal(hashtagDialog)                          
                efeitoFormulario(idForm)
            }, 300)
        }

        // Função de saída das caixas de diálogo a partir dos cliques nos botões
        function saiModal(hashtagIdBotao) { //Ex.: ('#cancelar5')
            $(hashtagIdBotao).attr('data-dismiss', 'modal')
            setTimeout(function () { $(hashtagIdBotao).trigger('click') }, 200)
        }

        // Função de envio de dados do formúlario
        function clickFormSimples(hashtagIdForm, hashtagIdBotao) { // Ex.: '#name4' e '#enviar5'
            $(hashtagIdForm).submit(function (e) {
                e.preventDefault()
                saiModal(hashtagIdBotao)
            })
        }

        // Entrada da Primeira Dialog
        setTimeout(function () {
            entraModal('#diag1')
            setTimeout(() => {
                entraClasse()
            }, escritaFrase2)    
        }, 100)

        // Condição inicial exclusiva para navegador Safari
        function navegadorSafari() {
            nome = 'fim'
            if (navegadores = navigator.userAgent.indexOf('Safari') > -1) {
                // Clique botão Fechar Dialog 1            
                $('#cancelar1').mousedown(function () {
                    $("#diag1").modal('hide')
                    setTimeout(function () {
                        // Entra Dialog 2 "Dispositivos Apple..."
                        entraModal('#diag2')
                    }, 300)
                })
                // Clique botão Fechar Dialog 2
                $('#cancelar2').mousedown(function () {
                    nome = "inicio"
                    acaoFechar('#diag2')
                })
            }
        }   
        
        // Condições para demais navegadores
        function navegadoresNaoSafari() {
            $('#cancelar1').mousedown(function () {
                acaoFechar('#diag1')
            })
        }

        // Função a ser executada quando o botão fechar dos Dialogs 1 ou 2 for clicado para abrir Dialog 3
        function acaoFechar(hashtagDialog) { // ATENÇÃO: Exclusiva para argumentos '#diag1' e '#diag2'
            $(hashtagDialog).modal('hide')
            setTimeout(function () {
                $('#modal3-2').attr('style', 'opacity: 0;')
                valorModal('modal3-1')
                setTimeout(function(){
                    efeitosForm = document.getElementById('name')
                    entraClasse()
                    valorModal('modal3-2')
                    $('#modal3-1').removeAttr('id')
                    $('#modal3-2').attr('style', 'opacity: 1;')
                    efeitoFormulario('noName')
                }, escritaFrase2)
                entraModal('#diag3')
                logicaDeIdentificacao()
            }, 300)
        }

        // Função para confirmação da opção de não se identificar
        function opcaoSemIdentificacao() {
            setTimeout(function () {
                $('#modal4-2').attr('style', 'opacity: 0;')
                valorModal('modal4-1')
                entraModal('#diag4')
                setTimeout(function(){
                    valorModal('modal4-2')
                    $('#modal4-1').removeAttr('id')
                    $('#modal4-2').attr('style', 'opacity: 1;')
                    efeitoFormulario('noNames')
                }, escritaFrase2)
            }, 10)
        }

        //Executar se o btn SIM da Dialog 4 for clicado
        function semIdentificacaoSim() {
            nome = 'Recrutador(a)'
            console.log(nome)
            sessionStorage.setItem('nome', nome)
            // Sai Dialod 4 "Você optou......"
            saiModal('#enviar2')
            // Entra Dialog 6 "Que pena....."
            concatFunctions('modal6', '#diag6', 'name3')
             // Clique btn OK Dialog 6 "Que pena..."
            clickFormSimples('#name3', '#enviar4')  
        }

        //Executar se o btn NÃO da Dialog 4 for clicado
        function semIdentificacaoNao() {
            // Sai Dialod 4 "Você optou......"
            saiModal('#cancelar4')
            // Entra dialog 5 "Então Digite seu nome"
            valida = new ValidaFormulario('modalBody5', 'name2', '#nome2')
            concatFunctions('modal5', '#diag5', 'name2')
            $('#name2').submit(function (e) {
                e.preventDefault()
                nome = sessionStorage.getItem('nome')
                if (!nome == '' || !nome == ' ') {
                    // Sai Dialog 5 "Então Digite seu nome"
                    saiModal('#enviar3')
                    // Entra Dialog 7 "Vc digitou...."
                    modal7()     
                }              
            })
        }

        // Validar formulario de digitação de nomes
        class ValidaFormulario {
            constructor(idModalBody, idForm, hashtagIdInput){
                this.modalBody = document.getElementById(idModalBody)
                this.formulario = document.getElementById(idForm)
                this.input = $(hashtagIdInput)
                let nome = this.input
                this.eventos()
            }

            eventos() {
                this.formulario.addEventListener('submit', e => {
                    this.handleSubmit(e)
                })
            }

            handleSubmit(e, hashtagIdBotao) {
                e.preventDefault()
                const checkFields = this.isValid()

                if(checkFields) {
                    e.preventDefault()
                    nome = this.input.val()
                    console.log(nome)
                    sessionStorage.setItem('nome', nome)
                    $('#nome_digitado').html(nome)
                } 
            }

            isValid() {
                 
                let valid = true

                for(let errorText of this.modalBody.querySelectorAll('.error-text')) {
                    errorText.remove()
                }

                for(let campo of this.formulario.querySelectorAll('.form-control')) {
                    
                    if(!campo.value) {
                        campo.focus()
                        this.createError(campo, 'Campo Nome não pode estar vazio')
                        valid = false 
                    } else {
                        if(!this.validaNome(campo)) {
                            setTimeout(() => {
                                campo.value = ''
                            }, 10)
                            valid = false
                        }
                    }

                }
                return valid
            }

            validaNome(campo) {
                let nome = campo.value
                let valid = true

                if(nome.length < 3 || nome.length > 12) {
                    campo.focus()
                    this.createError(campo, 'Nome deve conter entre 3 e 12 caracteres')
                    valid = false                     
                }

                if(!nome.match(/[a-zA-Z]/g)) {                   
                    campo.focus()
                    this.createError(campo, 'Nome deve conter apenas letras')
                    valid = false 
                }
                return valid
            }

            createError(campo, msg) {
                const div = document.createElement('div')
                div.innerHTML = msg
                div.setAttribute('class', 'error-text d-block')
                div.setAttribute('style', 'width: 100%;')
                this.formulario.after(div)
            }

        }

        let valida = new ValidaFormulario('modalBody3', 'name', '#nome', '#enviar1')

        // Função para conferir se o nome digitado está correto
        function confereNome() {
            setTimeout(function () {
                console.log(escritaFrase2)
                $('#modal7-2').attr('style', 'opacity: 0;')
                $('#nome_digitado').attr('style', 'opacity: 0;')
                entraModal('#diag7')
                valorModal('modal7-1')
                setTimeout(function(){   
                    console.log(escritaFrase2)                 
                    valorModal('nome_digitado')
                    $('#modal7-1').removeAttr('id')
                    $('#nome_digitado').attr('style', 'opacity: 1;')
                    setTimeout(function() {
                        console.log(escritaFrase2)
                        valorModal('modal7-2')
                        $('#nome_digitado').removeAttr('id')
                        $('#modal7-2').attr('style', 'opacity: 1;')   
                    }, escritaFrase2 / 5)
                }, escritaFrase2 / 5)  
            }, 100)
            efeitoFormulario('names')
            clickFormSimples('#name4', '#enviar5')
        }

        //
        function modal7() {
            confereNome()
            $('#noName4').submit(function (o) {
                o.preventDefault()
                sessionStorage.clear()
                saiModal('#cancelar5')
                // Entra Dialog 8 "Digite seu nome Novamente"
                modal8()
            })
        }

        //
        function modal8() {
            valida = new ValidaFormulario('modalBody8', 'name5', '#nome3')
            concatFunctions('modal8', '#diag8', 'name5')
            $('#name5').submit(function (e) {
                e.preventDefault()
                nome = sessionStorage.getItem('nome')
                if (!nome == '' || !nome == ' ') {
                    // Sai Dialog 8
                    saiModal('#enviar6')
                     // Entra Dialog 9 "Seu nome foi corrigido..."
                    ultimoModal()    
                } 
            })
        }

        // Entra e confirma o último Modal (resultado de correção do nome)
        function ultimoModal() {
            setTimeout(function () {
                concatFunctions('modal9', '#diag9', 'name6')
            }, 300)
            clickFormSimples('#name6', '#enviar7')
        }
        
        // Função para o efeito Máquina de Escrever dos modais
        function maqEscrever(el) { // Argumento de 'el' sempre será a let modal e suas variantes
            const arrayLetrasGeral = el.innerHTML.split('')
            el.innerHTML = ''
            arrayLetrasGeral.forEach (function(letra, i) {
                setTimeout(function() {
                    el.innerHTML += letra
                }, escrita * i)
            })
        }
        maqEscrever(modal)
        
        function logicaDeIdentificacao() {   
            // Dialog 3
            if (nome === "inicio") {
                $('#noName').submit(function (h) {
                    h.preventDefault()
                    $("#diag3").modal('hide')
                    nome = null
                    if (nome === 'undefined' || nome === undefined || nome === null || nome === "" || nome === " ") {
                        // Entra Dialog 4 "Você optou......""
                        opcaoSemIdentificacao()
                        // Clique Btn SIM Dialog 4 "Você optou......"
                        $('#noName2').submit(function (e) {
                            e.preventDefault()
                            semIdentificacaoSim()
                        })
                        // Clique Btn NÃO Dialog 4 "Você optou......"
                        $('#noName3').submit(function (e) {
                            e.preventDefault()
                            semIdentificacaoNao()
                        })
                    } 
                })
                $('#name').submit(function (e) {
                    valida = new ValidaFormulario('modalBody3', 'name', '#nome')
                    nome = sessionStorage.getItem('nome')
                    if (!nome == '' || !nome == ' ') {
                        //  Sai Dialog 3
                        saiModal('#enviar1')
                        // Entra Dialog 7 "Vc digitou...."
                        modal7()     
                    }              
                })
            } else if (nome != 'fim') {
                nome = sessionStorage.getItem('nome')
                window.open('index2.html', '_self')
            }
        } 
    })
}());