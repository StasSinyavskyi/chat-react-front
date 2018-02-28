import React, { Component } from 'react';
import {BrowserRouter as Router, Rute, Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';

import { chats, messages } from '../mock-data';

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

 

  render() {
    const { classes } = this.props;

    

    return (
      <div className={classes.root}>
          
        <Chatheader />

       <SidebarWrap chats={chats} />

        <Chat messages={messages} />
        
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
