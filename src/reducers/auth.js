//possible types of this reducer
import * as types from '../constants';

const token = localStorage.getItem('token');

//default state
const initialState ={
  isUserAuthentificated : !!token,
  user:null,
  token,
}

//reducer
export default function auth (state=initialState, action){
 // console.log(action);


  switch (action.type){
    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isUserAuthentificated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case types.RECIEVE_AUTH_SUCCESS:
    return {
      ...state,
      isUserAuthentificated:true,
      user: action.payload.user,
    } 
    case types.SIGNUP_FAILURE:
    case types.LOGIN_FAILURE: 
    case types.LOGOUT_SUCCESS:
    case types.RECIEVE_AUTH_FAILURE:
    return {
      ...state,
        isUserAuthentificated:false,
        user: null,
        token: null,
    };
    default:
      return state;
  }
}
