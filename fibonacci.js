function fibonacci(posicao) {
	var termo1 = 0, termo2 = 1, posicaotermo;
	if (posicao <= 0) {
		posicaotermo = "Por favor, insira um número acima de zero";
	}
	if (posicao == 1) {
		posicaotermo = '0';
	}
	if (posicao == 2) {
		posicaotermo = '1';
	}
	for (var i = 2; i < posicao; i++) {
		posicaotermo = termo1 + termo2;
		termo1 = termo2;
		termo2 = posicaotermo;
	}
	return posicaotermo;
}

module.exports = {
	fibonacci
};