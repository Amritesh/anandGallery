import { compose, createStore } from 'redux'
import makeRootReducer from './reducers'
import {
  env
} from '../config'

export default (initialState = {}) => {
  const enhancers = []

  if (env === 'local') {
      enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  }
  
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(...enhancers)
  )

  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}