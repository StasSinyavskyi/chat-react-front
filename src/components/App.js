import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
//import Switch from 'react-router-dom';
import { withStyles } from 'material-ui/styles';

//import { chats, messages } from '../mock-data';

import WelcomePage from './welcome-page';
import ChatPage from './chat-page';
 
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
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path='/chat' component={ChatPage} />
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
