const func = require('./funcoes')

//-----------contagem------------//
test('contagem de 10 é igual a 10', () => {
    const contagem = func.contagem(1,10);
    expect(contagem).toBe(10);
});

test('contagem valores texto', () => {
    const contagem = func.contagem('1','5');
    expect(contagem).toBe(5);
});

//-----------fibonacci------------//
test('fibonacci de 10 é igual a 34', () => {
    const fibonacci = func.fibonacci(10);
    expect(fibonacci).toBe(34);
});

test('fibonacci de 10.5 igual Por favor, insira um Número Inteiro', () => {
    const fibonacci = func.fibonacci(10.5);
    expect(fibonacci).toBe("Por favor, insira um Número Inteiro");
});