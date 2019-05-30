import React from 'react'
import PropTypes from 'prop-types'
import { size } from 'lodash'
import { connect } from 'react-redux'
import { compose, renderNothing, branch } from 'recompose'
import { notification } from 'antd';
import * as actions from '../actions'


export const Notifications = ({
  allIds,
  byId,
  dismissNotification
}) => {
  return (
  <div>
    {allIds.map(id => (
      notification.open({
        message: byId[id].message,
        description: '',
        onClick: () => dismissNotification(id),
      })
    ))}
  </div>
)
}

Notifications.propTypes = {
  allIds: PropTypes.array.isRequired,
  byId: PropTypes.object.isRequired,
  dismissNotification: PropTypes.func.isRequired
}

const enhance = compose(
  connect(
    ({ notifications: { allIds, byId } }) => ({ allIds, byId }),
    actions
  ),
  branch(props => !size(props.allIds), renderNothing)
)

export default enhance(Notifications)