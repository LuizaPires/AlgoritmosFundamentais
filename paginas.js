function paginaIndex(req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: '',
        botoes: [
            {
                class: "home",
                divClass: "homeInt",
                href: "/",
                texto: "HOME"
            },
            {
                class: "contagem",
                divClass: "contagemInt",
                href: "contagem",
                texto: "CONTAGEM"
            },
            {
                class: "fibonacci",
                divClass: "fibonacciInt",
                href: "fibonacci",
                texto: "FIBONACCI"
            },
            {
                class: "maxdivcomum",
                divClass: "maxdivcomumInt",
                href: "mdc",
                texto: "MDC"
            },
            {
                class: "ordenacao",
                divClass: "ordenacaoInt",
                href: "ordenada",
                texto: "ORDENAÇÃO"
            },
            {
                class: "primos",
                divClass: "primosInt",
                href: "primos",
                texto: "NÚM. PRIMOS"
            },
            {
                class: "somatorio",
                divClass: "somatorioInt",
                href: "somatorio",
                texto: "SOMATÓRIO"
            }
        ],
        equipe: [
            {
                href: "https://www.baudalu.net.br",
                src: "img/2020.jpg",
                nome: "Luiza Pires"
            },
            {
                href: "https://www.linkedin.com/in/kevinsantosguedes/",
                src: "img/fotoKevin.png",
                nome: "Kevin Guedes"
            },
            {
                href: "www.linkedin.com/in/sofia-oliveira-383b2117a",
                src: "img/perfil_Sofia (2).JPG",
                nome: "Sofia Oliveira"
            },
            {
                href: "https://www.linkedin.com/in/camisjef/",
                src:"https://media-exp1.licdn.com/dms/image/C4D03AQGHN1hmGlJFpg/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=rhI56k2NDiFn8bCTmBEJUs5EZQGYts2sX2KKWGONnUI",
                nome: "Camila Alves"
            },
            {
                href: "https://www.linkedin.com/in/guilherme-federico/",
                src: "https://media-exp1.licdn.com/dms/image/C5603AQHcuQiBxNvtLw/profile-displayphoto-shrink_200_200/0/1534937834868?e=1611792000&v=beta&t=YRkAQWbD4Nr7jmXjq5dVuV5RNP-zSFf45HnNZZHRmDk",
                nome:"Guilherme Federico"
            }
        ]
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

function paginaFibonacci (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: 'Exercício de Fibonacci',
    };
    res.render('fibonacci', parametro);
}

function paginaMdc (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: 'Exercício de MDC',
    };
    res.render('mdc', parametro);
}

function paginaOrdenada (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: 'Exercício de Ordenação',
    };
    res.render('ordenada', parametro);
}

function paginaPrimos (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
        subtitulo: 'Exercício de Números Primos',
    };
    res.render('primos', parametro);
}

function paginaSomatorio (req, res) {
    const parametro = {
        titulo: '/*----- Site de Algoritmos Fundamentais -----*/',
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
    paginaSomatorio
}
