import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';

import LoginForm from './login-form';
import SignupForm from './signup-form';

import ChatSettings from '../chat-settings';

const styles =theme =>({
  paper: {
    marginTop: 64 + theme.spacing.unit * 3,
    width: 500,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  }
})

class WelcomePage extends Component {
  state ={
    currentTab : 0,
  }

  handleTabchange = (event, value)=>{
    this.setState({currentTab : value});
  }

  render () {
    const {classes}=this.props;
    const {currentTab}=this.state;

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
                <Tab label='Login' />
                <Tab label='sign up' />
              </Tabs>  
            </AppBar>
            <div className={classes.tabContent}>
              {currentTab===0 && <LoginForm/>}
              {currentTab===1 && <SignupForm/>}
            </div>
          </Paper>
        </Grid>
      </React.Fragment>  
    )
  }

  
}


export default withStyles(styles)(WelcomePage);
