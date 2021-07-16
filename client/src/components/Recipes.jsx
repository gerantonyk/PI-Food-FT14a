import React from 'react';
import Recipe from './Recipe';
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../actions';
import Pagination from './Pagination';

export default function Recipes() {
  
  const recipes          = useSelector(state => state.recipes)
  const currentPage      = useSelector(state => state.currentPage)
  const itemsPerPage     = useSelector(state => state.itemsPerPage)
  const indexOfLastItem  = currentPage * itemsPerPage
  const indexOfFirstitem = indexOfLastItem - itemsPerPage
  const currentItems     = recipes.slice(indexOfFirstitem,indexOfLastItem)

  return (
    <div>
      <div className='recipes'>

        {currentItems.map((r,id) => <Recipe
            key={id}
            title={r.title}
            image = {r.image}
            diets = {r.diets}
          /> )}
      </div>
      
      <Pagination/>
    </div>
  )
};


        //recipes.map(
         //recipe=> <Recipe title={recipe} image={recipe.image} diets={recipe.diets}/>)