import React from 'react';
import {Link} from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'
import { getRecipesByName} from '../actions';
export default function Landing() {

  return (
    <Link to='/home'>
      <button type="button">Click Me!</button>  
    </Link>
  )
};
