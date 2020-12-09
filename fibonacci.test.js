const func = require('./funcoes')

test('fibonacci de 10 é igual a 34', () => {
    const fibonacci = func.fibonacci(10);
    expect(fibonacci).toBe(34);
});

test('fibonacci de 10.5 igual Por favor, insira um Número Inteiro', () => {
    const fibonacci = func.fibonacci(10.5);
    expect(fibonacci).toBe("Por favor, insira um Número Inteiro");
});