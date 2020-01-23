const Represent = require('../models/Represent');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports={
    async store (request, response) { 
    const login = request.body.login || ''
    const senha = request.body.senha || ''
    Represent.findOne({login}, (err, represent) => {
    if(err) {
    return sendErrorsFromDB(response, err)
    } else if (represent && bcrypt.compareSync(senha, represent.senha)) {
    const token = jwt.sign(represent, env.authSecret, {
    expiresIn: "1 day"
    })
    const { nome, email, nivel } = represent
    response.json({ nome, email, nivel, token })
    } else {
    return res.status(400).send({errors: ['Usuário/Senha inválidos']})
    }
    })
  }
}