function paginaIndex(req, res) {
    const parametro = {
        titulo: 'Minha Página Pessoal',
        subtitulo: '',
    };
    res.render('index', parametro);
}

function paginaContagem(req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: 'Exercício de Contagem',
    };
    res.render('contagem', parametro);
}

module.exports = {
    paginaIndex,
    paginaContagem
}



