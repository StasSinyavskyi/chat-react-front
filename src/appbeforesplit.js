import React, { Component } from 'react';

import Classnames from 'classnames';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';

import RestoreIcon from 'material-ui-icons/Restore';
import ExploreIcon from 'material-ui-icons/Explore';
import AddIcon from 'material-ui-icons/Add';
import MenuIcon from 'material-ui-icons/Menu';

import AvatarText from './utils/avatar-text'

import { chats, messages } from './mock-data';



const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  appBar: {
    position: 'fixed',
    //width: `calc(100% - 320px)`,
    marginLeft: 320,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${320}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    //position: 'relative',
    //height: '100%',
    //width: 320,
    //overflow: 'scroll',
    [theme.breakpoints.up('md')]: {
      width: 320,
      position: 'relative',
      height: '100%',
      //backgroundColor: 'red',
    },
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
})

class App extends Component {
  state = {
    mobileOpen: false,
  };
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  render() {
    const { classes } = this.props;

    const drawer = (
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

    return (
      <div className={classes.root}>
        <AppBar color="primary" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
             > 
              <MenuIcon />
              </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              My lucky Chat
            </Typography>
          </Toolbar>
        </AppBar>      

         <Hidden mdUp>
          <Drawer 
            variant="temporary" 
            open={this.state.mobileOpen} 
            classes={{paper: classes.drawerPaper}}
            onClose={this.handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            >
          {drawer} 
          </Drawer>
        </Hidden>
          
        <Hidden smDown implementation="css">
          <Drawer variant="permanent" open classes={{paper: classes.drawerPaper}}>
          {drawer}

          </Drawer>

        </Hidden>  


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
      </div>
    );
  }
}

export default withStyles(styles)(App);
