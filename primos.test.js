const func = require('./funcoes')

test('números primos - 17 é primo', () => {
    const primos = func.primos(17);
    expect(primos).toBe('17 é um número primo.');
});

test('números primos - 20 não é primo', () => {
    const primos = func.primos(20);
    expect(primos).toBe('20 não é um número primo.');
});