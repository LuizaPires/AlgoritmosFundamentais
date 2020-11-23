const {botoes, equipe, titulo} = require('./views/utilidades/dados')


function paginaIndex(req, res) {
    const parametro = {
        subtitulo: '',
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    };
    res.render('index', parametro);
}


function paginaContagem(req, res) {
    const parametro = {
        titulo: titulo,
        botoes: botoes,
        equipe: equipe,
        subtitulo: 'Exercício de Contagem',
    };
    res.render('contagem', parametro);
}

function paginaFibonacci(req, res) {
    const parametro = {
        titulo: titulo,
        botoes: botoes,
        equipe: equipe,
        subtitulo: 'Exercício de Fibonacci',
    };
    res.render('fibonacci', parametro);
}

function paginaMdc(req, res) {
    const parametro = {
        titulo: titulo,
        botoes: botoes,
        equipe: equipe,
        subtitulo: 'Exercício de MDC',
    };
    res.render('mdc', parametro);
}

function paginaOrdenada(req, res) {
    const parametro = {
        titulo: titulo,
        botoes: botoes,
        equipe: equipe,
        subtitulo: 'Exercício de Ordenação',
    };
    res.render('ordenada', parametro);
}

function paginaPrimos(req, res) {
    const parametro = {
        titulo: titulo,
        botoes: botoes,
        equipe: equipe,
        subtitulo: 'Exercício de Números Primos',
    };
    res.render('primos', parametro);
}

function paginaSomatorio(req, res) {
    const parametro = {
        titulo: titulo,
        botoes: botoes,
        equipe: equipe,
        subtitulo: 'Exercício de Somatório',
    };
    res.render('somatorio', parametro);
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
