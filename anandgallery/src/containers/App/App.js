import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import { 
  reduxFirebase as rrfConfig,
} from 'config'

const App = ({ store, routes }) => {
  const defaultRRFConfig = {
    userProfile: 'users', // root that user profiles are written to
    updateProfileOnLogin: false, // enable/disable updating of profile on login
    presence: 'presence', // list currently online users under "presence" path in RTDB
    sessions: null, // Skip storing of sessions
    enableLogging: false // enable/disable Firebase Database Logging
  }
  
  // Combine default config with overrides if they exist (set within .firebaserc)
  const combinedConfig = rrfConfig
    ? { ...defaultRRFConfig, ...rrfConfig }
    : defaultRRFConfig

  const rrfProps = {
    firebase,
    config: combinedConfig,
    dispatch: store.dispatch,
    store: store
  }
  return (  
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>{routes}</Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

App.propTypes = {
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default App
