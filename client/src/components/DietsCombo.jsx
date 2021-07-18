import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets} from '../actions';

export default function DietsCombo({onChange, onClick, diets}) {
  
  const dispatch = useDispatch()
  const recipeDiets      = useSelector(state => state.recipeDiets)
  //const dietsFilter      = useSelector(state =>state.dietsFilter)
  

  useEffect(() => {
    dispatch(getDiets())
  },[dispatch])

  return (
    <div>
    <select onChange={(e)=>onChange(e.target.value)} className='dietscombo' value="agregar filtro" >
      {/* <option disabled selected value> -- select an option -- </option> */}
      <option disabled="disabled" >agregar filtro</option>  
      {recipeDiets.map((d,id) => <option id ={id} key={id} value={d.name}>{d.name}</option>)}
    </select>
    {diets.map((d,i)=><input onClick= {(e)=>onClick(e.target.value)} key={i} type='button' value={d}></input>)}
    </div>
  )
};
