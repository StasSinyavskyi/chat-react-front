/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


jest.mock('../containers/private-route', () => () => 'PrivateRoute');
jest.mock('../containers/welcome-page', () => () => 'WelcomePage');
jest.mock('../containers/chat-page', () => () => 'ChatPage');


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
