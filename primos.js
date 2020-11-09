function primos(n) {
	var contDiv = 0;// contador de divisores exatos
	for (var i = 1; i <= n; i++) {
		if (n % i == 0) {
			contDiv++;
		}
	}

	if (contDiv == 2) {
		return (`${n} é um número primo.`);
	} else {
		return (`${n} não é um número primo.`);
	}
}

var n;
for (var i = 1; i < n; i++) {
	var numerosPrimos = primos(i);
}

module.exports = {
	primos
};