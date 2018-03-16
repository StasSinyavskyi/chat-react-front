import * as types from '../constants/chats';
import {chatApi, redirectto} from './services';

export function fetchMyChats(){
  return (dispatch,getState)=>{
    const {token}=getState().auth;
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
    dispatch({
      type: types.FETCH_CHAT_REQUEST,
    })

    return chatApi('chatsid',token,chatId)
    .then(data=>{
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
  return (dispatch)=>{
    return dispatch(fetchChat(chatId))
    .then(data=>{
      if (!data){
        dispatch(redirectto('/chat'));

        return dispatch({
          type:types.UNSET_ACTIVE_CHAT,
        })
      }

      dispatch({
        type:types.SET_ACTIVE_CHAT,
        payload: data,
      })
    })
   
  };
};

export function createChat(chatTitle){
  return (dispatch,getState)=>{
    const {token}=getState().auth;
    dispatch({
      type: types.CREATE_CHAT_REQUEST,
      payload: {chatTitle},
    })

    return chatApi('chatadd',token,chatTitle)
    .then(chat=>{

      //fetchAllChats();
      //fetchMyChats();
      
      dispatch({
        type:types.CREATE_CHAT_SECCESS,
        payload: chat,
      });

      dispatch(redirectto(`/chat/${chat._id}`));

      return chat;
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
    dispatch({
      type: types.JOIN_CHAT_REQUEST,
      payload: {chatId},
    })

    return chatApi('chatjoin',token,chatId)
    .then(chat=>{

      
      dispatch({
        type:types.JOIN_CHAT_SECCESS,
        payload: chat,
      });

      dispatch(redirectto(`/chat/${chat._id}`));

      return chat;
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
      //dispatch(redirectto(`/chat/${chat._id}`));

      return data;
    })
    .catch(reason=>dispatch({
      type:types.LIVE_CHAT_FAILURE,
      payload: reason,
    }))
  }
}

