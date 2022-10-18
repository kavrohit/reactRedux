import { BUY_CAKE } from "./CakeType.js"

 export const buyCake = (number=1)=>{
  return {
    type:BUY_CAKE,
    payload: number
  }
}