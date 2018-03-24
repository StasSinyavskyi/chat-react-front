/* eslint no-underscore-dangle: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import Typography from 'material-ui/Typography';

import ChatSettings from '../chat-settings.json';
import Avatar from './avatar';
import ChatHeaderMenu from '../containers/chat-header-menu';
import ChatActionMenu from './chat-action-menu';

const Styles = theme => ({
  appBar: {
    position: 'fixed',
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'align-items': 'center',
    // width: `calc(100% - 320px)`,
    marginLeft: 320,
    backgroundColor: 'green',
    width: `calc(100% - ${320}px)`,

  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appToolBar: {
    display: 'flex',
    // 'justify-content':'space-between',
  },
  appBarTitle: {
    // flex:1,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.secondary.contrasText,
  },
  actionMenu: {
    // flex:2,
  },
  chatHeaderMenu: {
    display: 'flex',
    // marginLeft: 'calc(100% - 50px)',
    // border:'2px',
  },
});


const Chatheader = ({
  classes, activeChat, activeUser, liveChat, deleteChat, isConnected,
}) => (
  <AppBar color="primary" className={classes.appBar}>
    <Toolbar className={classes.appToolBar}>

      {activeChat ? (
        <React.Fragment>
          <Avatar textforcolorgen={activeChat.title}>
            {activeChat.title}
          </Avatar>
          <Typography variant="title" color="inherit" className={classes.appBarTitle}>
            {activeChat.title}

          </Typography>
          <ChatActionMenu
            disabled={!isConnected}
            activeUser={activeUser}
            onLiveClick={() => liveChat(activeChat._id)}
            onDeleteClick={() => deleteChat(activeChat._id)}
            className={classes.actionMenu}
          />
        </React.Fragment>
          ) : (
            <Typography variant="title" color="inherit" noWrap className={classes.appBarTitle}>
              {ChatSettings.title}

            </Typography>
          )
        }


    </Toolbar>
    <ChatHeaderMenu className={classes.chatHeaderMenu} />
  </AppBar>
);

Chatheader.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  activeChat: PropTypes.objectOf(PropTypes.object).isRequired,
  activeUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool.isRequired,
  }).isRequired,
  liveChat: PropTypes.func.isRequired,
  deleteChat: PropTypes.func.isRequired,
  isConnected: PropTypes.func.isRequired,
};

export default withStyles(Styles)(Chatheader);
