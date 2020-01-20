const Represent = require('../models/Represent');

module.exports ={
    async store (request, response) {
        const {nome, email, cpf, cnpj, telefone, login, senha} = request.body;
        console.log(request.body);
    
        const represent = await Represent.create({
            
            nome,
            email,
            cpf,
            cnpj,
            telefone,
            login, 
            senha,
        
        })
    
        return response.json(represent);
    
    }  

};