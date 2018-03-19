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
   const {fetchAllChats, fetchMyChats,setActiveChat,match,socketsConnect,mountchat} =this.props;

   Promise.all([
    fetchAllChats(),
    fetchMyChats()
   ])
   .then(()=>{
      socketsConnect();
   })
   .then(()=>{
     const {chatId}=match.params;
     //if we pass chatId then fetch message from chat
     if (chatId){
       setActiveChat(chatId);
       mountchat(chatId)
     }
   })

  
   }


   componentWillReceiveProps(nextProps) {
    const {
      match: { params }, setActiveChat, unmountchat, mountchat,chats:{active}} = this.props;
    const { params: nextParams } = nextProps.match;
    //console.log('activeChat ',active);
    // If we change route (room), then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      
      
      //console.log('params.chatId ',params.chatId);
      //console.log('nextParams.chatId ',nextParams.chatId);
      //console.log('activeChat 2 ',active);
      setActiveChat(nextParams.chatId);
      //change room from old to new. We work ONLY with one rum at a moment
      unmountchat(params.chatId);
      mountchat(nextParams.chatId);
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
