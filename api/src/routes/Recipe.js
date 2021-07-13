const { Router } = require('express');
const fetch = require("node-fetch");
const {conn, Recipe } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/', async function(req, res, next){
//   Nombre
// Resumen del plato
// Puntuación
// Nivel de "comida saludable"
// Paso a paso
  var {title, summary, score,healthyness , steps, diets} = req.body
    if (!title) return res.status(400).send({error: 'Debe ingresar un titulo'})
    if (!summary) return res.status(400).send({error: 'Debe ingresar un resumen del plato'})
    steps = steps.join('|')
    const recipe = await Recipe.create({            // estas tienen que estar definidas
      title,
      summary, 
      score,
      healthyness, 
      steps
    });
    
    await recipe.setDiets(diets)
    // return res.send(recipe);
    return res.send(recipe)
})

module.exports = router;
