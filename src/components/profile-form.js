import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import {Redirect} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
//import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import Chatheader from './chat-header';

//import ChatSettings from '../chat-settings';

const styles =theme =>({
  paper: {
    marginTop: 64 + theme.spacing.unit * 3,
    width: 500,
  },
  tabContent: {
    padding: theme.spacing.unit * 3,
  },
  submitButton: {
    marginTop: theme.spacing.unit * 2,
  },
  profileTitle:{
    padding: theme.spacing.unit * 3,
  },
})

class ProfileEdit extends Component {
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
  
  handleInputChange = (event) => {
    event.persist();
    
    const { name, value } = event.target;
    console.log(name,value);
    //console.log(name +" "+ value+" ");
    this.setFormState(name,value);
    
  }

  setFormState=(name,value)=>{
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  }


  handleSubmit = (event) => {
    event.preventDefault();
    
    const { username, firstname, lastname } = this.state;

    //console.log('Login:', username.value, password.value);

    this.props.editProfile(username.value,firstname.value,lastname.value,);
    
    
  }
  
  componentDidMount(){
    const {receiveAuth}=this.props;

    Promise.all([
      receiveAuth(),
      
     ]).then(()=>{
      const {user}=this.props; 
      if (user) {
          this.setFormState('username',user.username);
          this.setFormState('firstname',user.firstName);
          this.setFormState('lastname',user.lastName);
          
      }
     })
  }

  
  render () {
    const {user,classes,isUserAuthentificated}=this.props;
    const { username,firstname,lastname}=this.state;
   

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
      </React.Fragment>  
    )
  }

  
}


export default withStyles(styles)(ProfileEdit);
