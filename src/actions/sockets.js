import * as types from '../constants/sockets';

import SocketIOClient from 'socket.io-client';

import {redirectto} from './services';

let socket=null;

export function missingSocketConnection () {
  return {
    types:types.SOCKETS_CONNECTION_MISSING,
  }
}

//thunk
export function socketsConnect() {
  return (dispatch, getState)=>{
    const {token}=getState().auth;
    const {isFetching} = getState().services;
    if (isFetching.sockets) {
      return Promise.resolve();
    }
    
    dispatch({
      type:types.SOCKETS_CONNECTION_REQUEST,
      payload:new Error('Missing socet connection!'),
    })

    socket =SocketIOClient('ws://localhost:8000', {
      query:{token},
    })

    //add socket obrabotchiki

    //when connection success
    socket.on('connect',()=>{
      dispatch({
        type:types.SOCKETS_CONNECTION_SUCCESS,

      })
    })

    //when error
    socket.on('error',(error)=>{
      dispatch({
        type:types.SOCKETS_CONNECTION_FAILURE,
        payload: new Error(`Connection ${error}`)
      })
    })

    //when connect error
    socket.on('connect_error',()=>{
      dispatch({
        type:types.SOCKETS_CONNECTION_FAILURE,
        payload:new Error('We have lost connection'),
      })
    })

    // add server socket obrabotchiki

    socket.on('new-message',(message)=>{
      console.log('recieve message ',message);
      dispatch({
        type:types.RECIEVE_MESSAGE,
        payload: message,
      })
    })

    socket.on('new-chat',({chat})=>{
      dispatch({
        type: types.RECIEVE_NEW_CHAT,
        payload: {chat},
      })
    })

    socket.on('deleted-chat',({chat})=>{
      //console.log("try to delete chat",chat);
      const {activeId}=getState().chats;

      dispatch({
        type: types.RECIEVE_DELETED_CHAT,
        payload: {chat},
      })

      //if we are in the  deleted chat => redirect to main page
      if (activeId===chat._id){
        dispatch(redirectto('/chat'));
      }
    })
  }
}

export function sendMessage(content) {
  return (dispatch, getState) => {
    const { activeId } = getState().chats;

    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit(
      'send-message',
      {
        chatId: activeId,
        content,
      },
      () => {
        dispatch({
          type: types.SEND_MESSAGE,
          payload: {
            chatId: activeId,
            content,
          },
        });
      },
    );
  };
}

export function mountchat (chatId){
  return (dispatch,getState)=>{
    //check if socket connected
    if (!socket) {
      dispatch(missingSocketConnection());
    }

    socket.emit('mount-chat',chatId);

    dispatch({
      type:types.MOUNT_CHAT,
      payload:{chatId},
    })
  }
}

export function unmountchat (chatId){
  return (dispatch,getState)=>{
    //check if socket connected

    if (!socket) {
      dispatch(missingSocketConnection());
    }
    //console.log('chatId unmount',chatId);
    socket.emit('unmount-chat',chatId);
    //console.log('chatId unmount2',chatId);
    dispatch({
      type: types.UNMOUNT_CHAT,
      payload: {chatId},
    })

    //console.log('chatId unmount',chatId);
  }
}
