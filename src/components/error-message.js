import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

class ErrorMessage extends React.Component {
  
  static defaultProps = {
    error: null,
  };


  state = {
    open: false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ open: true });
    }
  }

  handleCloseSnackbar = () => {
    this.setState({ open: false });
    
    this.props.clearErrors();
    
  };

  render() {
    const { errors } = this.props;

    if (!errors) {
      return null;
    }

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleCloseSnackbar}
        message={<span>{errors.message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleCloseSnackbar}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}

export default ErrorMessage;
