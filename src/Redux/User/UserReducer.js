import { FETCH_USER_FAILURE,FETCH_USER_REQ, FETCH_USER_SUCCESS } from "./UserTypes";

import { userReqSuccess,userReqFail,fetchUserReq } from "./UserAction";
const initialState = {
  loading:false,
  users:[],
  error:'',
}

const UserReducer = (state=initialState,action)=>{
  switch(action.type){
    case FETCH_USER_REQ:
      return {
        ...state,
        loading:true

      }
    case FETCH_USER_SUCCESS:
      return{
        loading:false,
        users:action.payload,
        error:''
      }
    case FETCH_USER_FAILURE: 
      return {
        loading:false,
        users:[],
        error:action.payload
      }
    
    default: return state
  }
}
export default UserReducer;