import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import PublicLinks from 'components/PublicLinks'

export const SideMenu = ({
  open,
  authExists,
  classes,
  closeSideMenuIfOpen
}) => (
  <Drawer open={open} anchor={'left'} variant="persistent">
    <div className={classes.toolbar} />
    {!authExists ? (
      <List style={{ width: 300 }}>
        <PublicLinks />
      </List>
    ) : (
      <div>
        <List style={{ width: 300 }}>
          <PublicLinks />
        </List>
      </div>
    )}
  </Drawer>
)

SideMenu.propTypes = {
  open: PropTypes.bool,
  authExists: PropTypes.bool,
  classes: PropTypes.object,
  closeSideMenuIfOpen: PropTypes.func
}

export default SideMenu
