import React from 'react';
import { render } from 'react-dom';
import firebase from 'firebase/app'
import App from './containers/App'

import createStore from './store/createStore'
import { 
  firebase as fbConfig,
  env } from 'config'
import './index.css';
window.env = env

const initialState = window.___INITIAL_STATE__ || {
  firebase: { authError: null }
}

firebase.initializeApp(fbConfig)
const store = createStore(initialState)
const routes = require('./routes/index').default(store)

render(
  <App store={store} routes={routes} />,
  document.getElementById('root')
)