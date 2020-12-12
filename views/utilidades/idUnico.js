const crypto = require('crypto') 

const gerarIdUnico = () => {
    return crypto.randomBytes(16).toString('hex') 
}

module.exports = {
    gerarIdUnico
}