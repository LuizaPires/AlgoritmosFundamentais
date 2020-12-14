const func = require('./funcoes')

test('Menor divisor comum de 8 e 4 é 4', () => {
    const mdc = func.mdc(8, 4);
    expect(mdc).toBe(4);
});

test('Menor divisor comum de -8 e -4 é -4', () => {
    const mdc = func.mdc(8, -4);
    expect(mdc).toBe(-4);
});