import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';

import ChatSettings from '../chat-settings';
import Avatar from './avatar';
import ChatHeaderMenu from '../containers/chat-header-menu';
import ChatActionMenu from './chat-action-menu';
import { liveChat } from '../actions';

const Styles = theme =>({
  appBar: {
    position: 'fixed',
    
    //width: `calc(100% - 320px)`,
    marginLeft: 320,
    backgroundColor:'green',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${320}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appToolBar:{
    display: 'flex',
    'justify-content':'space-between',
  },
  appBarTitle:{
    flex:1,
    marginLeft:theme.spacing.unit *2,
    marginRight:theme.spacing.unit *2,
    color:theme.palette.secondary.contrasText,
  }
});



const Chatheader =({classes,activeChat,activeUser,liveChat,deleteChat})=>(
  <AppBar color="primary" className={classes.appBar}>
    <Toolbar className={classes.appToolBar}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={this.handleDrawerToggle}
        className={classes.navIconHide}
        > 
        </IconButton>
        {console.log('act chat ',activeChat)}
        {activeChat ? (
          <React.Fragment>
            <Avatar colorFrom={activeChat._id}>
              {activeChat.title}
            </Avatar> 
            <Typography variant="title" color="inherit" noWrap>
              {activeChat.title} 
              <ChatActionMenu 
                activeUser={activeUser}
                onLiveClick={()=>liveChat(activeChat._id)}
                onDeleteClick={()=>deleteChat(activeChat._id)}
              />          
            </Typography>
          </React.Fragment>
          ):(
            <Typography variant="title" color="inherit" noWrap>
              {ChatSettings.title}
              
            </Typography>
          ) 
        }

      
      <ChatHeaderMenu />
    </Toolbar>
    
  </AppBar>   
);


export default withStyles(Styles)(Chatheader);
