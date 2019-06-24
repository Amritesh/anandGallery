import React from 'react'
import { Loadable } from 'utils/components'
import {
  NUMISMATICS_PATH,
  PHILATELY_PATH,
  GARDENING_PATH
} from 'constants/paths'

export default [
  {
    path: NUMISMATICS_PATH,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: 'Numismatics' */ './components/CollectionPage'
        ),
      render(loaded, props) {
        let Component = loaded.default
        return <Component {...props} path={NUMISMATICS_PATH} />
      }
    })
  },
  {
    path: PHILATELY_PATH,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: 'Numismatics' */ './components/CollectionPage'
        ),
      render(loaded, props) {
        let Component = loaded.default
        return <Component {...props} path={PHILATELY_PATH} />
      }
    })
  },
  {
    path: GARDENING_PATH,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: 'Numismatics' */ './components/CollectionPage'
        ),
      render(loaded, props) {
        let Component = loaded.default
        return <Component {...props} path={GARDENING_PATH} />
      }
    })
  }
]
