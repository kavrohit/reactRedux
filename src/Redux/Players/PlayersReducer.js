import {INCR,DECR,RESET,FETCH_DATA} from "./PlayersTypes.js"
import PlayersData from "../../PlayersData.js"
import { fetchData } from "./PlayersActions.js"

const initialState = {
   data: PlayersData
}
const PlayerReducer = (state=initialState,action)=>{
  switch(action.type){
    case FETCH_DATA:
      return{
        ...state,
        data:action.payload
      }
    case INCR: 
     return 
      state.map((value,i)=>{
        if(action.payload.index===i){
          return value +=1
        }
        return value
      });
      break;
    case DECR:
      return
       state.map((value,i)=>{
        if(action.payload.index===i){
          return value -=1
        }

      });
      break;
      case RESET:
      return
      state.map((value,i)=>{
        if(action.payload.index===i){
          return value *=0
        }

      });
      break;
     default: return state
  }
}

export default PlayerReducer;