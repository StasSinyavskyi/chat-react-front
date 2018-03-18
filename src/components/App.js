import React, { Component } from 'react';
import {Router, Route, Link, Switch, Redirect } from 'react-router-dom';
//import Switch from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
//import {Provider} from 'react-redux';
//import { chats, messages } from '../mock-data';

import PrivateRoute from '../containers/private-route';
import WelcomePage from '../containers/welcome-page';
import ChatPage from '../containers/chat-page';
import Profile from '../containers/profile';


import history from '../utils/history';

import configureStore from '../store';
 
const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  
  
  
})



const App = ()=>(
  
    <Router history={history}>
      <React.Fragment>
        <Switch>
          <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
          <PrivateRoute path='/profile' component={Profile} />
          <Route path='/(welcome)?' component={WelcomePage} />
          
          <Redirect to='/' />
        </Switch>
      </React.Fragment>
    </Router>
  
)


//class App extends Component {

 

 // render() {
 //   const { classes } = this.props;

    

 //   return (
 //     <div className={classes.root}>
          
 //       <Chatheader />

  //      <SidebarWrap chats={chats} />

 //       <Chat messages={messages} />
        
 //     </div>
 //   );
 // }
//}

export default (App);
