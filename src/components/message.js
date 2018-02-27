import React, { Component } from 'react';
import Classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from './avatar';

import Paper from 'material-ui/Paper';

import Typography from 'material-ui/Typography';


import AvatarText from '../utils/avatar-text';

const Styles = theme =>({
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



class Message extends React.Component {
  render () {
  const  {classes, sender, content} = this.props; 
  const myMessage = sender === 'me';
  //const title = AvatarText(sender)
    const userAvatar = (
      <Avatar textforcolorgen={sender}>
        {sender}
      </Avatar>
    );

    return (
      <div  className={Classnames(
        classes.messageWrapper,
        myMessage && classes.myMessageWrappper)}>

        {!myMessage && userAvatar}
        <Paper className={Classnames(
            classes.message,
            myMessage && classes.myMessageWrappper)}>
            <Typography variant="caption">
              {sender}
            </Typography>
            <Typography variant="body1">
              {content}
            </Typography>
          </Paper>

        {myMessage && userAvatar}
      </div>  
    );
} }

export default withStyles(Styles)(Message);
