import { INCR,DECR } from "./ArrayTypes";

export const incr =(index) => {
  return{
    type:INCR,
    payload:{index}
  }
};
export const decr =(index) => {
  return{
    type:DECR,
    payload:{index}
  }
};
