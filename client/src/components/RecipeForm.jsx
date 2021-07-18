import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addDietForm, postRecipe, removeDietForm, setRecipeForm } from '../actions';
import DietsCombo from './DietsCombo';


export default function RecipeForm() {
  const dispatch = useDispatch()
  const recipeForm = useSelector(state=>state.recipeForm)
  // const [recipe,setRecipe] = useState({title:'',
  // summary:'',
  // score:'',
  // healthyness:'',
  // steps:'',
  // })
  // const [diets,setDiets] = useState(['']) 

  function handleRecipeChange(e) {
    dispatch(setRecipeForm({...recipeForm,[e.target.name]:e.target.value}))

  }


  function onChangeAddDiet(diet) {
    dispatch(addDietForm(diet))
  }
  function onClickRemoveDiet(diet) {
    dispatch(removeDietForm(diet))
  }



  return (
    
    <div>
      <h1>Recipe Form</h1>
      <form onSubmit={(e) => {e.preventDefault()
      dispatch(postRecipe(recipeForm))}
      }>
      <label name= 'title' htmlFor='title'>Title:</label>
      <input  onChange={handleRecipeChange} value={recipeForm.title} id='title' type = 'text' placeholder = 'ej:pizza' name='title'></input>
      <br></br>
      <label name= 'summary' htmlFor='summary'>Resumen del plato:</label>
      <input  onChange={handleRecipeChange} value={recipeForm.summary} id='summary' type = 'text' placeholder = '' name='summary'></input>
      <br></br>
      <label name= 'score' htmlFor='score'>Puntuacion:</label>
      <input  onChange={handleRecipeChange} value={recipeForm.score} id='score' type = 'text' placeholder = '' name='score'></input>
      <br></br>
      <label name= 'healthyness' htmlFor='healthyness'>Nivel de "comida saludable":</label>
      <input  onChange={handleRecipeChange} value={recipeForm.healthyness} id='healthyness' type = 'text' placeholder = '' name='healthyness'></input>
      <br></br>
      <label name= 'steps' htmlFor='steps'>Paso a paso:</label>
      <input  onChange={handleRecipeChange} value={recipeForm.steps} id='steps' type = 'text' placeholder = '' name='steps'></input>
      <br></br>
      <label name= 'diets' htmlFor='diets'>Tipos de dieta:</label>

      <DietsCombo onChange={onChangeAddDiet} onClick={onClickRemoveDiet} diets={recipeForm.diets}/>
        
      <input type='submit' value='Enviar'></input>
      </form>
    </div>
  )
};
// diets.map((diet,id)=> <input  onChange={handleDietsChange} value={diet} id={id} key={id} type = 'text' placeholder = '' name='diets'></input>)
//onChange={this.handleInputChange} value={state.input.username}