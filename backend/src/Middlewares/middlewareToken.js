const jwt = require('jsonwebtoken')
const env = require('../.env')
module.exports = (request, response, next) => {

  const token = request.body.token || request.query.token ||
request.headers['authorization']
  if(!token) {
  return response.status(403).send({errors: ['No token provided.']})
  }
  jwt.verify(token, env.authSecret, function(err, decoded) {
  if(err) {
  return resquest.status(403).send({
  errors: ['Failed to authenticate token.']
  })
  } else {
  request.decoded = decoded
  next()
  }
  })
  
}