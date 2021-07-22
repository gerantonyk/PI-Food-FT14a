const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipes = require('./recipes.js');
const recipe = require('./recipe.js');
const types = require('./types.js');

const router = Router();

router.use('/recipes', recipes);
router.use('/recipe', recipe);
router.use('/types', types);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async function(req, res, next){

  res.send('Bienvenido sdasdjkh');
})



module.exports = router;
