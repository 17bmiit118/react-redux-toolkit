import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { changeColor } from '../features/theme/themeSlice';

export const Theme = () => {

  const color = useSelector((state)=>state.theme.color)
  const dispatch = useDispatch();

  return (
    <>
        <button onClick={()=> dispatch(changeColor('red'))}>Change Color</button>
        {color}
        
      </>
  )
}