function contagem(numi, numf) {
    numi = parseInt(1);
    numf = parseInt(numf);
    var contador = 0;

    for (var i = numi; i <= numf; i++) {
        contador++;
    }
    return contador;
}


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


function mdc(num1, num2) {
    var resto;
    do {
        resto = num1 % num2;
        num1 = num2;
        num2 = resto;
    } while (resto != 0);
    return num1;
}


function ordenada(inputArray) {
	array = inputArray.slice();
	if (array.length < 2) {
		return array;
	}

	var pivot = array[0];
	var lesserArray = [];
	var greaterArray = [];

	for (var i = 1; i < array.length; i++) {
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
	var soma = 0;
	vetor.forEach(elemento =>{
		soma += elemento;
	});
    return soma;
}


function primos(num) {
	var contDiv = 0;// contador de divisores exatos
	for (var i = 1; i <= num; i++) {
		if (num % i == 0) {
			contDiv++;
		}
	}

	if (contDiv == 2) {
		return (`${num} é um número primo.`);
	} else {
		return (`${num} não é um número primo.`);
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

