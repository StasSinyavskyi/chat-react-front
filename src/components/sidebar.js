import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';
import Classnames from 'classnames';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import AddIcon from 'material-ui-icons/Add';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';

import AvatarText from '../utils/avatar-text'

import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';


const Styles = theme =>({
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
});

const Sidebar =({classes,chats})=>(
  <div>
    <div className={classes.drawerHeader}>
      <TextField fullWidth margin="normal" placeholder="Search chats..." />
    </div>

    <Divider />

    <List className={classes.chatsList}>
      {chats.map((chat, index) => ( 
        <ListItem key={index} button>
          <Avatar>{chat.title && AvatarText(chat.title)}</Avatar>
          <ListItemText primary={chat.title}/>
        </ListItem>
      ))}
    </List>

    <Button variant="fab" color="primary" className={classes.addChatButton}>
      <AddIcon />
    </Button>  

    <BottomNavigation showLabels>
      <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
    </BottomNavigation>    

  </div>
);

export default withStyles(Styles)(Sidebar);
