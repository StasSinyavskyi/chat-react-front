import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';


import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';



const Styles = theme =>({
  
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



class MessageInput extends React.Component {
 
  render() {
    const {classes} = this.props;
    return(    
      <div className={classes.messageInputWrapper}>
        <Paper className={classes.messageInput} elevation={6}>
          <Input fullWidth placeholder="Type your message…"/>
        </Paper>
      </div>    
);
}}

export default withStyles(Styles)(MessageInput);
