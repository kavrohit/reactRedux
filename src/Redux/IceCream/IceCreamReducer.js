import { ICE_CREAM } from "./IceCreamTypes.js";

const initialState = {
  NumOfIceCream :30
};

const IceCreamReducer = (state=initialState,action) => {
switch(action.type){
  case ICE_CREAM:
    return {
      ...state,
      NumOfIceCream:state.NumOfIceCream-1
    }
    default: return state
  }

}

export default IceCreamReducer;