import React from 'react';
import { Link } from 'react-router-dom';

export default function AddRecipe() {

  return (
    <Link to="/recipeform">
      <input type='button' className='avgbutton' value={"Crear receta+"}></input> 
    </Link>
  );
}