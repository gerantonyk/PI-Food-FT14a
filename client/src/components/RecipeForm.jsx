import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addDietForm, postRecipe, removeDietForm, setRecipeForm } from '../actions';
import DietsCombo from './DietsCombo';
import './RecipeForm.css'

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

      <form  onSubmit={(e) => {e.preventDefault()
      dispatch(postRecipe(recipeForm))}
      }>
      <div className= 'recipeForm'>
        <label className = 'thick' name= 'title' htmlFor='title'>Title:</label>
        <input  onChange={handleRecipeChange} value={recipeForm.title} id='title' type = 'text' placeholder = 'ej:pizza' name='title'></input>
        <label className = 'thick' name= 'score' htmlFor='score'> Puntuacion:</label>
        <input  onChange={handleRecipeChange} value={recipeForm.score} id='score' type = 'number' min="0" max="100"  placeholder = '' name='score'></input>
        <br></br>
        <label className = 'thick' name= 'healthyness' htmlFor='healthyness'>Nivel de "comida saludable":</label>
        <input  onChange={handleRecipeChange} value={recipeForm.healthyness} id='healthyness' type = 'number' min="0" max="100" placeholder = '' name='healthyness'></input>
        <br></br>
        <br></br>
  
        <label className = 'thick' name= 'summary' htmlFor='summary'>Resumen del plato:</label><br></br>
        <textarea  rows = "3" cols="120" onChange={handleRecipeChange} value={recipeForm.summary} id='summary' type = 'textarea' placeholder = '' name='summary'></textarea>
        <br></br>
        <label className = 'thick' name= 'steps' htmlFor='steps'>Paso a paso:</label>
        <br></br>
        <textarea  rows = "6" cols="120" onChange={handleRecipeChange} value={recipeForm.steps} id='steps' type = 'textarea' placeholder = '' name='steps'></textarea>
        <br></br>
        <label className = 'thick' name= 'diets' htmlFor='diets'>Tipos de dieta:</label>
        <DietsCombo onChange={onChangeAddDiet} onClick={onClickRemoveDiet} diets={recipeForm.diets}/>
      </div>  
      
        
      <input className='avgbutton'  type='submit' value='Crear'></input>
      </form>
    </div>
  )
};
// diets.map((diet,id)=> <input  onChange={handleDietsChange} value={diet} id={id} key={id} type = 'text' placeholder = '' name='diets'></input>)
//onChange={this.handleInputChange} value={state.input.username}