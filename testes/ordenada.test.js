const func = require('./funcoes')

test('Ordenar o vetor com float', () => {
    const ordenada = func.ordenada([5.3, 3.7, -1.5]);
    expect(ordenada).toStrictEqual([-1.5, 3.7, 5.3]);
});

test('Ordenar o vetor inteiros', () => {
    const ordenada = func.ordenada([5, 3, -1]);
    expect(ordenada).toStrictEqual([-1, 3, 5]);
});