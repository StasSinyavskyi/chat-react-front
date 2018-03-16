import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
//import {redirectto} from '../actions/services';

const Styles = theme =>({
 
  button: {
    display:'block',
  },
});


class ChatActionMenu extends React.Component {
  state = {
    anchorEl1: null,
  };

  
  handleClick = event => {
    this.setState({ anchorEl1: event.currentTarget });
  };

  

  
  handleLiveChat = (event) => {
    event.preventDefault();
  
    this.props.onLiveClick();
  }
  
  handleDeleteChat = (event) => {
    event.preventDefault();
  
    this.props.onDeleteClick();
    
  }

  render() {
    const { anchorEl1 } = this.state;

    const {classes,activeUser,}=  this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl1 ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}   
          className={classes.button}      
        >
          Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl1={anchorEl1}
          open={Boolean(anchorEl1)}
          onClose={this.handleClose}
        >
          {activeUser.isChatMember ? (
            <MenuItem onClick={this.handleLiveChat}>Live chat</MenuItem>
          ):(<nop/> )}
          {activeUser.isCreator ? (
            <MenuItem onClick={this.handleDeleteChat}>Delete chat</MenuItem>
          ):(<nop/> )}
          
        </Menu>
      </div>
    );
  }
}

export default withStyles(Styles)(ChatActionMenu);
