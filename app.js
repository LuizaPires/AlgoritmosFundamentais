var express = require('express'); //importar o express
var bodyParser = require('body-parser'); //importar o body-parser
var path = require('path'); //importar lib path (nativa do node.js)
var cont = require('./contagem'); //importar modulo (contagem.js)
var fib = require('./fibonacci'); //importar modulo (fibonacci.js)
var max = require('./mdc'); //importar modulo (mdc.js)
var ord = require('./ordenada'); //importar módulo (ordenada.js)
var prim = require('./primos'); //importar modulo (primos.js)
var somat = require('./somatorio'); //importar modulo (somatorio.js)


const { get } = require('https');
const { networkInterfaces } = require('os');

var app = express(); // criar um app do express

//configura os dados oriundos da requisição http
app.use(bodyParser.urlencoded({ extended: true }));
//configura o caminho para arquivos estáticos (img, css, html, js...) 
app.use(express.static('public')); //http://<host>:<port>/imagens/foto.jpg
app.use(express.static('public/css'));
app.use(express.static('public/img'));

app.set('view engine', 'ejs'); //setar o motor de vieww que será usado
app.set('views', path.join(__dirname, '/views')); //caminho da pasta views

app.get('/', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        //data: Date.now(),
    };
    res.render('index', parametro);
});

app.get('/contagem', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        //data: Date.now(),
    };
    res.render('contagem', parametro);
});

app.get('/fibonacci', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        //data: Date.now(),
    };
    res.render('fibonacci', parametro);
});

app.get('/mdc', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        //data: Date.now(),
    };
    res.render('mdc', parametro);
});

app.get('/ordenada', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        //data: Date.now(),
    };
    res.render('ordenada', parametro);
});

app.get('/primos', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        //data: Date.now(),
    };
    res.render('primos', parametro);
});

app.get('/somatorio', function (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        //data: Date.now(),
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
    var n = parseFloat(body.n);
    var fibonacci_resultado = fib.fibonacci(n);
    res.render('fibonacci_resultado', {
        operacao: 'fibonacci',
        n: n,

        fibonacci_resultado: fibonacci_resultado
    });
});

app.post('/mdc', function (req, res) {
    var body = req.body;
    var n1 = parseFloat(body.n1);
    var n2 = parseFloat(body.n2);
    var mdc_resultado = max.mdc(n1, n2);
    res.render('mdc_resultado', {
        operacao: 'mdc',
        n1: n1,
        n2: n2,
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
    var n = parseFloat(body.n);
    var primos_resultado = prim.primos(n);
    res.render('primos_resultado', {
        operacao: 'primos',
        n: n,
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

// iniciando o processo do servidor
app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});