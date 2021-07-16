import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { getRecipesByName, updateFilter } from '../actions';

export default function SearchBar() {
  const dispatch = useDispatch()
  const recipeNameFilter = useSelector(state => state.recipeNameFilter)

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      //onSearch(city);
      // dispatch(updateFilter(recipeNameFilter))
      dispatch(getRecipesByName(recipeNameFilter))
      //aca va a tener que ir una request al servidor
    }}>
      <input
        type="text"
        placeholder="Nombre..."
        value={recipeNameFilter}
        onChange={e => dispatch(updateFilter(e.target.value))}
      />
        <input type="submit" value="Buscar" />
    </form>
  );
}