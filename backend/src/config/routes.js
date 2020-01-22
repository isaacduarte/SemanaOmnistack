const {Router} = require('express');
const RepresentController = require('../controllers/RepresentController');
const AutController = require('../controllers/AutController');
const routes = Router();

routes.post('/represent', RepresentController.store);
routes.post('/aut', AutController.store);
module.exports = routes;