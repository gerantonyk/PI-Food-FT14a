import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../actions';


export default function Pagination() {
  const pageNumbers      = []
  const recipes          = useSelector(state => state.recipes)
  const itemsPerPage     = useSelector(state => state.itemsPerPage)
  const dispatch = useDispatch()
  const total = recipes.length
  for(let i = 1; i<=Math.ceil(total/itemsPerPage);i++){
    pageNumbers.push(i)
  }
  return (
    <div className="pagination">
      {pageNumbers.map(number=>          
              <input type="button" key={number} onClick={()=>dispatch(changePage(number))} value={number}>
          </input>)}

    </div>
  )
};