const jwt = require('jsonwebtoken')

module.exports={
    async store (request, response) {
    const token = request.body.token || ''
    jwt.verify(token, env.authSecret, function(err) {
    return response.status(200).send({valid: !err})
    })
  }
}