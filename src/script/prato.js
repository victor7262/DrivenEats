let pratoSelecionado = null,
	bebidaSelecionada = null,
	sobremesaSelecionada = null;

function selecionarPrato(element) {
	if (pratoSelecionado == null) {
		pratoSelecionado = element;
		pratoSelecionado.classList.toggle("selecionado");
	} else if (pratoSelecionado == element) {
		pratoSelecionado.classList.toggle("selecionado");
		pratoSelecionado = null;
	} else {
		pratoSelecionado.classList.toggle("selecionado");
		element.classList.toggle("selecionado");
		pratoSelecionado = element;
	}

	atualizaPedido();
}

function selecionarBebida(element) {
	if (bebidaSelecionada == null) {
		bebidaSelecionada = element;
		bebidaSelecionada.classList.toggle("selecionado");
	} else if (bebidaSelecionada == element) {
		bebidaSelecionada.classList.toggle("selecionado");
		bebidaSelecionada = null;
	} else {
		bebidaSelecionada.classList.toggle("selecionado");
		element.classList.toggle("selecionado");
		bebidaSelecionada = element;
	}

	atualizaPedido();
}

function selecionarSobremesa(element) {
	if (sobremesaSelecionada == null) {
		sobremesaSelecionada = element;
		sobremesaSelecionada.classList.toggle("selecionado");
	} else if (sobremesaSelecionada == element) {
		sobremesaSelecionada.classList.toggle("selecionado");
		sobremesaSelecionada = null;
	} else {
		sobremesaSelecionada.classList.toggle("selecionado");
		element.classList.toggle("selecionado");
		sobremesaSelecionada = element;
	}

	atualizaPedido();
}

function atualizaPedido() {
	let itensSelecionados = 0;

	if (pratoSelecionado != null) itensSelecionados++;

	if (bebidaSelecionada != null) itensSelecionados++;

	if (sobremesaSelecionada != null) itensSelecionados++;

	if (itensSelecionados == 3) {
		document.querySelector(".btn-pedido-pendente").style.display = "none";
		document.querySelector(".btn-pedido-pronto").style.display = "flex";
	} else {
		document.querySelector(".btn-pedido-pendente").style.display = "flex";
		document.querySelector(".btn-pedido-pronto").style.display = "none";

		document.querySelector(".btn-pedido-pendente").innerText =
			"Selecione os " +
			(3 - itensSelecionados).toString() +
			" itens para fechar o pedido";
	}
}

function enviarPedido() {
	let url =
		"https://wa.me/5532999999999?text=" + encodeURIComponent(montaMensagem());

	window.open(url, "_blank").focus();
}

function montaMensagem() {
	let nomePrato = pratoSelecionado.querySelector("h1").innerHTML,
		nomeBebida = bebidaSelecionada.querySelector("h1").innerHTML,
		nomeSobremesa = sobremesaSelecionada.querySelector("h1").innerHTML;

	let total =
		getValorDaOpcao(pratoSelecionado) +
		getValorDaOpcao(bebidaSelecionada) +
		getValorDaOpcao(sobremesaSelecionada);

	total = Math.round(total * 100) / 100;

	return `Olá, gostaria de fazer o pedido:
				- Prato: ${nomePrato}
				- Bebida: ${nomeBebida}
				- Sobremesa: ${nomeSobremesa}
			Total: R$ ${total.toFixed(2).replace(".", ",")}`;
}

function getValorDaOpcao(opcao) {
	let valorString = opcao.querySelector("p").innerHTML;
	valorString = valorString.replace("R$ ", "").replace(",", ".");
	return Number(valorString);
}
