/* eslint no-underscore-dangle: 0 */
import React from 'react';
import PropTypes from 'prop-types';
// import Classnames from 'classnames';
import { withStyles } from 'material-ui/styles';
import ChatMessages from './chat-messages';
import MessageInput from './message-input';
// import { joinChat } from '../actions';

const Styles = ({

  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    // background:'red',
  },
});

const Chat = ({
  classes, messages, activeUser, activeChat, sendMessage, joinChat, isConnected,
}) => (
  <main className={classes.chatLayout}>
    <ChatMessages messages={messages} activeUser={activeUser} activeChat={activeChat} />
    {activeChat && <MessageInput
      sendMessage={sendMessage}
      onJoinButtonClick={() => joinChat(activeChat._id)}
      activeUser={activeUser}
      showJoinButton={!activeUser.isChatMember}
      disabled={!isConnected}
    />}
  </main>
);

// class Chat extends React.Component {
//   render() {
//     const {
//       classes, messages, activeUser, activeChat, sendMessage, joinChat, isConnected,
//     } = this.props;
//     // console.log('activeUser 1 ', activeUser);
//     return (
//       <main className={classes.chatLayout}>
//         <ChatMessages messages={messages} activeUser={activeUser} activeChat={activeChat} />
//         {activeChat && <MessageInput
//           sendMessage={sendMessage}
//           onJoinButtonClick={() => joinChat(activeChat._id)}
//           activeUser={activeUser}
//           showJoinButton={!activeUser.isChatMember}
//           disabled={!isConnected}
//         />}
//       </main>
//     );
//   }
// }


Chat.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  messages: PropTypes.shape({
    chatId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    sender: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  activeUser: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
    isMember: PropTypes.bool.isRequired,
    isCreator: PropTypes.bool.isRequired,
    isChatMember: PropTypes.bool.isRequired,
  }).isRequired,
  activeChat: PropTypes.objectOf(PropTypes.object).isRequired,
  sendMessage: PropTypes.func.isRequired,
  joinChat: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default withStyles(Styles)(Chat);

// 60 line was changed because we use sockents for sending messages
// old 60 line below
// sendMessage={(content)=>sendMessage(activeChat._id,content)}
