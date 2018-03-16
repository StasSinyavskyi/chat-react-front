import * as types from '../constants/services';


//default state
const initialState ={
}

//reducer - формирует состояние
export default function auth (state=initialState, action){
  //console.log(action.payload);


  // switch (action.type){
    
  //   case types.REDIRECT:
  //     return {
  //       ...state,
  //       isUserAuthentificated: true,
  //       user: action.payload.user,
  //       token: action.payload.token,
  //     };
    
  //   default:
  //     return state;
  // }
  return state;
}
