import React from 'react';

import { withStyles } from 'material-ui/styles';

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
    const {classes, messages, activeUser} = this.props; 
    return(
      <div className={classes.messagesWrapper} ref="messageswrapper">
        {messages && messages.map((message, index) => (
          <Message key={index} {...message} />
          )) 
        }          
      </div>
    )
  }
}

export default withStyles(Styles)(ChatMessages);
