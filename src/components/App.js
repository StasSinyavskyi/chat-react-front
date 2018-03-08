import React, { Component } from 'react';
import {Router, Route, Link, Switch, Redirect } from 'react-router-dom';
//import Switch from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import {Provider} from 'react-redux';
//import { chats, messages } from '../mock-data';

import PrivateRoute from '../containers/private-route';
import WelcomePage from '../containers/welcome-page';
import ChatPage from '../containers/chat-page';

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

const store = configureStore();

const App = ()=>(
  <Provider store={store}>
    <Router history={history}>
      <React.Fragment>
        <Switch>
          <PrivateRoute exact path='/chat' component={ChatPage} />
          <Route path='/(welcome)?' component={WelcomePage} />
          <Redirect to='/' />
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
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
