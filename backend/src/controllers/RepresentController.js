const Represent = require('../models/Represent');
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const emailRegex = /\S+@\S+\.\S+/

const sendErrorsFromDB = (res, dbErrors) => {
  const errors = []
  _.forIn(dbErrors.errors, error => errors.push(error.message))
  return res.status(400).json({errors})
}

module.exports ={
    async store (request, response) {
        const {nome, email, cpf, cnpj, telefone, login, senha, confirmSenha} = request.body;

        if(!email.match(emailRegex)) {
            return response.json('O e-mail informa está inválido')
            }
            console.log(senha)
            console.log(confirmSenha)
            
        if(senha !== confirmSenha) {
            return response.json('Senhas não conferem.')
            }

        const passwordHash = await bcrypt.hash(senha, 10);
        let represent = await Represent.findOne({login}) 
        if(represent){
            return response.json('Já existe Usuario cadastrado com o mesmo login!');
        } else{
            represent = await Represent.create({
            
            nome,
            email,
            cpf,
            cnpj,
            telefone,
            login, 
            senha: passwordHash,
        
        })}
    
        return response.json(represent);
    
    }  

};
