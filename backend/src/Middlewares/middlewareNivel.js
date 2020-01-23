module.exports = (request, response, next) => {

    const nivel = request.body.nivel || request.query.nivel
    if(!nivel) {
    return response.status(403).send({errors: ['No nivel provided.']})
    }
    if(nivel==2) {
     resquest.status(403).send({
    errors: ['Failed to authenticate nivel.']
    })
    } else {
    request.nivel;
    next()
    }
    }
  