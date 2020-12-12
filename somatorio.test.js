const func = require('./funcoes')

test('somatorio números inteiros e positivos - 10, 89, 2, 103 e 44 é 248', () => {
    const somatorio = func.somatorio([10,89,2,103,44]);
    expect(somatorio).toBe(248);
});

test('somatorio números inteiros e negativos - -1, -9, -25, -13 e -31 é -79', () => {
    const somatorio = func.somatorio([-1,-9,-25,-13,-31]);
    expect(somatorio).toBe(-79);
});

test('somatorio números decimais e positivos - 10.5, 2.8, 1007.2, 5.1 e 204.5 é 1230.1', () => {
    const somatorio = func.somatorio([10.5,2.8,1007.2,5.1,204.5]);
    expect(somatorio).toBe(1230.1);
});

test('somatorio números decimais e negativos - -1.5, -28.2, -17.2, -12.7 e -20.5 é -80.1', () => {
    const somatorio = func.somatorio([-1.5,-28.2,-17.2,-12.7,-20.5]);
    expect(somatorio).toBe(-80.1);
});