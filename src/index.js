import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './App';
import './assets/style/root.scss';
import 'antd-mobile/dist/antd-mobile.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

serviceWorker.unregister();
