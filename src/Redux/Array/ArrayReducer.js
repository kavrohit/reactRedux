import { INCR, DECR } from "./ArrayTypes";

const initialState = {
  state: [0,0,0,0,0]
}

const ArrayReducer = (state=state ,action) => {

  console.log('----------actionss',action);
  switch(action.type){
     case INCR:
     return state.map((value,i)=>{
     if(action.payload.index === i){
      return value += 1;
    }
    return value;
    });
    break

    case DECR:
    return state.map((value,i)=>{
     if(action.payload.index === i){
        return value -= 1;
     }
     return value;
    });
    break
    default:
      return state;
  }
}
export default ArrayReducer;