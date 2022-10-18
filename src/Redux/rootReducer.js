import { combineReducers } from "redux";
import CakeReducer from "./Cakes/CakeReducer";
import UserReducer from "./User/UserReducer";
import PlayerReducer from "./Players/PlayersReducer"
import IceCreamReducer from './IceCream/IceCreamReducer'
import ArrayReducer from "./Array/ArrayReducer";
import ObjectReducer from "./Object/ObjectReducer";


const rootReducer = combineReducers({
  cake:CakeReducer,
  iceCream:IceCreamReducer,
  user:UserReducer,
  // player:PlayerReducer,
  counters:ArrayReducer,
})

export default rootReducer