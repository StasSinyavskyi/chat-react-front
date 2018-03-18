import React, { Component } from 'react';
import Classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from './avatar';

import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Typography from 'material-ui/Typography';

import ChatMessages from './chat-messages';
import MessageInput from './message-input';
import { joinChat } from '../actions';

const Styles = theme =>({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    //overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  
  
});



class Chat extends React.Component {
  componentDidMount(){
    this.scrolDown();
  }

  componentDidUpdate(){
    this.scrolDown();
  }
 // state = {
  //  mobileOpen: false,
 // }; 
   
  scrolDown(){
    const messagesWrapper=this.refs.messageswrapper;
    //console.log(messagesWrapper.scrollHeight);
    if (messagesWrapper){
      messagesWrapper.scrollTop=messagesWrapper.scrollHeight;
      
    }
  }
  render() {
    const {classes, messages,activeUser,activeChat, sendMessage,joinChat} = this.props;
    console.log('activeUser 1 ', activeUser);
    return( 
      <main className={classes.chatLayout}>
          <ChatMessages messages={messages} activeUser={activeUser} activeChat={activeChat}/>
          <MessageInput 
            sendMessage={(content)=>sendMessage(activeChat._id,content)}
            onJoinButtonClick={() => joinChat(activeChat._id)}
            activeUser={activeUser}
            showJoinButton={!activeUser.isChatMember}
          />
      </main>   
);
}}

export default withStyles(Styles)(Chat);
