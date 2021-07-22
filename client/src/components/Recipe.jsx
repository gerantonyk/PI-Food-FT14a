import './Recipe.css';
import React from 'react';
export default function Recipe({title,image,diets,score}) {
  return (
    <div className="recipe">
      <div className='title'>
        <p>{title}</p>
      </div>
      <div className='imgContent  '>
        <img className="foodimg" src={image} width="100%" height="auto" alt="food" />
      </div>
        <div className="diets">{diets.map((d,i)=><div key={i}>{d+' '} </div>)}</div>
        
    </div>
  )
};
