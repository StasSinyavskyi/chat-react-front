import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import SidebarWrap from './sidebar-wrap';
import Chatheader from './chat-header';
import Chat from './chat';
import ErrorMessage from './error-message';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },

});


class ChatPage extends Component {
  static propTypes={
    fetchAllChats: PropTypes.func.isRequired,
    fetchMyChats: PropTypes.func.isRequired,
    setActiveChat: PropTypes.func.isRequired,
    socketsConnect: PropTypes.func.isRequired,
    mountchat: PropTypes.func.isRequired,
    unmountchat: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.object.isRequired,
    }).isRequired,
    chats: PropTypes.shape({
      active: PropTypes.object,
      my: PropTypes.array.isRequired,
      all: PropTypes.array.isRequired,
    }).isRequired,
    active: PropTypes.objectOf(PropTypes.object).isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    error: PropTypes.instanceOf(Error),
  }

  static defaultProps={
    error: null,
  }

  componentDidMount() {
    const {
      fetchAllChats, fetchMyChats, setActiveChat, match, socketsConnect, mountchat,
    } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ])
      .then(() => {
        socketsConnect();
      })
      .then(() => {
        const { chatId } = match.params;
        // if we pass chatId then fetch message from chat
        if (chatId) {
          setActiveChat(chatId);
          mountchat(chatId);
        }
      });
  }


  componentWillReceiveProps(nextProps) {
    const {
      match: { params }, setActiveChat, unmountchat, mountchat,
    } = this.props;
    const { params: nextParams } = nextProps.match;
    // If we change route (room), then fetch messages from chat by chatID
    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      // change room from old to new. We work ONLY with one rum at a moment
      unmountchat(params.chatId);
      mountchat(nextParams.chatId);
    }
  }


  render() {
    const { classes, error, ...rest } = this.props;
    const { chats: { active } } = this.props;
    return (
      <div className={classes.root}>

        <Chatheader activeChat={active} {...rest} />

        <SidebarWrap activeChat={active} {...rest} />

        <Chat activeChat={active} {...rest} />

        <ErrorMessage errors={error} {...rest} />

      </div>
    );
  }
}

export default withStyles(styles)(ChatPage);
