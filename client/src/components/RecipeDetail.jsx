import React from 'react';
import { useSelector } from 'react-redux';
import "./RecipeDetail.css"

export default function RecipeDetail() {
const recipeDetail = useSelector(state=>state.recipeDetail)

  return (
  
      <div className="recipeDetail">
          <h2>{recipeDetail.title}</h2>
          <div className="info">
            <img className="imgDetail" src={recipeDetail.image} width="50%" height="auto" alt="" />
            <div><span className = 'thick'>Resumen:</span> {recipeDetail.summary && recipeDetail.summary.replace(/<[^>]+>/g, '')}</div>
            <div><span className = 'thick'>Puntuacion:</span> {recipeDetail.score}</div>
            <div><span className = 'thick'>Nivel de salud: </span>{recipeDetail.healthyness}</div>
            <div><span className = 'thick'>Paso a paso: </span>{recipeDetail.steps}</div>
            <div><span className = 'thick'>Dietas:</span> </div>
            <div>{recipeDetail.diets && recipeDetail.diets.map((d,i)=><span key={i}>{d+' '}</span>)}</div>

          </div>
      </div>
  )
};
