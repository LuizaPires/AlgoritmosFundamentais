function somatorio(num1, num2, num3) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    soma = (num1 + num2 + num3);
    return soma;
}

module.exports = {
    somatorio
};