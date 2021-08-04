const { Router } = require('express');
const comandasController = require('../controllers/comandasController');
const authController = require('../controllers/authController');

const routes = Router();

//routes.get('/comandas', comandasController.getComandas);
routes.post('/registrar', authController.createUsuario);



module.exports = routes;