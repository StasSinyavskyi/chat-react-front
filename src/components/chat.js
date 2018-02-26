import React, { Component } from 'react';
import Classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Typography from 'material-ui/Typography';

import AvatarText from '../utils/avatar-text';


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
  messageWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
  myMessageWrappper: {
    justifyContent: 'flex-end',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff'
  },
});



const Chat =({classes,messages})=>(
  <main className={classes.chatLayout}>
          <div className={classes.messagesWrapper}>
          {messages && messages.map((message, index) => {
            const myMessage = message.sender === 'me';
            const userAvatar = (
              <Avatar>
                {message.sender && AvatarText(message.sender)}
              </Avatar>
            );

            return (
              <div key={index} className={Classnames(
                classes.messageWrapper,
                myMessage && classes.myMessageWrappper)}>

                {!myMessage && userAvatar}
                <Paper className={Classnames(
                    classes.message,
                    myMessage && classes.myMessageWrappper)}>
                    <Typography variant="caption">
                      {message.sender}
                    </Typography>
                    <Typography variant="body1">
                      {message.content}
                    </Typography>
                  </Paper>

                {myMessage && userAvatar}
              </div>  
            ); 
          })} 
          </div>
          <div className={classes.messageInputWrapper}>
            <Paper className={classes.messageInput} elevation={6}>
              <Input fullWidth placeholder="Type your message…"/>
            </Paper>
          </div>
        </main>   
);


export default withStyles(Styles)(Chat);
