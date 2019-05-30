import { compose, withHandlers } from 'recompose'
import * as actions from '../actions'

const withNotifications = compose(
  withHandlers({
    showError: ({ dispatch }) => err => actions.showError(err)(dispatch),
    showSuccess: ({ dispatch }) => err => actions.showSuccess(err)(dispatch),
    dismissNotification: ({ store }) => id =>
      actions.dismissNotification(id)(store.dispatch)
  })
)

export default withNotifications