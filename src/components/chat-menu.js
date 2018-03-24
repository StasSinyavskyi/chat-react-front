import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
// import {redirectto} from '../actions/services';

const Styles = ({

  button: {
    display: 'block',
  },
});


class ChatMenu extends React.Component {
  static propTypes={
    toChat: PropTypes.func.isRequired,
    toProfile: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    isConnected: PropTypes.bool.isRequired,
  }

  state = {
    anchorEl: null,
  };


  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  handletoChat = (event) => {
    event.preventDefault();

    this.props.toChat();
  }

  handleChangeProfile = (event) => {
    event.preventDefault();

    this.props.toProfile();
  }

  handleLogout = (event) => {
    event.preventDefault();

    this.props.logout();
  }

  render() {
    const { anchorEl } = this.state;

    const { classes, isConnected } = this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.button}
          disabled={!isConnected}
        >
          Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handletoChat}>Chats</MenuItem>
          <MenuItem onClick={this.handleChangeProfile}>Profile</MenuItem>
          <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(Styles)(ChatMenu);
