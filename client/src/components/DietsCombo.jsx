import React from 'react';
export default function DietsCombo({onChange,diet,id}) {
  const diets = ["vegan","igar","lorem","flerc"]
  return (
    <select onChange={onChange} className='dietscombo' value = {diet} id={id}>
      <option disabled selected value> -- select an option -- </option>
      {diets.map(d => <option key={d} value={d}>{d}</option>)}
    </select>
  )
};
