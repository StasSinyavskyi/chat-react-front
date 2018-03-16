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
   const {fetchAllChats, fetchMyChats} =this.props;

   Promise.all([
    fetchAllChats(),
    fetchMyChats()
   ])
   }

  render() {
    const { classes, ...rest} = this.props;
    
    return (
      <div className={classes.root}>
          
        <Chatheader {...rest}  />

       <SidebarWrap {...rest} />

        <Chat {...rest} />
        
      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
