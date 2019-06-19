import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'containers/Navbar'
import SideMenu from 'containers/SideMenu'
import { Notifications } from 'modules/notification'

export const CoreLayout = ({ children, classes }) => (
  <div className={classes.container}>
    <Navbar />
    <SideMenu />
    <div className={classes.toolbar} />
    <div className={classes.children}> {children} </div> <Notifications />
  </div>
)

CoreLayout.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  children: PropTypes.element.isRequired
}

export default CoreLayout
