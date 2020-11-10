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
	primos
};