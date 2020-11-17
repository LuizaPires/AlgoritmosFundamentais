var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var app = express();

var { contagem } = require('./funcoes')
var { paginaIndex,
    paginaContagem } = require('./paginas')


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
    .get('/contagem', paginaContagem);


app.post('/contagem', function (req, res) {
    var body = req.body;
    var numi = parseFloat(body.numi);
    var numf = parseFloat(body.numf);
    var contagem_resultado = contagem(numi, numf);
    res.render('contagem_resultado', {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: 'Exercício de Contagem',
        operacao: 'contagem',
        numi: numi,
        numf: numf,
        contagem_resultado: contagem_resultado
    });
});

var port = 3001;

app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});