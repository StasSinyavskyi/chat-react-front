/* eslint no-use-before-define : 0 */ // 0- disable, 1- warning,  2- error
/* eslint no-underscore-dangle: 0 */
import { combineReducers } from 'redux';
import * as types from '../constants';// all types
// import { RECEIVE_NEW_CHAT } from '../constants';

// const token = localStorage.getItem('token');

// default state
const initialState = {
  activeId: null,
  allIds: [],
  myIds: [],
  byIds: [],
};


// reducer
const activeId = (state = initialState.activeId, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_CHAT:
    case types.CREATE_CHAT_SECCESS:
      return action.payload.chat._id;
    case types.UNSET_ACTIVE_CHAT:
    case types.DELETE_CHAT_SECCESS:
      return null;
    case types.RECIEVE_DELETED_CHAT:
      return state === getChatId(action.payload.chat) ? null : state;

    default:
      return state;
  }
};

// reducer
const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.FETCH_ALL_CHATS_SECCESS:
      return action.payload.chats.map(getChatId);
    case types.CREATE_CHAT_SECCESS:
    case types.RECIEVE_NEW_CHAT:
      return [...state, getChatId(action.payload.chat)];// add to array new chat id

    case types.JOIN_CHAT_SECCESS:
    case types.LIVE_CHAT_SECCESS:
      return state;
    case types.DELETE_CHAT_SECCESS:
    case types.RECIEVE_DELETED_CHAT:
      return state.filter(chatId => chatId !== getChatId(action.payload.chat));
    default:
      return state;
  }
};

// reducer
const myIds = (state = initialState.myIds, action) => {
  switch (action.type) {
    case types.FETCH_MY_CHATS_SECCESS:
      return action.payload.chats.map(getChatId);
    case types.LIVE_CHAT_SECCESS:
    case types.DELETE_CHAT_SECCESS:
    case types.RECIEVE_DELETED_CHAT:
      return state.filter(chatId => chatId !== getChatId(action.payload.chat));
    case types.CREATE_CHAT_SECCESS:
    case types.JOIN_CHAT_SECCESS:
      return [...state, getChatId(action.payload.chat)];
    default:
      return state;
  }
};

// reducer
const byIds = (state = initialState.byIds, action) => {
  const newState = { ...state };
  switch (action.type) {
    case types.FETCH_ALL_CHATS_SECCESS:
    case types.FETCH_MY_CHATS_SECCESS:
    // return new state
      return {
        ...state,
        // нужно из ответа апи вычленить ID чата и создать новый обьек где ID это ключ
        // а значение это обьект где все чте вернул апи
        ...action.payload.chats.reduce((ids, chat) => ({
          ...ids,
          [chat._id]: chat,
        }), {}),
      };
    case types.JOIN_CHAT_SECCESS:
    case types.LIVE_CHAT_SECCESS:
    case types.CREATE_CHAT_SECCESS:
    case types.RECIEVE_NEW_CHAT:
      return { ...state, [getChatId(action.payload.chat)]: action.payload.chat };
    case types.RECIEVE_DELETED_CHAT:
    case types.DELETE_CHAT_SECCESS:
      delete newState[getChatId(action.payload.chat)];
      return newState;
    default:
      return state;
  }
};


export default combineReducers({
  activeId,
  allIds,
  myIds,
  byIds,
});

// selectors They hepl to get some data from state
export const getChatId = chat => chat._id;
// export const getById = (chats, id) =>chats[id];
export const getById = (state, id) => state.byIds[id];
export const getByIds = (state, ids) => ids.map(id => state.byIds[id]);
