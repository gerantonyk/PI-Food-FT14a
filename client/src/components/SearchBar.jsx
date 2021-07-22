import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getRecipesByName, updateFilter } from '../actions';

export default function SearchBar() {
  const dispatch = useDispatch()
  const recipeNameFilter = useSelector(state => state.recipeNameFilter)

  return (

 
      <input
        type="text"
        placeholder="Buscar..."
        value={recipeNameFilter}
        onChange={e => dispatch(updateFilter(e.target.value))}
      />

  );
}