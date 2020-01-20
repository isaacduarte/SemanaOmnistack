const mongoose = require('mongoose');

const RepresentSchema =  new mongoose.Schema({
    
    nome: String,
    email: String,
    cpf: String,
    cnpj: String,
    telefone: String,
    login: String,
    senha: String
});

    module.exports = mongoose.model('represent', RepresentSchema);
    