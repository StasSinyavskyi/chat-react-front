import * as types from '../constants'; //impot all types
//import * as typesChats from '../constants/chats';

//default state
const initialState =[];

export default function auth (state=initialState, action){
  
  switch (action.type){
    case types.RECIEVE_MESSAGE:
      return [...state, action.payload.message];
    case types.FETCH_CHAT_SECCESS:
      return action.payload.chat.messages;

    default:
      return state;
  }
}
