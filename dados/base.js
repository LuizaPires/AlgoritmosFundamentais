const firebase = require("firebase");
const { gerarIdUnico } = require("../views/utilidades/idUnico")

const firebaseConfig = {
    apiKey: "AIzaSyAiiTBALRY6YAx3_XNo3wPgEuiWEi5pYVI",
    authDomain: "site-nuvem.firebaseapp.com",
    projectId: "site-nuvem",
    storageBucket: "site-nuvem.appspot.com",
    messagingSenderId: "628955131477",
    appId: "1:628955131477:web:6d8de2c6453b56a7e22edc"
};

firebase.initializeApp(firebaseConfig) 

const db = firebase.firestore() 

const salvarOperacao = (nomeOperacao, input, resultado) => {

    let referenciaBase = db.collection('Operações').doc(gerarIdUnico()) 
    let dados = {
        "operacao": nomeOperacao,
        "input": input,
        "resultado": resultado,
        "Data": new Date()
    }
    referenciaBase.set(dados) 
}

module.exports = {
    salvarOperacao
}