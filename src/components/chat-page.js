import React, { Component } from 'react';
//import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';

import {  messages } from '../mock-data';

import SidebarWrap from './sidebar-wrap';
import Chatheader from './chat-header';
import Chat from './chat';
 
const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },

})


class ChatPage extends Component {

 componentDidMount(){
   const {fetchAllChats, fetchMyChats,setActiveChat} =this.props;

   Promise.all([
    fetchAllChats(),
    fetchMyChats()
   ])

   //const { chatId } = match.params;
        // If we pass a chatId, then fetch messages from chat
        // if (chatId) {
        //   setActiveChat(chatId);
        //   //mountChat(chatId);
        // }
   }


   componentWillReceiveProps(nextProps) {
    const {
      match: { params }, setActiveChat, //unmountChat, mountChat,
    } = this.props;
    const { params: nextParams } = nextProps.match;

    // If we change route, then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      //console.log('nextParams.chatId ',nextParams.chatId);
      setActiveChat(nextParams.chatId);
     // unmountChat(params.chatId);
     // mountChat(nextParams.chatId);
    }
  }



  render() {
    const { classes, ...rest} = this.props;
    const {chats, chats:{active}}=this.props;
    //const {chatId} =this.state;
    //console.log(' chats ',chats);
    //console.log(' chats  activeChat',active);
    return (
      <div className={classes.root}>
          
        <Chatheader activeChat={active} {...rest}  />

       <SidebarWrap activeChat={active} {...rest} />

        <Chat activeChat={active} {...rest} />
        
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
