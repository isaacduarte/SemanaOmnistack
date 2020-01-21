const {Router} = require('express');
const RepresentController = require('../controllers/RepresentController');

const routes = Router();

routes.post('/represent', RepresentController.store);

module.exports = routes;