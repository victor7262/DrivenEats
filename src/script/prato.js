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
