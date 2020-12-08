const {botoes, equipe, titulo} = require('./views/utilidades/dados')
const dados = (subtitulo) => {
    return {
        subtitulo: subtitulo,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    }
}

function paginaIndex(req, res) {
    res.render('index', dados(''));
}

function paginaContagem(req, res) {
    res.render('contagem', dados('Exercício de Contagem'));
}

function paginaFibonacci(req, res) {
    res.render('fibonacci', dados('Exercício de Fibonacci'));
}

function paginaMdc(req, res) {
    res.render('mdc', dados('Exercício de MDC'));
}

function paginaOrdenada(req, res) {
    res.render('ordenada', dados('Exercício de Ordenação'));
}

function paginaPrimos(req, res) {
    res.render('primos', dados('Exercício de Números Primos'));
}

function paginaSomatorio(req, res) {
    res.render('somatorio', dados('Exercício de Somatório'));
}

module.exports = {
    paginaIndex,
    paginaContagem,
    paginaFibonacci,
    paginaMdc,
    paginaOrdenada,
    paginaPrimos,
    paginaSomatorio,
}
