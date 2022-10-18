import { BUY_CAKE } from "./CakeType.js"

const initialState = {
  numOfCakes: 40
}

const CakeReducer = (state=initialState,action)=>{
  switch(action.type) {
    case BUY_CAKE :
      return {
        ...state,
        numOfCakes:state.numOfCakes - action.payload

      }
      default: return state
  }
}
export default CakeReducer;