$(document).ready(function () {
    let nome = sessionStorage.getItem('nome')

    setTimeout(function () {
        $("#diag1").modal({ backdrop: 'static', keyboard: false })
        $("#diag1").modal('show')
    }, 300)

    if(!nome){
        nome = 'inicio'
    }

    console.log(nome)

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
        nome = 'fim'
        $('#browser').html('SAFARI');
    }

    if ((navigator.userAgent.indexOf('Chrome') > -1) && (navigator.userAgent.indexOf('Safari') > -1)) safari = false;
    if ((navigator.userAgent.indexOf('Chrome') > -1) && (navigator.userAgent.toLowerCase().indexOf('op') > -1)) chrome = false;
    if ((navigator.userAgent.indexOf('Safari') > -1) && (navigator.userAgent.indexOf('Epiphany') > -1)) safari = false;
            
        if (navegadores = navigator.userAgent.indexOf('Safari') > -1) {            
            $('#cancelar1').mousedown(function () {
                $("#diag1").modal('hide')
                setTimeout(function () {
                    $("#diag2").modal({ backdrop: 'static', keyboard: false })
                    $("#diag2").modal('show')
                }, 300)
            })

            $('#cancelar2').mousedown(function () {
                nome = "inicio"
                navegadoresNaoSafari()
                $("#diag2").modal('hide')
                setTimeout(function () {
                    $("#diag3").modal({ backdrop: 'static', keyboard: false })
                    $("#diag3").modal('show')
                }, 300)
            })
        }   

    function navegadoresNaoSafari() {   
        if (nome === "inicio") {
            $('#cancelar1').mousedown(function () {
                $("#diag1").modal('hide')
                setTimeout(function () {
                    $("#diag3").modal({ backdrop: 'static', keyboard: false })
                    $("#diag3").modal('show')
                }, 300)
            })
            $('#name').submit(function (e) {
                e.preventDefault()
                nome = $('#nome').val()
                console.log(nome)
                sessionStorage.setItem('nome', nome)
                $('#enviar1').attr('data-dismiss', 'modal')
                setTimeout(function () { $('#enviar1').trigger('click') }, 200)

                $('#nome_digitado').html(nome)

                if (nome === 'undefined' || undefined) {
                } else {
                    setTimeout(function () {
                        $("#diag7").modal({ backdrop: 'static', keyboard: false })
                        $("#diag7").modal('show')
                    }, 300)
                    $('#name4').submit(function (n) {
                        n.preventDefault()
                        $('#enviar5').attr('data-dismiss', 'modal')
                        setTimeout(function () { $('#enviar5').trigger('click') }, 200)
                    })

                    $('#noName4').submit(function (o) {
                        o.preventDefault()
                        $('#cancelar5').attr('data-dismiss', 'modal')
                        setTimeout(function () { $('#cancelar5').trigger('click') }, 200)

                        setTimeout(function () {
                            $("#diag8").modal({ backdrop: 'static', keyboard: false })
                            $("#diag8").modal('show')
                        }, 300)
                        $('#name5').submit(function (m) {
                            m.preventDefault()
                            nome = $('#nome3').val()
                            console.log(nome)
                            sessionStorage.setItem('nome', nome)
                            $('#enviar6').attr('data-dismiss', 'modal')
                            setTimeout(function () { $('#enviar6').trigger('click') }, 200)

                            setTimeout(function () {
                                $("#diag9").modal({ backdrop: 'static', keyboard: false })
                                $("#diag9").modal('show')
                            }, 300)
                            $('#name6').submit(function (k) {
                                k.preventDefault()
                                $('#enviar7').attr('data-dismiss', 'modal')
                                setTimeout(function () { $('#enviar7').trigger('click') }, 200)
                            })
                        })
                    })
                }
            })

            $('#noName').submit(function (f) {
                f.preventDefault()
                nome = $('#nome').val('undefined')
                $('#enviar1').trigger('click')
                $('#name').submit(function (g) {
                    g.preventDefault()
                    console.log(nome)
                    sessionStorage.setItem('nome', nome)
                    $('#enviar1').attr('data-dismiss', 'modal')
                    setTimeout(function () {
                        $('#cancelar3').trigger('click')
                        $('#enviar1').trigger('click')
                    }, 300)
                })
            })


            $('#noName').submit(function (h) {
                h.preventDefault()

                if (nome === 'undefined' || undefined) {
                    setTimeout(function () {
                        $("#diag4").modal({ backdrop: 'static', keyboard: false })
                        $("#diag4").modal('show')
                    }, 10)
                    $('#noName2').submit(function (i) {
                        i.preventDefault()
                        nome = 'Recrutador(a)'
                        console.log(nome)
                        sessionStorage.setItem('nome', nome)
                        $('#enviar2').attr('data-dismiss', 'modal')
                        setTimeout(function () { $('#enviar2').trigger('click') }, 200)

                        setTimeout(function () {
                            $("#diag6").modal({ backdrop: 'static', keyboard: false })
                            $("#diag6").modal('show')
                        }, 300)
                        $('#name3').submit(function (k) {
                            k.preventDefault()
                            $('#enviar4').attr('data-dismiss', 'modal')
                            setTimeout(function () { $('#enviar4').trigger('click') }, 200)
                        })
                    })

                    $('#noName3').submit(function (l) {
                        l.preventDefault()
                        $('#cancelar4').attr('data-dismiss', 'modal')
                        setTimeout(function () { $('#cancelar4').trigger('click') }, 200)

                        setTimeout(function () {
                            $("#diag5").modal({ backdrop: 'static', keyboard: false })
                            $("#diag5").modal('show')
                        }, 300)
                        $('#name2').submit(function (m) {
                            m.preventDefault()
                            nome = $('#nome2').val()
                            console.log(nome)
                            sessionStorage.setItem('nome', nome)
                            $('#enviar3').attr('data-dismiss', 'modal')
                            setTimeout(function () { $('#enviar3').trigger('click') }, 200)

                            $('#nome_digitado').html(nome)

                            setTimeout(function () {
                                $("#diag7").modal({ backdrop: 'static', keyboard: false })
                                $("#diag7").modal('show')
                            }, 300)
                            $('#name4').submit(function (n) {
                                n.preventDefault()
                                $('#enviar5').attr('data-dismiss', 'modal')
                                setTimeout(function () { $('#enviar5').trigger('click') }, 200)
                            })

                            $('#noName4').submit(function (o) {
                                o.preventDefault()
                                $('#cancelar5').attr('data-dismiss', 'modal')
                                setTimeout(function () { $('#cancelar5').trigger('click') }, 200)

                                setTimeout(function () {
                                    $("#diag8").modal({ backdrop: 'static', keyboard: false })
                                    $("#diag8").modal('show')
                                }, 300)
                                $('#name5').submit(function (m) {
                                    m.preventDefault()
                                    nome = $('#nome3').val()
                                    console.log(nome)
                                    sessionStorage.setItem('nome', nome)
                                    $('#enviar6').attr('data-dismiss', 'modal')
                                    setTimeout(function () { $('#enviar6').trigger('click') }, 200)

                                    setTimeout(function () {
                                        $("#diag9").modal({ backdrop: 'static', keyboard: false })
                                        $("#diag9").modal('show')
                                    }, 300)
                                    $('#name6').submit(function (k) {
                                        k.preventDefault()
                                        $('#enviar7').attr('data-dismiss', 'modal')
                                        setTimeout(function () { $('#enviar7').trigger('click') }, 200)
                                    })
                                })
                            })

                        })

                    })
                }

            })

        } else if (nome != 'fim') {
            nome = sessionStorage.getItem('nome')
            window.open('index2.html', '_self')
        }
    } 
})