	// Mensagem de Boas Vindas
	alert('                                                  Olá!!!\n Que bom que você se interessou pelo meu Currículo Online!\n                                        Seja Bem-vindo!!')

	// Mensagem de Navegador
	alert("Este site não funciona bem no navegador Safari da Apple. Se você está usando outro navegador, ótimo! Siga sem problemas.\nSe você está usando o Safari, troque de navegador ou realize o procedimento abaixo antes de fechar esse pop-up:\n\n\nNos menus, clique em SAFARI > PREFERENCIAS > AVANÇADO > Habilite 'Mostra menu Desenvolvedor na barra de menus'.\n\nDepois clique em DESENVOLVEDOR na barra de menus e Habilite 'Desativar restições de Arquivos Locais', para que voê tenha uma boa experiência.")

	// Atribui nome do recrutador
	var nomePrincipal = prompt("Para que sua experiência seja incrível, digite seu nome abaixo e clique OK.\n\n Se preferir seguir sem identificação, clique em CANCELAR.")

	// Variável se a pessoa clicou em OK sem digitar nenhum caracter
	var vazio = nomePrincipal === ""


	// Lógica 0 - Retorna para digitação do nome
	if (vazio) {
		alert('                                              Ooops!\n\n Você clicou em OK sem digitar. Digite seu nome ou clique CANCELAR')
		var nomePrincipal = prompt("Para que sua experiência seja incrível, digite seu nome abaixo e clique OK.\n\n Se preferir seguir sem identificação, clique em CANCELAR.")
	}


	// Variável se a pessoa não quer se identificar (se for pressionado o botão cancelar do prompt)
	var error = nomePrincipal == null


	// Lógica 1 - Opção para seguir sem identificação ou voltar e se identificar
	if(error) {
		var resultado = confirm("Você optou por não digitar seu nome.\n\n Tem certeza que deseja continuar sem se identificar?\n\n Se sim, clique OK para seguir.\n Se não, clique CANCELAR para digitar seu nome.")


	// Lógica 2 - Confirmação do nome
	} else if (confirm("Você digitou: " + nomePrincipal + ".\n\n Seu nome está correto?\n\n Se sim, clique OK para seguir.\n Se não, clique CANCELAR para digitar novamente.")) {
				nomePrincipal = nomePrincipal


		//Lógica 3 - Correção do nome, se necessário
			} else {
				var correcao = nomePrincipal = prompt("Digite seu nome novamente:")
				}
				if (correcao === "") {
					alert('                                              Ooops!\n\n Você clicou em OK sem digitar. Digite seu nome ou clique CANCELAR')
					var correcao = nomePrincipal = prompt("Digite seu nome novamente:")
				}
				if (correcao) {
					alert("Seu nome foi corrigido com sucesso. :) ")
				} 


	// Lógica 4 - Mensagem e identificação default para o caso de não identificação
	function exibirNome (callbackDefault) {
		if (resultado) {
			callbackDefault("Que Pena! :( Então te chamarei apenas de Recrutador(a), OK?", "Recrutador(a)")
		} 
	}

	var callbackDefault = function (entrada, nomeDefault) {
		alert(entrada)
		nomePrincipal = nomeDefault
	}

	exibirNome(callbackDefault)


	// Lógica 5 - Última chance para a identificação
	var nula = resultado == false

	if (nula) {
		var novoNome = prompt("Digite seu nome:")
			nomePrincipal = novoNome
		} 
		if (novoNome === "") {
			alert('                                              Ooops!\n\n Você clicou em OK sem digitar. Digite seu nome ou clique CANCELAR')
			var novoNome = prompt("Digite seu nome:")
			nomePrincipal = novoNome
		}

	if (nomePrincipal == null) {
		nomePrincipal = "Recrutador(a)"
		alert("Que Pena! :( Então te chamarei apenas de Recrutador(a), OK?", "Recrutador(a)")
	}



	// Lógica 6 - Dia index
	var data =  new Date()



	// Lógica 7 - Armazena o nome do usuário no DB local do navegador
	function gravar(nome) {
		localStorage.setItem('nome', nome)
	}

	function salvarNome() {
		var nome = nomePrincipal

		gravar(nome)
	}

	salvarNome()