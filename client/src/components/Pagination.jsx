import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../actions';


export default function Pagination({recipes}) {
  const pageNumbers      = []
  //const recipes          = useSelector(state => state.recipes)
  const itemsPerPage     = useSelector(state => state.itemsPerPage)
  const currentPage     = useSelector(state => state.currentPage)
  const dispatch = useDispatch()
  const total = recipes.length
  for(let i = 1; i<=Math.ceil(total/itemsPerPage);i++){
    pageNumbers.push(i)
  }

  useEffect(()=>{
    let len = pageNumbers.length
    if(len<currentPage){
      if(len ===0) len=1;
      dispatch(changePage(len))
    }
  })
  return (
    <div className="pagination">
      {pageNumbers.map(number=>          
              <input type="button" key={number} onClick={()=>dispatch(changePage(number))} value={number}>
          </input>)}

    </div>
  )
};