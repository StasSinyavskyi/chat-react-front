import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
//import Hidden from 'material-ui/Hidden';
//import Classnames from 'classnames';
//import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import AddIcon from 'material-ui-icons/Add';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Avatar from './avatar';
import moment from 'moment';
import {Link} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';
import Typography from 'material-ui/Typography';

import NewChatButton from './new-chat-button';

const Styles = theme =>({
  drawerPaper: {
    //position: 'relative',
    height: '100%',
    width: 320,
    
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
  addChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
  noChats :{
    textAlign:'center',
  },
  activeChat:{
    backgroundColor: 'gray',
  },
});


class Sidebar extends React.Component {
  state = {
    searchValue: '',
    activeTab: 0,
  };

  handleSearchChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  handleTabChange = (event, value) => {
    this.setState({
      activeTab: value,
    });
  };

  filterChats = (chats) => {
    const { searchValue } = this.state;

    return chats
      .filter(chat => chat.title.toLowerCase().includes(searchValue.toLowerCase()))
      .sort((one, two) => (one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1));
  };

  render () {
    const {classes,chats, activeChat, createChat,isConnected} =this.props;
    const {activeTab}=this.state;
    const chatsRender=this.filterChats(activeTab === 0 ? chats.my : chats.all)
    //console.log('chats ',chats.all, chats.all.length);
    return(

      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <TextField fullWidth margin="normal" placeholder="Search chats..." onChange={this.handleSearchChange}
          disabled={!isConnected}/>
        </div>

        <Divider />

        <List className={classes.chatsList}>

          {chatsRender && chatsRender.length ? (

              chatsRender.map((chat) => ( 
              <ListItem key={chat._id} 
              button 
              component={Link}
              to={`/chat/${chat._id}`}
              className={activeChat && activeChat._id===chat._id ? classes.activeChat :''}
              disabled={!isConnected}
              >
                <Avatar textforcolorgen={chat.title}>
                  {chat.title}
                </Avatar>
                <ListItemText primary={chat.title} secondary={moment(chat.createdAt).fromNow()}/>
              </ListItem>
            ))
          ):(
            <Typography variant="subheading" className={classes.noChats}>
              no chats yet
            </Typography>  
          )
          
          }
        </List>

        <NewChatButton  onClick={createChat} disabled={!isConnected}/> 

        

        <BottomNavigation onChange={this.handleTabChange} showLabels>
          <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>    

      </Drawer>
)}};

export default withStyles(Styles)(Sidebar);
