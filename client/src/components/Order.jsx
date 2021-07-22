import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeOrder } from '../actions';
import './Order.css';

export default function Order() {
  //ordenamiento
  const recipeOrder      = useSelector(state => state.recipeOrder)
  const dispatch = useDispatch()

  function handleOrderChange(e) {

    if (recipeOrder.order === [e.target.name][0]) {
      if (recipeOrder.dir === 'up') {
        return  dispatch(changeOrder({order: [e.target.name][0],
          dir:"down"
          }))
      }
    }
    return  dispatch(changeOrder({order: [e.target.name][0],
      dir:"up"
      }))

  }
  return (
    <div className="order">
       <input className = 'avgbutton' onClick={(e)=>handleOrderChange(e)}  value={"score"+ 
       (recipeOrder.order==="score"?(recipeOrder.dir==='up'?
       ' ↑':recipeOrder.dir==='down'?' ↓':'' ):'')} 
       id='score' type = 'button' name='score'></input>
       <input className = 'avgbutton'  onClick={(e)=>handleOrderChange(e)}  value={"title"+ 
       (recipeOrder.order==="title"?(recipeOrder.dir==='up'?
       ' ↑':recipeOrder.dir==='down'?' ↓':'' ):'')} 
        id='title' type = 'button' name='title'></input>
    </div>
  )
};