function contagem(numeroFinal) {
    numeroFinal = parseInt(numeroFinal);
    let contador = 0;

    for (let i = 1; i <= numeroFinal; i++) {
        contador++;
    }
    return contador;
}


function fibonacci(posicao) {
	if (Number.isInteger(posicao) == true){
		let primeiroTermo = 0, segundoTermo = 1, posicaoTermo;
		if (posicao <= 0) {
			posicaoTermo = "Por favor, insira um número acima de zero";
		}
		if (posicao == 1) {
			posicaoTermo = '0';
		}
		if (posicao == 2) {
			posicaoTermo = '1';
		}
		for (let i = 2; i < posicao; i++) {
			posicaoTermo = primeiroTermo + segundoTermo;
			primeiroTermo = segundoTermo;
			segundoTermo = posicaoTermo;
		}
		return posicaoTermo;
	}
	return "Por favor, insira um Número Inteiro";
}


const calcularMdc = (primeiroNumero, segundoNumero) => {
    if (!segundoNumero) {
        return primeiroNumero;
    }
    return calcularMdc(segundoNumero, primeiroNumero % segundoNumero);
};

const mdc = (primeiroNumero, segundoNumero) => {

    if (primeiroNumero < 0) {
        primeiroNumero = -primeiroNumero;
    }

    if (segundoNumero < 0) {
        segundoNumero = -segundoNumero;
    }

    return calcularMdc(primeiroNumero, segundoNumero);
};



function ordenada(inputArray) {
	array = inputArray.slice();
	if (array.length < 2) {
		return array;
	}

	let pivot = array[0];
	let lesserArray = [];
	let greaterArray = [];

	for (let i = 1; i < array.length; i++) {
		if (array[i] > pivot) {
			greaterArray.push(array[i]);
		} else {
			lesserArray.push(array[i]);
		}
	}

	return ordenada(lesserArray).concat(pivot, ordenada(greaterArray));
}



function somatorio(vetorEntrada) {
	vetor = vetorEntrada.slice();
	let soma = 0;
	vetor.forEach(elemento =>{
		soma += elemento;
	});
    return soma;
}


function primos(numero) {
	let contador = 0;// contador de divisores exatos
	for (let i = 1; i <= numero; i++) {
		if (numero % i == 0) {
			contador++;
		}
	}

	if (contador == 2) {
		return (`${numero} é um número primo.`);
	} else {
		return (`${numero} não é um número primo.`);
	}
}


module.exports = {
	contagem,
	fibonacci,
	mdc,
	ordenada,
	somatorio,
	primos
}

