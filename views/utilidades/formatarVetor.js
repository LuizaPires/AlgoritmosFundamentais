const textoParaVetor = (arr) => {
    return arr.replace(/\s/g, '')
        .split(",")
        .filter(Boolean)
        .map(element => +element);
};

const validarVetorNumerico = (arr) => {
    return Array.isArray(arr) && 
        arr.length && 
        arr.every(function (element) { return typeof element === 'number'}) && 
        !arr.includes(NaN);
};

module.exports = {
    textoParaVetor,
    validarVetorNumerico
}