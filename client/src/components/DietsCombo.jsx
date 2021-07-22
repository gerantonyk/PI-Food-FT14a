import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets} from '../actions';
import './DietsCombo.css';

export default function DietsCombo({onChange, onClick, diets}) {
  
  const dispatch = useDispatch()
  const recipeDiets      = useSelector(state => state.recipeDiets)
  //const dietsFilter      = useSelector(state =>state.dietsFilter)
  

  useEffect(() => {
    dispatch(getDiets())
  },[dispatch])

  return (
    <div>
    <select onChange={(e)=>onChange(e.target.value)} className='dietscombo' value="Dieta..." >
      {/* <option disabled selected value> -- select an option -- </option> */}
      <option disabled="disabled" >Dieta...</option>  
      {recipeDiets.map((d,id) => <option id ={id} key={id} value={d.name}>{d.name}</option>)}
    </select>
    <br></br>

    
    {diets.map((d,i)=> 
      <div key={i} className="chip">

        <div className="chip-content">{d}</div>
        <div className="chip-close">
            <svg id={d} onClick= {(e)=>onClick(e.target.id)} className="chip-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path id={d} onClick= {(e)=>onClick(e.target.id)} d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></svg>
        </div>
      </div>    
      )}
    </div>
  )
};



