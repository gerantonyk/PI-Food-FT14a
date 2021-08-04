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
function filterByTitle(res,recipes,title) {
  var filter={}
  if(title) filter={title:{[Op.like]: `%${title}%`}};
  Recipe.findAll({ 
    where:filter,  
    attributes: { exclude: ['createdAt','updatedAt']
    },
    include:{model:Diet, as: 'diets', through: {attributes: []},
      attributes: ["name"],exclude:["recipe_diet"]
    }
  })
.then(recipesbd=>{

  recipesbd = recipesbd.map(recipe=>recipe.get({ plain: true }))
  recipesbd.forEach(recipe=>recipe.diets = recipe.diets.map(diet=>diet.name))

  recipes = recipes.concat(recipesbd)   
  
})
.finally(()=>res.json(recipes))
}

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async function(req, res, next){
  const title = req.query.name
  var recipes =[]
  var lim=0
  //primero busco en la api externa
  fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`).then(r => r.json())
    .then((result) => {

      if(result && result.results){
        recipes = result.results;

      //reformate los resultados para que quede igual a la bd
        recipes = recipes.map(r=>({
          id:r.id,
          title:r.title,
          summary:r.summary,
          score: r.spoonacularScore,
          healthyness:r.healthScore,
          image:r.image,
          diets:r.diets,
          steps:(r.analyzedInstructions && r.analyzedInstructions.steps?r.analyzedInstructions.steps.map(item=>item.step).join("|"):'')
          })
        )
      }
      //filtro los resultados para obtener los que contienen el string en name

      recipes = recipes.filter(r=>!title || r.title.includes(title))
      // si no hay 9 resultados busco en la base de datos



        filterByTitle(res,recipes,title)

      }  

   , ()=>{

    return filterByTitle(res,recipes,title,lim)}
   
   )
})

router.get('/:id', async function(req, res, next){
  const {id} = req.params
  var recipe = null
  if (isUUID.anyNonNil(id)) recipe =  await Recipe.findByPk(id,
    {
    attributes: { exclude: ['createdAt','updatedAt']
    },
    include:{model:Diet, as: 'diets', through: {attributes: []},
      attributes: ["name"],exclude:["recipe_diet"]
    }
  }); 
  if (recipe) {recipe = recipe.get({ plain: true })
  recipe.diets = recipe.diets.map(diet=>diet.name)}
  if (recipe) return res.json(recipe);
 
  recipe = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`).then(r => r.json())

  recipe = {
    id:recipe.id,
    title:recipe.title,
    summary:recipe.summary,
    score: recipe.spoonacularScore,
    healthyness:recipe.healthScore,
    image:recipe.image,
    diets:recipe.diets,
    steps:(recipe.analyzedInstructions[0] && recipe.analyzedInstructions[0].steps?recipe.analyzedInstructions[0].steps.map(item=>item.step).join(""):'')
    }

  return res.json(recipe);
})
module.exports = router;
