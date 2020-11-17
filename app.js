var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var app = express();

var { paginaIndex } = require('./paginas');


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


app.get('/', paginaIndex);


var port = 3001;

app.listen(port, function () {
    console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});