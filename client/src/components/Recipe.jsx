import React from 'react';
import {Link} from 'react-router-dom' 
export default function Recipe({title,image,diets}) {
  return (
    <div className="recipe">
        <p>{title}</p>
        <img className="foodimg" src={image} width="80" height="80" alt="" />
        <p>{diets}</p>
    </div>
  )
};