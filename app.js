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
    var numi = parseFloat(body.numi);
    var numf = parseFloat(body.numf);
    var contagem_resultado = contagem(numi, numf);
    res.render('contagem_resultado', {
        subtitulo: 'Exercício de Contagem',
        operacao: 'contagem',
        numi: numi,
        numf: numf,
        contagem_resultado: contagem_resultado,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    });
});

app.post('/fibonacci', function (req, res) {
    var body = req.body;
    var posicao = parseFloat(body.posicao);
    var fibonacci_resultado = fibonacci(posicao);
    res.render('fibonacci_resultado', {
        subtitulo: 'Exercício de Fibonacci',
        operacao: 'fibonacci',
        posicao: posicao,
        fibonacci_resultado: fibonacci_resultado,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    });
});

app.post('/mdc', function (req, res) {
    var body = req.body;
    var num1 = parseFloat(body.num1);
    var num2 = parseFloat(body.num2);
    var mdc_resultado = mdc(num1, num2);
    res.render('mdc_resultado', {
        subtitulo: 'Exercício de MDC',
        operacao: 'mdc',
        num1: num1,
        num2: num2,
        mdc_resultado: mdc_resultado,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    });
});

app.post('/ordenada', function (req, res) {
    var body = req.body;
    var vetorEntrada = body.vetorEntrada;
    var ordenada_resultado;

    vetorEntrada = formatarVetor.textoParaVetor(vetorEntrada);

    if (formatarVetor.validarVetorNumerico(vetorEntrada)) {
        ordenada_resultado = ordenada(vetorEntrada);
    }
    else {
        ordenada_resultado = false;
    }


    res.render('ordenada_resultado', {
        subtitulo: 'Exercício de Ordenação',
        operacao: 'ordenada',
        vetorEntrada: vetorEntrada,
        resultado: ordenada_resultado,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    });
});

app.post('/primos', function (req, res) {
    var body = req.body;
    var num = parseFloat(body.num);
    var primos_resultado = primos(num);
    res.render('primos_resultado', {
        subtitulo: 'Exercício de Números Primos',
        operacao: 'primos',
        num: num,
        primos_resultado: primos_resultado,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    });
});

app.post('/somatorio', function (req, res) {
    var body = req.body;
    var somatorio_resultado;
    var vetorEntrada = body.vetorEntrada;
    vetorEntrada = formatarVetor.textoParaVetor(vetorEntrada);

    if (formatarVetor.validarVetorNumerico(vetorEntrada)) {
        somatorio_resultado = somatorio(vetorEntrada);
    }
    else {
        somatorio_resultado = false;
    }

    res.render('somatorio_resultado', {
        subtitulo: 'Exercício de Somatório',
        operacao: 'somatorio',
        vetorEntrada: vetorEntrada,
        resultado: somatorio_resultado,
        titulo: titulo,
        botoes: botoes,
        equipe: equipe
    });
});

var port = 3001;

app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});