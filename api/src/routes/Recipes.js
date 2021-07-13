const { Router } = require('express');
const fetch = require("node-fetch");
const { conn,Recipe,Diet } = require('../db');
require('dotenv').config();
const { Op } = require("sequelize");
const isUUID = require('is-uuid');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {
  API_KEY,
} = process.env;

const router = Router();

//para traer los datos de la bd 
function filterByName(res,recipes,name,lim) {
Recipe.findAll({ limit: lim,
  where:{name:{[Op.like]: `%${name}%`}}  
})
.then(recipesbd=>{
  recipesbd= recipesbd.map(r => ({...r.dataValues,origen:'bd'})) 
  recipes = recipes.concat( recipesbd)   
  
})
.finally(()=>res.json(recipes))
}

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async function(req, res, next){
  const {name} = req.query
  var recipes =[]
  var lim=0
  //primero busco en la api externa
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10`).then(r => r.json())
    .then((result) => {
      recipes= result.results 
      //filtro los resultados para obtener los que contienen el string en name
      recipes = recipes.filter(r=>r.title.includes(name))
      // si no hay 9 resultados busco en la base de datos
      
      const len = recipes.length
      if (len>9) {
        recipes = recipes.slice(_,9)
      }
      
      recipes = recipes.map(r => ({...r,origen:'api'}))
      if (recipes.length === 9) return res.json(recipes)
      if (len<9) {
        lim = (9-len)
        filterByName(res,recipes,name,lim)
      }  

   }, ()=>{filterByName(res,recipes,name,lim)}
   
   )
})

router.get('/:id', async function(req, res, next){
  const {id} = req.params
  var recipe = null
  if (isUUID.anyNonNil(id)) recipe =  await Recipe.findByPk(id,{include: Diet});
  if (recipe) return res.json(recipe);
  recipe = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`).then(r => r.json())
  return res.json(recipe);
})
module.exports = router;
