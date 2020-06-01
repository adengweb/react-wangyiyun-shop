import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './App';
import http from './tools/http'

import 'antd-mobile/dist/antd-mobile.css';
import './assets/style/root.scss';
import * as serviceWorker from './serviceWorker';

React.$api = http;
ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

serviceWorker.unregister();
