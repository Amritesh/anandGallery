import { combineReducers } from 'redux'
import { firebaseReducer as firebase } from 'react-redux-firebase'
import { reducer as form } from 'redux-form'
import { reducer as notifications } from 'modules/notification'
import locationReducer from './location'
import sideMenuReducer from './sideMenu'

export function makeRootReducer(asyncReducers) {
  return combineReducers({
    // Add sync reducers here
    firebase,
    form,
    notifications,
    location: locationReducer,
    sideMenu: sideMenuReducer,
    ...asyncReducers
  })
}

export function injectReducer(store, { key, reducer }) {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
