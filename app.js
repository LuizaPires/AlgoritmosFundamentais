const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const formatarVetor = require('./views/utilidades/formatarVetor')
const {
    contagem,
    fibonacci,
    mdc,
    ordenada,
    somatorio,
    primos
} = require('./funcoes')
const {
    paginaIndex,
    paginaContagem,
    paginaFibonacci,
    paginaMdc,
    paginaOrdenada,
    paginaPrimos,
    paginaSomatorio
} = require('./paginas')
const {
    botoes,
    equipe,
    titulo
} = require('./views/utilidades/dados')


//configura os dados oriundos da requisição http
app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(expressLayouts)
    .use(express.static('public'))
    .use(express.static('public/css'))
    .use(express.static('public/img'));

app
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, '/views'));

app
    .get('/', paginaIndex)
    .get('/contagem', paginaContagem)
    .get('/fibonacci', paginaFibonacci)
    .get('/mdc', paginaMdc)
    .get('/ordenada', paginaOrdenada)
    .get('/primos', paginaPrimos)
    .get('/somatorio', paginaSomatorio);


app.post('/contagem', function (req, res) {
    var body = req.body;
    var numeroFinal = parseInt(body.numeroFinal);
    var contagemResultado = contagem(numeroFinal);
    res.render('contagemResultado', {
        subtitulo: 'Exercício de Contagem',
        operacao: 'contagem',
        numeroFinal: numeroFinal,
        contagemResultado: contagemResultado,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    });
});

app.post('/fibonacci', function (req, res) {
    var body = req.body;
    var posicao = parseFloat(body.posicao);
    var fibonacciResultado = fibonacci(posicao);
    res.render('fibonacciResultado', {
        subtitulo: 'Exercício de Fibonacci',
        operacao: 'fibonacci',
        posicao: posicao,
        fibonacciResultado: fibonacciResultado,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    });
});

app.post('/mdc', function (req, res) {
    var body = req.body;
    var primeiroNumero = parseInt(body.primeiroNumero);
    var segundoNumero = parseInt(body.segundoNumero);
    var mdcResultado = mdc(primeiroNumero, segundoNumero);
    res.render('mdcResultado', {
        subtitulo: 'Exercício de MDC',
        operacao: 'mdc',
        primeiroNumero: primeiroNumero,
        segundoNumero: segundoNumero,
        mdcResultado: mdcResultado,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    });
});

app.post('/ordenada', function (req, res) {
    var body = req.body;
    var vetorEntrada = body.vetorEntrada;
    var ordenadaResultado;

    vetorEntrada = formatarVetor.textoParaVetor(vetorEntrada);

    if (formatarVetor.validarVetorNumerico(vetorEntrada)) {
        ordenadaResultado = ordenada(vetorEntrada);
    }
    else {
        ordenadaResultado = false;
    }


    res.render('ordenadaResultado', {
        subtitulo: 'Exercício de Ordenação',
        operacao: 'ordenada',
        vetorEntrada: vetorEntrada,
        ordenadaResultado: ordenadaResultado,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    });
});

app.post('/primos', function (req, res) {
    var body = req.body;
    var numero = parseInt(body.numero);
    var primosResultado = primos(numero);
    res.render('primosResultado', {
        subtitulo: 'Exercício de Números Primos',
        operacao: 'primos',
        numero: numero,
        primosResultado: primosResultado,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    });
});

app.post('/somatorio', function (req, res) {
    var body = req.body;
    var somatorioResultado;
    var vetorEntrada = body.vetorEntrada;
    vetorEntrada = formatarVetor.textoParaVetor(vetorEntrada);

    if (formatarVetor.validarVetorNumerico(vetorEntrada)) {
        somatorioResultado = somatorio(vetorEntrada);
    }
    else {
        somatorioResultado = false;
    }

    res.render('somatorioResultado', {
        subtitulo: 'Exercício de Somatório',
        operacao: 'somatorio',
        vetorEntrada: vetorEntrada,
        somatorioResultado: somatorioResultado,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    });
});

var port = 3001;

app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});