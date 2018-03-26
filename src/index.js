import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import 'typeface-roboto/index.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store';

const rootElement = document.getElementById('root');

const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
  });
}

registerServiceWorker();
