const {
    contagem,
	fibonacci,
	mdc,
	ordenada,
	somatorio,
	primos
} = require("../funcoes")

//#region
// Testes - Contagem
test('Contagem de 10 é igual a 10', () => {
    const entrada = 10
    const esperado = 10
    const atual = contagem(entrada)

    expect(atual).toBe(esperado)
})

test('Contagem com entrada em texto', () => {
    const entrada = '5'
    const esperado = 5
    const atual = contagem(entrada)

    expect(atual).toBe(esperado)
})
//#endregion

//#region
// Testes - Primo
test('Números primos - 17 é primo', () => {
    const entrada = 17
    const esperado = '17 é um número primo.'
    const atual = primos(entrada)

    expect(atual).toBe(esperado)
})

test('Números primos - 20 não é primo', () => {
    const entrada = 20
    const esperado = '20 não é um número primo.'
    const atual = primos(entrada)

    expect(atual).toBe(esperado)
})
//#endregion

//#region
// Testes - Ordenada
test('Ordenar o vetor com float', () => {
    const entrada = [5.3, 3.7, -1.5]
    const esperado = [-1.5, 3.7, 5.3]
    const atual = ordenada(entrada)

    expect(atual).toStrictEqual(esperado)
})

test('Ordenar o vetor inteiros', () => {
    const entrada = [5, 3, -1]
    const esperado = [-1, 3, 5]
    const atual = ordenada(entrada)

    expect(atual).toStrictEqual(esperado)
})
//#endregion

//#region 
// Teste - Somatório
test('Somatorio números inteiros e positivos - 10, 89, 2, 103 e 44 é 248', () => {
    const entrada = [10,89,2,103,44]
    const esperado = 248
    const atual = somatorio(entrada)

    expect(atual).toBe(esperado)
})

test('Somatorio números inteiros e negativos - -1, -9, -25, -13 e -31 é -79', () => {
    const entrada = [-1,-9,-25,-13,-31]
    const esperado = -79
    const atual = somatorio(entrada)

    expect(atual).toBe(esperado)
})

test('Somatorio números decimais e positivos - 10.5, 2.8, 1007.2, 5.1 e 204.5 é 1230.1', () => {
    const entrada = [10.5,2.8,1007.2,5.1,204.5]
    const esperado = 1230.1
    const atual = somatorio(entrada)

    expect(atual).toBe(esperado)
})

test('somatorio números decimais e negativos - -1.5, -28.2, -17.2, -12.7 e -20.5 é -80.1', () => {
    const entrada = [-1.5,-28.2,-17.2,-12.7,-20.5]
    const esperado = -80.1
    const atual = somatorio(entrada)
    
    expect(atual).toBe(esperado)
})
//#endregion

//#region 
// Testes - MDC
test('Máximo divisor comum de 8 e 4 é 4', () => {
    const entrada = [8, 4]
    const esperado = 4
    const atual = mdc(entarda[0], entrada[1])
    
    expect(atual).toBe(esperado)
})

test('Máximo divisor comum de -8 e -4 é -4', () => {
    const entrada = [8, -4]
    const esperado = 4
    const atual = mdc(entarda[0], entrada[1])
    
    expect(atual).toBe(esperado)
})
//#endregion

//#region 
// Testes - Fibonacci
test('fibonacci de 10', () => {
    const entrada = 10
    const esperado = 34
    const atual = fibonacci(10)

    expect(atual).toBe(esperado)
})

test('fibonacci de 10.5', () => {
    const entrada = 10
    const esperado = "Por favor, insira um Número Inteiro"
    const atual = fibonacci(10)

    expect(atual).toBe(esperado)
})
//#endregion