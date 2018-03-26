import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import Chatheader from './chat-header';
import ErrorMessage from './error-message';

// import ChatSettings from '../chat-settings';

const styles = theme => ({
  paper: {
    marginTop: 64 + (theme.spacing.unit * 3),
    width: 500,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  },
  submitButton: {
    marginTop: theme.spacing.unit * 2,
  },
  profileTitle: {
    padding: theme.spacing.unit * 3,
  },
});

class ProfileEdit extends Component {
  static propTypes = {
    recieveAuth: PropTypes.func.isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      username: PropTypes.string,
      isMember: PropTypes.bool.isRequired,
      isCreator: PropTypes.bool.isRequired,
      isChatMember: PropTypes.bool.isRequired,
    }).isRequired,
    editProfile: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    error: PropTypes.instanceOf(Error),
    clearErrors: PropTypes.func.isRequired,
  }

  static defaultProps={
    error: null,
  }

  state = {
    username: {
      value: '',
      isValid: true,
    },
    firstname: {
      value: '',
      isValid: true,
    },
    lastname: {
      value: '',
      isValid: true,
    },
  }

  componentDidMount() {
    const { recieveAuth } = this.props;

    Promise.all([
      recieveAuth(),

    ]).then(() => {
      const { user } = this.props;
      if (user) {
        this.setFormState('username', user.username);
        this.setFormState('firstname', user.firstName);
        this.setFormState('lastname', user.lastName);
      }
    });
  }

  setFormState=(name, value) => {
    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  }

  handleInputChange = (event) => {
    event.persist();

    const { name, value } = event.target;
    // console.log(name, value);
    // console.log(name +" "+ value+" ");
    this.setFormState(name, value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, firstname, lastname } = this.state;
    this.props.editProfile(username.value, firstname.value, lastname.value);
  }


  render() {
    const {
      classes, error, clearErrors,
    } = this.props;
    const { username, firstname, lastname } = this.state;


    return (
      <React.Fragment>
        <Chatheader />
        <Grid container justify="center">
          <Paper className={classes.paper}>
            <AppBar position="static" color="default">
              <Typography variant="title" color="inherit" className={classes.profileTitle}>
                Profile edit
              </Typography>
            </AppBar>
            <div className={classes.tabContent}>
              <form onSubmit={this.handleSubmit}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  placeholder="Type new username..."
                  type="text"
                  name="username"
                  margin="normal"
                  autoComplete="username"
                  value={username.value}
                  onChange={this.handleInputChange}
                  error={!username.isValid}
                />
                <TextField

                  fullWidth
                  label="First name"
                  placeholder="Type your first name..."
                  type="text"
                  name="firstname"
                  margin="normal"
                  autoComplete="firstname"
                  value={firstname.value}
                  onChange={this.handleInputChange}
                  error={!firstname.isValid}
                />
                <TextField

                  fullWidth
                  label="Last name"
                  placeholder="Type your last name..."
                  type="text"
                  name="lastname"
                  margin="normal"
                  autoComplete="lastname"
                  value={lastname.value}
                  onChange={this.handleInputChange}
                  error={!lastname.isValid}
                />

                <Button
                  fullWidth
                  variant="raised"
                  type="submit"
                  color="primary"
                  className={classes.submitButton}
                >
                  Save
                </Button>
              </form>
            </div>
          </Paper>
        </Grid>
        <ErrorMessage errors={error} clearErrors={clearErrors} />
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(ProfileEdit);
