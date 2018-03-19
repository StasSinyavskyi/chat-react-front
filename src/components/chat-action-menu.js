import React from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
//import {redirectto} from '../actions/services';

const Styles = theme =>({
 
  button: {
    //display:'block',
  },
});


class ChatActionMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
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
    const { anchorEl } = this.state;

    const {classes,activeUser,}=  this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}   
          className={classes.button}      
        >
          Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {activeUser.isChatMember ? (
            <MenuItem onClick={this.handleLiveChat}>Live chat</MenuItem>
          ):(<div/> )}
          {activeUser.isCreator ? (
            <MenuItem onClick={this.handleDeleteChat}>Delete chat</MenuItem>
          ):(<div/> )}
          
        </Menu>
      </div>
    );
  }
}

export default withStyles(Styles)(ChatActionMenu);
