import React, { Component } from 'react';

import Classnames from 'classnames';

import { withStyles } from 'material-ui/styles';







import Button from 'material-ui/Button';






import AddIcon from 'material-ui-icons/Add';
 



import { chats, messages } from './mock-data';

import SidebarWrap from './components/sidebar-wrap';
import Chatheader from './components/chat-header';
import Chat from './components/chat';
 
const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  
  
  
})

class App extends Component {
 // state = {
  //  mobileOpen: false,
 // }; 
  
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

export default withStyles(styles)(App);
