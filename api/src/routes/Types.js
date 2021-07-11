const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async function(req, res, next){
  console.log('paso por aca')
  return res.send('Bienvenido a los Types');
})

module.exports = router;
