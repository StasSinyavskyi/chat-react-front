import * as types from '../constants/messages';
import * as typesChats from '../constants/chats';

//default state
const initialState =[];

export default function auth (state=initialState, action){
  
  switch (action.type){
    case types.SEND_MESSAGE_SECCESS:
      return [...state, action.payload.message];
    case typesChats.FETCH_CHAT_SECCESS:
      return action.payload.chat.mesages;

    default:
      return state;
  }
}
