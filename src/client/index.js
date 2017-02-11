import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/components/App';
import AppStore from './app/Appstore';

const appStore = new AppStore();

appStore.subscribeViews();

ReactDOM.render(
  <App appStore={appStore} />
, document.getElementById('app'));
