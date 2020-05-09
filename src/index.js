import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
