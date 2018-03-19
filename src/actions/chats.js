import * as types from '../constants/chats';
import {chatApi, redirectto} from './services';

export function fetchMyChats(){
  return (dispatch,getState)=>{
    const {token}=getState().auth;
    const {isFetching} = getState().services;
    if (isFetching.fetchMyChats) {
      return Promise.resolve();
    }
    
    dispatch({
      type: types.FETCH_MY_CHATS_REQUEST,
    })

    return chatApi('chats/my',token)
    .then(data=>dispatch({
      type: types.FETCH_MY_CHATS_SECCESS,
      payload:data,
    }))
    .catch(reason=>dispatch({
      type: types.FETCH_MY_CHATS_FAILURE,
      payload: reason,
    }))
  };
};

export function fetchAllChats(){
  return (dispatch,getState)=>{
    const {token}=getState().auth;
    const {isFetching} = getState().services;
    if (isFetching.fetchAllChats) {
      return Promise.resolve();
    }
    
    dispatch({
      type: types.FETCH_ALL_CHATS_REQUEST,
    })

    return chatApi('chats',token)
    .then(data=>dispatch({
      type: types.FETCH_ALL_CHATS_SECCESS,
      payload: data,
    }))
    .catch(reason=>dispatch({
      type: types.FETCH_ALL_CHATS_FAILURE,
      payload: reason,
    }))
  };
};

export function fetchChat(chatId){
  return (dispatch,getState)=>{
    const {token}=getState().auth;
    const {isFetching} = getState().services;
    if (isFetching.fetchChat) {
      return Promise.resolve();
    }
    
    dispatch({
      type: types.FETCH_CHAT_REQUEST,
      payload:chatId,
    })

    return chatApi('chatsid',token,chatId)
    .then(data=>{
     // console.log('data return from serv',data);
      dispatch({
        type:types.FETCH_CHAT_SECCESS,
        payload: data,
      });
      
      return data;
    })
    .catch(reason=>dispatch({
      type:types.FETCH_CHAT_FAILURE,
      payload: reason,
    }))
  };
};

export function setActiveChat(chatId){
  return (dispatch,getState)=>{
    // const {isFetching} = getState().services;
    // if (isFetching.setActiveChat) {
    //   return Promise.resolve();
    // }
    
    dispatch(fetchChat(chatId))
    .then((data)=>{
      if (!data){
        dispatch(redirectto('/chat'));

        return dispatch({
          type:types.UNSET_ACTIVE_CHAT,
        })
      }
     // console.log('data ',data);
      dispatch({
        type:types.SET_ACTIVE_CHAT,
        payload: data,
      })

      dispatch(redirectto(`/chat/${data.chat._id}`));
    })
   
  };
};

export function createChat(chatTitle){
  return (dispatch,getState)=>{
    const {token}=getState().auth;
    const {isFetching} = getState().services;
    if (isFetching.createChat) {
      return Promise.resolve();
    }
    
    dispatch({
      type: types.CREATE_CHAT_REQUEST,
      payload: {chatTitle},
    })

    return chatApi('chatadd',token,chatTitle)
    .then(data=>{

      //fetchAllChats();
      //fetchMyChats();
      
      dispatch({
        type:types.CREATE_CHAT_SECCESS,
        payload: data,
      });

      dispatch(redirectto(`/chat/${data.chat._id}`));

      return data;
    })
    .catch(reason=>dispatch({
      type:types.CREATE_CHAT_FAILURE,
      payload: reason,
    }))
  }
}

export function joinChat(chatId){
  return (dispatch,getState)=>{
    const {token}=getState().auth;
    const {isFetching} = getState().services;
    if (isFetching.joinChat) {
      return Promise.resolve();
    }
    
    dispatch({
      type: types.JOIN_CHAT_REQUEST,
      payload: {chatId},
    })

    return chatApi('chatjoin',token,chatId)
    .then(data=>{

      console.log('chat1',data);
      dispatch({
        type:types.JOIN_CHAT_SECCESS,
        payload: data,
      });
      console.log('chat2',data);
      //dispatch(fetchAllChats());
      //dispatch(redirectto(`/chat/${data.chat._id}`));

      return data;
    })
    .catch(reason=>dispatch({
      type:types.JOIN_CHAT_FAILURE,
      payload: reason,
    }))
  }
}

export function deleteChat(chatId){
  return (dispatch,getState)=>{
    const {token}=getState().auth;
    const {isFetching} = getState().services;
    if (isFetching.deleteChat) {
      return Promise.resolve();
    }
    
    dispatch({
      type: types.DELETE_CHAT_REQUEST,
      payload: {chatId},
    })

    return chatApi('chatdelete',token,chatId)
    .then(data=>{

      
      dispatch({
        type:types.DELETE_CHAT_SECCESS,
        payload: data,
      });

      dispatch({
        type:types.UNSET_ACTIVE_CHAT,
        
      });
      dispatch(redirectto('/chat'));

      return data;
    })
    .catch(reason=>dispatch({
      type:types.DELETE_CHAT_FAILURE,
      payload: reason,
    }))
  }
}

export function liveChat(chatId){
  return (dispatch,getState)=>{
    const {token}=getState().auth;
    const {isFetching} = getState().services;
    if (isFetching.liveChat) {
      return Promise.resolve();
    }
    
    dispatch({
      type: types.LIVE_CHAT_REQUEST,
      payload: {chatId},
    })

    return chatApi('chatlive',token,chatId)
    .then(data=>{

      
      dispatch({
        type:types.LIVE_CHAT_SECCESS,
        payload: data,
      });

      dispatch({
        type:types.UNSET_ACTIVE_CHAT,
        
      });
      //dispatch(fetchAllChats());
      dispatch(redirectto(`/chat/${data.chat._id}`));

      return data;
    })
    .catch(reason=>dispatch({
      type:types.LIVE_CHAT_FAILURE,
      payload: reason,
    }))
  }
}

