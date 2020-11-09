function contagem(numi,numf){
    numi = parseInt(1);
    numf = parseInt(numf);
    var contador = 0;

    for (var i = numi ; i < numf ; i++){
        contador++;
    }
    return contador+1;
}

module.exports = {
    contagem
};

/*
outra forma:
module.export.somar = function(a,b){
    var v1 = parseFloat(a);
    var v2 = parseFloat(b);
    return v1 + v2;
};
*/