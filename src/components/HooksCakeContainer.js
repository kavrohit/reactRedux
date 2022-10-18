import React from 'react'
import { buyCake } from '../Redux';
import { useSelector,useDispatch } from 'react-redux/es/exports';

const HooksCakeContainer = () => {
  const numOfCakes=useSelector(state => state.cake.numOfCakes)
  const dispatch=useDispatch()
  return (
    <div>
      <h2> Number of Cakes -{numOfCakes}</h2>
      <button onClick={()=>dispatch(buyCake())}>BUY CAKE</button>
    </div>
  )
}

export default HooksCakeContainer;