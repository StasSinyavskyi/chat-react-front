import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

import LoginForm from './login-form';
import SignupForm from './signup-form';

import ChatSettings from '../chat-settings.json';
import ErrorMessage from './error-message';

const styles = theme => ({
  paper: {
    marginTop: 64 + (theme.spacing.unit * 3),
    width: 500,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  },
});

class WelcomePage extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    signup: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isUserAuthentificated: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error),
    clearErrors: PropTypes.func.isRequired,
    recieveAuth: PropTypes.func.isRequired,
  }

  static defaultProps={
    error: null,
  }

  state ={
    currentTab: 0,
  }


  componentDidMount() {
    this.props.recieveAuth();
  }

  handleTabchange = (event, value) => {
    this.setState({ currentTab: value });
  }

  render() {
    const {
      classes, signup, login, isUserAuthentificated, error, clearErrors,
    }
       = this.props;

    const { currentTab } = this.state;

    if (isUserAuthentificated) {
      // redirect to chatPage
      return (
        <Redirect to="./chat" />
      );
    }

    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
              {ChatSettings.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Paper className={classes.paper}>
            <AppBar position="static" color="default">
              <Tabs value={currentTab} onChange={this.handleTabchange} fullWidth>
                <Tab label="Login" />
                <Tab label="sign up" />
              </Tabs>
            </AppBar>
            <div className={classes.tabContent}>
              {currentTab === 0 && <LoginForm onSubmit={login} />}
              {currentTab === 1 && <SignupForm onSubmit={signup} />}
            </div>
          </Paper>
        </Grid>
        <ErrorMessage errors={error} clearErrors={clearErrors} />
      </React.Fragment>
    );
  }
}


export default withStyles(styles)(WelcomePage);
