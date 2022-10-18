import { INCR,DECR,RESET } from "./ObjectTypes";
export const incr=( data )=>{
  return {
    type:INCR,
    Payload:data
  }
};