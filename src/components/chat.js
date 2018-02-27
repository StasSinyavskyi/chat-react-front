import React, { Component } from 'react';
import Classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from './avatar';

import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Typography from 'material-ui/Typography';

import Message from './message';
import MessageInput from './message-input';

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
  messagesWrapper: {
    overflowY : 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  messageInputWrapper: {
    position: 'fixed',
    left: 'auto',
    right: 0,
    bottom: 0,
    width: `calc(100% - 320px)`,
    padding: theme.spacing.unit * 3,
  },
  messageInput: {
    padding: theme.spacing.unit * 2,
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
    const {classes, messages} = this.props;
    return( 
      <main className={classes.chatLayout}>
          <div className={classes.messagesWrapper} ref="messageswrapper">
            {messages && messages.map((message, index) => (
              <Message key={index} {...message} />
              )) 
            }          
          </div>
          <MessageInput />
      </main>   
);
}}

export default withStyles(Styles)(Chat);
