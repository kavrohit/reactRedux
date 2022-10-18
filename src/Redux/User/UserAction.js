import { FETCH_USER_FAILURE, FETCH_USER_REQ, FETCH_USER_SUCCESS } from "./UserTypes"
import axios from 'axios'
export const fetchUserReq=()=>{
  return {
    type:FETCH_USER_REQ
  }
}
export const userReqFail = (error) => {
  return {
    type:FETCH_USER_FAILURE,
    payload:error
  }
}

export const userReqSuccess = (users) =>{
return {
    type:FETCH_USER_SUCCESS,
    payload:users
 }
}

export const fetchUser = () => async dispatch => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error.message)
  }
}

// export const fetchUser = () => {

//  return (dispatch) => {
//   dispatch(fetchUserReq)
//   axios.get('https://jsonplaceholder.typicode.com/users')

//    .then(response=>{
//     const users= response.data
//     console.log(users);
//     dispatch(userReqSuccess(users))
//    })
//    .catch(error=>{
//      const errorMessage=error.message
//      dispatch(userReqFail(errorMessage));
//    })
//  }
// }
