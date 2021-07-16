import React, { useState } from 'react';
import DietsCombo from './DietsCombo';

export default function RecipeForm() {

const [recipe,setRecipe] = useState({title:'',
summary:'',
score:'',
healthyness:'',
steps:'',
})
const [diets,setDiets] = useState(['']) 

function handleRecipeChange(e) {
  setRecipe({...recipe,[e.target.name]:e.target.value})
  console.log(recipe)
}


function handleDietsChange(e) {
  let auxdiets = [...diets]
  auxdiets[e.target.id] = e.target.value;
  setDiets(auxdiets)
  console.log(diets)
}

function agregarDiet () {
  setDiets([...diets,''])
  console.log(diets)
}

  return (
    
    <div>
      <h1>Recipe Form</h1>
      <form>
      <label name= 'title' htmlFor='title'>Title:</label>
      <input  onChange={handleRecipeChange} value={recipe.title} id='title' type = 'text' placeholder = 'ej:pizza' name='title'></input>
      <br></br>
      <label name= 'summary' htmlFor='summary'>Resumen del plato:</label>
      <input  onChange={handleRecipeChange} value={recipe.summary} id='summary' type = 'text' placeholder = '' name='summary'></input>
      <br></br>
      <label name= 'score' htmlFor='score'>Puntuacion:</label>
      <input  onChange={handleRecipeChange} value={recipe.score} id='score' type = 'text' placeholder = '' name='score'></input>
      <br></br>
      <label name= 'healthyness' htmlFor='healthyness'>Nivel de "comida saludable":</label>
      <input  onChange={handleRecipeChange} value={recipe.healthyness} id='healthyness' type = 'text' placeholder = '' name='healthyness'></input>
      <br></br>
      <label name= 'steps' htmlFor='steps'>Paso a paso:</label>
      <input  onChange={handleRecipeChange} value={recipe.steps} id='steps' type = 'text' placeholder = '' name='steps'></input>
      <br></br>
      <label name= 'diets' htmlFor='diets'>Tipos de dieta:</label>

      <input
        type="button"
        value="Agrega"
        onClick={agregarDiet}
      />
      {
        diets.map((diet,id)=> <DietsCombo  onChange={handleDietsChange} value={diet} id={id} key={id} name='diets'></DietsCombo>)
      }
        
      <input type='submit' value='Enviar'></input>
      </form>
    </div>
  )
};
// diets.map((diet,id)=> <input  onChange={handleDietsChange} value={diet} id={id} key={id} type = 'text' placeholder = '' name='diets'></input>)
//onChange={this.handleInputChange} value={state.input.username}