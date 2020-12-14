const func = require('../funcoes')

test('contagem de 10 é igual a 10', () => {
    const contagem = func.contagem(10);
    expect(contagem).toBe(10);
});

test('contagem valores texto', () => {
    const contagem = func.contagem('5');
    expect(contagem).toBe(5);
});
