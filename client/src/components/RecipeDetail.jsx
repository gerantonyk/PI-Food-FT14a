import React from 'react';
import { useSelector } from 'react-redux';
export default function RecipeDetail() {
  const recipeDetail = useSelector(state=>state.recipeDetail)
  return (
  
      <div className="container">
        <h1>Recipe Detail</h1>
          <h2>{recipeDetail.title}</h2>
          <div className="info">
            <div>Resumen: {recipeDetail.summary} ºC</div>
            <div>Puntuacion: {recipeDetail.score}</div>
            <div>Nivel de salud: {recipeDetail.healthyness} km/h</div>
            <div>Paso a paso: {recipeDetail.steps}</div>
            <img className="foodimg" src={recipeDetail.image} width="80" height="80" alt="" />
            <div>Dietas: {recipeDetail.diets}</div>

          </div>
      </div>
  )
};
