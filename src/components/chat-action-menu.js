import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
// import {redirectto} from '../actions/services';

/* elsint disable no-unused-vars */
const Styles = ({

  button: {
    display: 'flex',

  },
});


class ChatActionMenu extends React.Component {
  static propTypes={
    onLiveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    activeUser: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string,
      isMember: PropTypes.bool.isRequired,
      isCreator: PropTypes.bool.isRequired,
      isChatMember: PropTypes.bool.isRequired,
    }).isRequired,
    disabled: PropTypes.bool.isRequired,
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

    const { classes, activeUser, disabled } = this.props;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          className={classes.button}
          disabled={disabled}
        >
          Action
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {activeUser.isChatMember ? (
            <MenuItem onClick={this.handleLiveChat}>Live chat</MenuItem>
          ) : (<div />)}
          {activeUser.isCreator ? (
            <MenuItem onClick={this.handleDeleteChat}>Delete chat</MenuItem>
          ) : (<div />)}

        </Menu>
      </div>
    );
  }
}

export default withStyles(Styles)(ChatActionMenu);
