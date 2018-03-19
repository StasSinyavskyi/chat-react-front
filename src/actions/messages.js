import * as types from '../constants/messages';

import {chatApi, redirectto} from './services';
import { fetchChat } from '.';

//commented because we use sockets and our message will send => return => show   by sockets

// export function sendMessage(chatId,message){
//   return (dispatch,getState)=>{
//     const {token}=getState().auth;
//     dispatch({
//       type: types.SEND_MESSAGE_REQUEST,
//       payload: {chatId},
//     })

//     return chatApi('sendmessage',token,chatId,message,false)
//     .then(data=>{

      
//       dispatch({
//         type:types.SEND_MESSAGE_SECCESS,
//         payload: data,
//       });

//       //dispatch(redirectto(`/chat/${chat._id}`));
//       dispatch(fetchChat(chatId));
//       return data;
//     })
//     .catch(reason=>dispatch({
//       type:types.SEND_MESSAGE_FAILURE,
//       payload: reason,
//     }))
//   }
// }
