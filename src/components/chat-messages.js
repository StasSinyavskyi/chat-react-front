import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import Message from './message';

const Styles = theme =>({
  messagesWrapper: {
    overflowX: 'scroll',
    height: '100%',
    width: '100%',
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: '120px',
    marginLeft: 320,
  },
  paper: {
    padding: theme.spacing.unit * 3,
  },
  
});


class ChatMessages extends React.Component {
  componentDidMount(){
    this.scrolDown();
  }

  componentDidUpdate(){
    this.scrolDown();
  }
    
  scrolDown(){
    
   if (this.refs.blankdiv) {
     this.refs.blankdiv.scrollIntoView()
    }
  }

  render() {
    const {classes, messages, activeUser, activeChat} = this.props; 

    // If there's no active chat, then show a tip
    if (!activeChat) {
      return (
        <Paper className={classes.paper} >
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
    //console.log('messageS ',messages);
    return messages && messages.length ? (
      <div className={classes.messagesWrapper} >
        {messages && messages.map((message) =>(
          
          <Message  key={message._id} activeUser={activeUser} {...message}  />
          )) 
        }   
        <div ref="blankdiv"></div>       
      </div>
    ):(
      <Typography variant="display1">There is no messages yet...</Typography>
    )
  
  }
}
//comment

export default withStyles(Styles)(ChatMessages);
