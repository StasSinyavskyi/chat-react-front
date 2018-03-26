/* eslint no-underscore-dangle: 0 */
import { combineReducers } from 'redux';
import auth from './auth';
import chats from './chats';
import services from './services';
import messages from './messages';

export default combineReducers({
  auth, chats, services, messages,
});


// selectors not connectet to any other group of reducers  (Independent)

export const getactiveUser = state => state.auth.user;
export const getUserId = user => user._id;

export const checkIsCreator = (state, chat) => {
  try {
    return getUserId(chat.creator) === getUserId(getactiveUser(state));
  } catch (e) {
    return false;
  }
};

export const checkIsMember = (state, chat) => {
  try {
    return chat.members.some(member => getUserId(member) === getUserId(getactiveUser(state)));
  } catch (e) {
    return false;
  }
};

export const checkIsChatMember = (state, chat) => checkIsCreator(state, chat) ||
checkIsMember(state, chat);
