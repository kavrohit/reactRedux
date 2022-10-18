import { INCR,DECR,RESET,FETCH_DATA } from "./PlayersTypes";
import PlayersData from "../../PlayersData";

export const fetchData = (data) =>{
  return {

    type:FETCH_DATA,
    payload:data
  }
}
export const inCr =(index) =>{
  return {
    type:INCR,
    payload:{index}
  }
}
export const deCr =(index) =>{
  return {
    type:DECR,
    payload:{index}

  }
}
export const reSet =(index) =>{
  return {
    type:RESET,
    payload:index
  }
}


