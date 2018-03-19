import {connect} from 'react-redux';
import ChatPage from '../components/chat-page'
import {fetchAllChats,fetchMyChats,setActiveChat,logout,createChat,deleteChat,liveChat,joinChat,editProfile,} from '../actions'
import {sendMessage, mountchat, unmountchat, socketsConnect} from '../actions/sockets';
import {clearErrors} from '../actions/services';
import * as fromChats from '../reducers/chats';
import * as fromState from '../reducers';
//import {logout} from '../actions';
import {bindActionCreators} from 'redux';

//import chat from '../components/chat';

const mapStateToProps = state =>{
  //use selectors
  const chatId=null;
  try {
    const { match: { params: {chatId} } } = this.props;
  }
  catch (e){
    const chatId=null;
  }
  //console.log ('chatId ',chatId);
  const activeChat = fromChats.getById(state.chats, state.chats.activeId);
  
 //console.log ('chats ',state.chats);
 //console.log ('activeId ',state.chats.activeId);
 //console.log ('activeChat in container',activeChat);
  //chats: fromChats.getByIds(state.chats,state.chats.allIds), 
  return {
    isAuthentificated: state.auth.isUserAuthentificated,
    chats:{
      active:activeChat,
      my:fromChats.getByIds(state.chats, state.chats.myIds),
      all:fromChats.getByIds(state.chats, state.chats.allIds),
    },
    activeUser:{
      ...state.auth.user,
      isMember:fromState.checkIsMember(state,activeChat),
      isCreator:fromState.checkIsCreator(state,activeChat),
      isChatMember:fromState.checkIsChatMember(state,activeChat),
    },
    messages: state.messages,
    error:state.services.errors.chatErr,
    isConnected: state.services.isConnected,
    //activeChat: activeChat,
  };

};

const mapDispatchToProps = dispatch=>bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  logout,
  createChat,
  deleteChat,
  liveChat,
  joinChat,
  sendMessage,
  editProfile,
  mountchat, 
  unmountchat, 
  socketsConnect,
  clearErrors,
},dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);
