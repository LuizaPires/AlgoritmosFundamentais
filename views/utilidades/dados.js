const botoes = [
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
]

const equipe = [
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
        src: "https://media-exp1.licdn.com/dms/image/C4D03AQGHN1hmGlJFpg/profile-displayphoto-shrink_400_400/0?e=1611792000&v=beta&t=rhI56k2NDiFn8bCTmBEJUs5EZQGYts2sX2KKWGONnUI",
        nome: "Camila Alves"
    },
    {
        href: "https://www.linkedin.com/in/guilherme-federico/",
        src: "https://media-exp1.licdn.com/dms/image/C5603AQHcuQiBxNvtLw/profile-displayphoto-shrink_200_200/0/1534937834868?e=1611792000&v=beta&t=YRkAQWbD4Nr7jmXjq5dVuV5RNP-zSFf45HnNZZHRmDk",
        nome: "Guilherme Federico"
    }
]

const titulo = "/*----- Site de Algoritmos Fundamentais -----*/";


module.exports = {
    botoes,
    equipe,
    titulo
}