import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'

export const SideMenu = ({
  open,
  authExists,
  classes,
  closeSideMenuIfOpen
}) => (
  <Drawer
    open={open}
    onClick={closeSideMenuIfOpen}
    anchor={'left'}
    variant="persistent">
    <div className={classes.toolbar} />
    {!authExists ? null : (
      <div>
        <List
          style={{
            width: 300
          }}
        />{' '}
        {'Amritesh'}{' '}
      </div>
    )}{' '}
  </Drawer>
)

SideMenu.propTypes = {
  open: PropTypes.bool,
  authExists: PropTypes.bool,
  classes: PropTypes.object,
  closeSideMenuIfOpen: PropTypes.func
}

export default SideMenu
