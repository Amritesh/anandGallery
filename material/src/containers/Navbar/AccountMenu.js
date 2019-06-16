import React from 'react'
import PropTypes from 'prop-types'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const styles = {
  buttonRoot: {
    color: 'white'
  },
  avatar: {
    margin: 0
  }
}

const ProfileIcon = ({ avatarUrl, displayName, classes }) =>
  avatarUrl ? (
    <Avatar alt="Remy Sharp" src={avatarUrl} className={classes.avatar} />
  ) : (
    <AccountCircle />
  )

const AccountMenu = ({
  avatarUrl,
  displayName,
  goToAccount,
  onLogoutClick,
  closeAccountMenu,
  anchorEl,
  handleMenu,
  classes
}) => (
  <div>
    <IconButton
      aria-owns={anchorEl ? 'menu-appbar' : null}
      aria-haspopup="true"
      onClick={handleMenu}
      classes={{ root: classes.buttonRoot }}>
      <ProfileIcon
        avatarUrl={avatarUrl}
        displayName={displayName}
        classes={classes}
      />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={closeAccountMenu}>
      <MenuItem onClick={goToAccount}>Account</MenuItem>
      <MenuItem onClick={onLogoutClick}>Sign Out</MenuItem>
    </Menu>
  </div>
)

AccountMenu.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  goToAccount: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  closeAccountMenu: PropTypes.func.isRequired,
  handleMenu: PropTypes.func.isRequired,
  displayName: PropTypes.string,
  avatarUrl: PropTypes.string,
  anchorEl: PropTypes.object
}

export default withStyles(styles)(AccountMenu)
