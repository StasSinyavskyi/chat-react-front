import { combineReducers } from 'redux';
import * as types from '../constants';


// default state
const initialState = {
  isFetching: {
    login: false,
    logout: false,
    signup: false,
    receiveAuth: false,
    editProfile: false,
    fetchMyChats: false,
    fetchAllChats: false,
    fetchChat: false,
    setActiveChat: false,
    createChat: false,
    joinChat: false,
    deleteChat: false,
    liveChat: false,
    sockets: false,

  },
  errors: {
    authErr: null,
    chatErr: null,
    profErr: null,
  },
  isConnected: false,
};


// reducer - формирует состояние
function isFetching(state = initialState.isFetching, action) {
  // console.log{action.payload};
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, login: true };
    case types.LOGOUT_REQUEST:
      return { ...state, logout: true };
    case types.SIGNUP_REQUEST:
      return { ...state, signup: true };
    case types.RECIEVE_AUTH_REQUEST:
      return { ...state, receiveAuth: true };
    case types.EDIT_PROFILE_REQUEST:
      return { ...state, editProfile: true };
    case types.FETCH_MY_CHATS_REQUEST:
      return { ...state, fetchMyChats: true };
    case types.FETCH_ALL_CHATS_REQUEST:
      return { ...state, fetchAllChats: true };
    case types.FETCH_CHAT_REQUEST:
      return { ...state, fetchChat: true };
    // case types.SET :
    //  return {...state, setActiveChat:true};
    case types.CREATE_CHAT_REQUEST:
      return { ...state, createChat: true };
    case types.JOIN_CHAT_REQUEST:
      return { ...state, joinChat: true };
    case types.DELETE_CHAT_REQUEST:
      return { ...state, deleteChat: true };
    case types.LIVE_CHAT_REQUEST:
      return { ...state, liveChat: true };
    case types.SOCKETS_CONNECTION_REQUEST:
      return { ...state, sockets: true };


    case types.LOGIN_FAILURE:
    case types.LOGIN_SUCCESS:
      return { ...state, login: false };
    case types.LOGOUT_FAILURE:
    case types.LOGOUT_SUCCESS:
      return { ...state, logout: false };
    case types.SIGNUP_FAILURE:
    case types.SIGNUP_SUCCESS:
      return { ...state, signup: false };
    case types.RECIEVE_AUTH_FAILURE:
    case types.RECIEVE_AUTH_SUCCESS:
      return { ...state, receiveAuth: false };
    case types.EDIT_PROFILE_FAILURE:
    case types.EDIT_PROFILE_SUCCESS:
      return { ...state, editProfile: false };
    case types.FETCH_MY_CHATS_FAILURE:
    case types.FETCH_MY_CHATS_SECCESS:
      return { ...state, fetchMyChats: false };
    case types.FETCH_ALL_CHATS_FAILURE:
    case types.FETCH_ALL_CHATS_SECCESS:
      return { ...state, fetchAllChats: false };
    case types.FETCH_CHAT_FAILURE:
    case types.FETCH_CHAT_SECCESS:
      return { ...state, fetchChat: false };
    // case types. :
    // case types. :
    //   return {...state, setActiveChat:false};
    case types.CREATE_CHAT_FAILURE:
    case types.CREATE_CHAT_SECCESS:
      return { ...state, createChat: false };
    case types.JOIN_CHAT_FAILURE:
    case types.JOIN_CHAT_SECCESS:
      return { ...state, joinChat: false };
    case types.DELETE_CHAT_FAILURE:
    case types.DELETE_CHAT_SECCESS:
      return { ...state, deleteChat: false };
    case types.LIVE_CHAT_FAILURE:
    case types.LIVE_CHAT_SECCESS:
      return { ...state, liveChat: false };
    case types.SOCKETS_CONNECTION_FAILURE:
    case types.SOCKETS_CONNECTION_SUCCESS:
    // case types.SOCKETS_CONNECTION_MISSING :
      return { ...state, sockets: false };


    default:
      return state;
  }
  // return state;
}


function errors(state = initialState.errors, action) {
  // console.log{action.payload};
  switch (action.type) {
    case types.SIGNUP_FAILURE:
    case types.LOGIN_FAILURE:
    case types.LOGOUT_FAILURE:
    // case types.RECIEVE_AUTH_FAILURE :
    // uses for internal purpous (information is not for user ) do not show error
      return { ...state, authErr: action.payload };

    case types.SIGNUP_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGOUT_SUCCESS:
    // case types.RECIEVE_AUTH_SUCCESS :
      return { ...state, authErr: null };

    case types.EDIT_PROFILE_FAILURE:
      return { ...state, profErr: action.payload };

    case types.FETCH_MY_CHATS_FAILURE:
    case types.FETCH_ALL_CHATS_FAILURE:
    case types.FETCH_CHAT_FAILURE:
    case types.CREATE_CHAT_FAILURE:
    case types.JOIN_CHAT_FAILURE:
    case types.DELETE_CHAT_FAILURE:
    case types.LIVE_CHAT_FAILURE:
    case types.SOCKETS_CONNECTION_FAILURE:
      return { ...state, chatErr: action.payload };


    case types.EDIT_PROFILE_SUCCESS:
      return { ...state, chatErr: null };

    case types.FETCH_MY_CHATS_SECCESS:
    case types.FETCH_ALL_CHATS_SECCESS:
    case types.FETCH_CHAT_SECCESS:
    case types.CREATE_CHAT_SECCESS:
    case types.JOIN_CHAT_SECCESS:
    case types.DELETE_CHAT_SECCESS:
    case types.LIVE_CHAT_SECCESS:
    case types.SOCKETS_CONNECTION_SUCCESS:
      return { ...state, chatErr: null };

    case types.CLEAR_ERROR:
      return { auth: null, chatErr: null, prof: null };
    default:
      return state;
  }
  // return state;
}

function isConnected(state = initialState.isConnected, action) {
  // console.log{action.payload};
  switch (action.type) {
    case types.SOCKETS_CONNECTION_FAILURE:
    case types.SOCKETS_CONNECTION_MISSING:
      return false;
    case types.SOCKETS_CONNECTION_SUCCESS:
      return true;
    default:
      return state;
  }
  // return state;
}


export default combineReducers({
  isFetching,
  errors,
  isConnected,
});
