const { Router } = require('express');
const { Diet } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async function(req, res, next){
  diets = await Diet.findAll()
  return res.json(diets);
})

module.exports = router;
