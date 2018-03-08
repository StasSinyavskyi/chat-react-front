import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const rootElement=document.getElementById('root');

ReactDOM.render(<App />, rootElement);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(<App />, rootElement)
  })
}

registerServiceWorker();
