const express = require('express')
const router = express.Router()

const alumnoController = require('../controllers/resuladoController')

//Mostrar todos los resultados (GET)
router.get('/', resultadoController.mostrar)
//Crear resultados (POST)
router.post('/crear', resultadoController.crear)
//Editar resultados (POST)
router.post('/editar', resultadoController.editar)
//Borrar resultados (GET)
router.get('/borrar/:id', resultadoController.borrar)
module.exports = router