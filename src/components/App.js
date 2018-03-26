import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import PrivateRoute from '../containers/private-route';
import WelcomePage from '../containers/welcome-page';
import ChatPage from '../containers/chat-page';
import Profile from '../containers/profile';

import history from '../utils/history';


const App = () => (

  <Router history={history}>
    <React.Fragment>
      <Switch>
        <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/(welcome)?" component={WelcomePage} />

        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  </Router>

);


export default (App);
