export const env = 'local'

// Config for firebase
export const firebase = {
    apiKey: 'AIzaSyCu0U3Ov6RQJIrpnk6syc0asXHYmIq0Qzc',
    authDomain: 'anandmuseum.firebaseapp.com',
    databaseURL: 'https://anandmuseum.firebaseio.com',
    storageBucket: 'anandmuseum.appspot.com',
    messagingSenderId: '678369489922',
    projectId: 'anandmuseum'
}

// Config to override default reduxFirebase config in store/createStore
// which is not environment specific.
// For more details, visit http://react-redux-firebase.com/docs/api/enhancer.html
export const reduxFirebase = {
  enableLogging: false, // enable/disable Firebase Database Logging
}

export default {
  env,
  firebase,
  reduxFirebase
}
