import React from 'react';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import Message from './message';

const Styles = theme =>({
  
  messagesWrapper: {
    overflowY : 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
  },
  
  
  
});


class ChatMessages extends React.Component {
  

  render() {
    const {classes, messages, activeUser, activeChat} = this.props; 

    // If there's no active chat, then show a tip
    if (!activeChat) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="display1" gutterBottom>
            Start messaging…
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Global</strong> to explore communities around here.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Use <strong>Recents</strong> to see your recent conversations.
          </Typography>
        </Paper>
      );
    }
    console.log('messageS ',messages);
    return messages && messages.length ? (
      <div className={classes.messagesWrapper} ref="messageswrapper">
        {messages && messages.map((message) => (
          <Message  key={message._id} activeUser={activeUser} {...message}  />
          )) 
        }          
      </div>
    ):(
      <Typography variant="display1">There is no messages yet...</Typography>
    )
  
  }
}

export default withStyles(Styles)(ChatMessages);
