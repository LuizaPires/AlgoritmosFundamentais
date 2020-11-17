function paginaIndex(req, res) {
    const parametro = {
        titulo: 'Minha Página Pessoal',
        subtitulo: '',
    };
    res.render('index', parametro);
}

module.exports = {
    paginaIndex
}
