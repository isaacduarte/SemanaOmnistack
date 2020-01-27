const {Router} = require('express');
const RepresentController = require('./controllers/RepresentController');
const AutController = require('./controllers/AutController');
const ValidateToken = require('./controllers/validateTokn');
const routes = Router();
// const auth = require('./Middlewares/middlewareToken');
// const nivel = require('./Middlewares/middlewareNivel');

/*
*   Rotas publicas
*/

routes.post('/validateToken', ValidateToken.store);
routes.post('/represent', RepresentController.store);
routes.post('/aut', AutController.store);

/*
*    Rotas Protegidas por token
*/

//  const protectedApi;
//   protectedApi.use('/api',auth);
//   routes.post(protectedApi, '/a');

/*
*   Rotas protegidas por token e nivel
*/

//  const protecLevel;
// protecLevel.use('/master', nivel);
// routes.post( protectedApi,protecLevel, '/a');

module.exports = routes;