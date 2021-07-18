import React, { useEffect } from 'react';
import Recipe from './Recipe';
import { useDispatch, useSelector } from 'react-redux'
import { addDietFilter, getRecipesByName,removeDietFilter, setRecipes} from '../actions';
import Pagination from './Pagination';
import Order from './Order';
import DietsCombo from './DietsCombo';

export default function Recipes() {
  const dispatch = useDispatch()
  const recipes      = useSelector(state => state.recipes)
  const currentPage  = useSelector(state => state.currentPage)
  const itemsPerPage = useSelector(state => state.itemsPerPage)
  const recipeOrder  = useSelector(state => state.recipeOrder)
  const dietsFilter  = useSelector(state => state.dietsFilter)

  useEffect(()=>{
    dispatch(getRecipesByName(''))
  },[])
  //Filtrando recipes
  var recipes2 = recipes

  if (dietsFilter.length){
    console.log("entra aca")
    let len = dietsFilter.length
    let queda
    recipes2= recipes2.filter(r=>{
      queda= true
      let i = 0
      while(i<len && queda===true){
        console.log(r.diets)
        console.log(dietsFilter[i])
        queda = r.diets.includes(dietsFilter[i])
        console.log(r.diets.includes(dietsFilter[i]))
        i++
      }
      return queda
    })
  }
  
  //orden
 
  if (recipeOrder.order) {
    let aux = 1 
    if (recipeOrder.dir==='down') aux = -1
    recipes2 = recipes2.sort(function (a, b) {
      if (a[recipeOrder.order] > b[recipeOrder.order]) {
        return 1*aux;
      }
      if (a[recipeOrder.order] < b[recipeOrder.order]) {
        return -1*aux;
      }
        // a must be equal to b
      return 0;
    });
  }
  
  //dispatch(setRecipes(recipes2))


  //Paginado
  const indexOfLastItem  = currentPage * itemsPerPage
  const indexOfFirstitem = indexOfLastItem - itemsPerPage
  const currentItems     = recipes2.slice(indexOfFirstitem,indexOfLastItem)

  function onChangeAddDiet(diet) {
    dispatch(addDietFilter(diet))
  }
  function onClickRemoveDiet(diet) {
    dispatch(removeDietFilter(diet))
  }

  return (
    <div>
      <DietsCombo onChange={onChangeAddDiet} onClick={onClickRemoveDiet}/>
      <Order/>
      <div className='recipes'>
        {currentItems.map((r,id) => <Recipe
            key={id}
            title={r.title}
            image = {r.image}
            diets = {r.diets}
            score = {r.score}
          /> )}
      </div>

      <Pagination recipes={recipes2}/>
    </div>
  )
};


        //recipes.map(
         //recipe=> <Recipe title={recipe} image={recipe.image} diets={recipe.diets}/>)