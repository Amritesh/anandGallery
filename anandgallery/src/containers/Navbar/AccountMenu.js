import React from 'react'
import PropTypes from 'prop-types'
import {Menu, Icon} from 'antd'

const AccountMenu = ({
  avatarUrl,
  displayName,
  goToAccount,
  onLogoutClick,
  closeAccountMenu,
  anchorEl,
  handleMenu
}) => (
  <div>
    <Icon
      type="user"
      onClick={handleMenu}>
    </Icon>
    <Menu
      onClose={closeAccountMenu}>
      <Menu.Item onClick={goToAccount}>Account</Menu.Item>
      <Menu.Item onClick={onLogoutClick}>Sign Out</Menu.Item>
    </Menu>
  </div>
)

AccountMenu.propTypes = {
  goToAccount: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  closeAccountMenu: PropTypes.func.isRequired,
  handleMenu: PropTypes.func.isRequired,
  displayName: PropTypes.string,
  avatarUrl: PropTypes.string,
  anchorEl: PropTypes.object
}

export default AccountMenu
