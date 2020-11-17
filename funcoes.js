function contagem(numi, numf) {
    numi = parseInt(1);
    numf = parseInt(numf);
    var contador = 0;

    for (var i = numi; i <= numf; i++) {
        contador++;
    }
    return contador;
}

module.exports = {
	contagem	
}