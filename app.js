var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cont = require('./contagem');
var fib = require('./fibonacci');
var max = require('./mdc');
var ord = require('./ordenada');
var prim = require('./primos');
var somat = require('./somatorio');


const { get } = require('https');
const { networkInterfaces } = require('os');

var app = express();

//configura os dados oriundos da requisição http
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/img'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
    };
    res.render('index', parametro);
});

app.get('/contagem', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
    };
    res.render('contagem', parametro);
});

app.get('/fibonacci', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
    };
    res.render('fibonacci', parametro);
});

app.get('/mdc', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
    };
    res.render('mdc', parametro);
});

app.get('/ordenada', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
    };
    res.render('ordenada', parametro);
});

app.get('/primos', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
    };
    res.render('primos', parametro);
});

app.get('/somatorio', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
    };
    res.render('somatorio', parametro);
});

app.post('/contagem', function (req, res) {
    var body = req.body;
    var numi = parseFloat(body.numi);
    var numf = parseFloat(body.numf);
    var contagem_resultado = cont.contagem(numi, numf);
    res.render('contagem_resultado', {
        operacao: 'contagem',
        numi: numi,
        numf: numf,
        contagem_resultado: contagem_resultado
    });
});

app.post('/fibonacci', function (req, res) {
    var body = req.body;
    var posicao = parseFloat(body.posicao);
    var fibonacci_resultado = fib.fibonacci(posicao);
    res.render('fibonacci_resultado', {
        operacao: 'fibonacci',
        posicao: posicao,
        fibonacci_resultado: fibonacci_resultado
    });
});

app.post('/mdc', function (req, res) {
    var body = req.body;
    var num1 = parseFloat(body.num1);
    var num2 = parseFloat(body.num2);
    var mdc_resultado = max.mdc(num1, num2);
    res.render('mdc_resultado', {
        operacao: 'mdc',
        num1: num1,
        num2: num2,
        mdc_resultado: mdc_resultado
    });
});

app.post('/ordenada', function (req, res) {
    var body = req.body;
    var s = parseFloat(body.s);
    var t = parseFloat(body.t);
    var u = parseFloat(body.u);
    var v = parseFloat(body.v);
    var x = parseFloat(body.x);
    var z = parseFloat(body.z);
    var ordenada_resultado = ord.ordenada(s, t, u, v, x, z);
    res.render('ordenada_resultado', {
        operacao: 'ordenada',
        s: s,
        t: t,
        u: u,
        v: v,
        x: x,
        z: z,
        ordenada_resultado: ordenada_resultado
    });
});

app.post('/primos', function (req, res) {
    var body = req.body;
    var num = parseFloat(body.num);
    var primos_resultado = prim.primos(num);
    res.render('primos_resultado', {
        operacao: 'primos',
        num: num,
        primos_resultado: primos_resultado
    });
});

app.post('/somatorio', function (req, res) {
    var body = req.body;
    var num1 = parseFloat(body.num1);
    var num2 = parseFloat(body.num2);
    var num3 = parseFloat(body.num3);
    var somatorio_resultado = somat.somatorio(num1, num2, num3);
    res.render('somatorio_resultado', {
        operacao: 'somatorio',
        num1: num1,
        num2: num2,
        num3: num3,
        somatorio_resultado: somatorio_resultado
    });
});

var port = 3001;

app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});