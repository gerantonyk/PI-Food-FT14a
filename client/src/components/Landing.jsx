import React from 'react';
import {Link} from 'react-router-dom' 
import './Landing.css'
export default function Landing() {

  return (
    <div className= 'vacio'>
    <br></br>
    <br></br>
      <h1>¡Bienvenido! ¿Qué vas a cocinar hoy?</h1>
      <Link to='/home'>
      <br></br>
      <br></br>
        <button className="avgbutton landingbutton" type="button">¡Ingresar!</button>  
      </Link>
    </div>
  )
};
