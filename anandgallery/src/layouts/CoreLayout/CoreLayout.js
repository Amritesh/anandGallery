
import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../containers/Navbar'
import { Notifications } from 'modules/notification'

export const CoreLayout = ({ children }) => (
  <div>
    <Navbar/>
    <div>{children}</div>
    <Notifications />
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout