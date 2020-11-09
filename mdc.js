function mdc(n1, n2) {
    var resto;
    do {
        resto = n1 % n2;
        n1 = n2;
        n2 = resto;
    } while (resto != 0);
    return n1;
}

module.exports = {
    mdc
};