import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Layout, Typography } from 'antd';
import { LIST_PATH } from 'constants/paths'
import AccountMenu from './AccountMenu'
import LoginMenu from './LoginMenu'

const { Header} = Layout;

export const Navbar = ({
  avatarUrl,
  displayName,
  authExists,
  goToAccount,
  handleLogout,
  closeAccountMenu,
  anchorEl,
  handleMenu
}) => (
  <Header className="header" style={{display: 'flex'}}>
      <Typography>
          <Link to={authExists ? LIST_PATH : '/'}>Anand Gallery</Link>
      </Typography>
      <div style={{marginLeft: 'auto'}}>
        {authExists ? (
          <AccountMenu
            avatarUrl={avatarUrl}
            displayName={displayName}
            onLogoutClick={handleLogout}
            goToAccount={goToAccount}
            closeAccountMenu={closeAccountMenu}
            handleMenu={handleMenu}
            anchorEl={anchorEl}
          />
        ) : (
          <LoginMenu />
        )}
      </div>
  </Header>
)

Navbar.propTypes = {
  displayName: PropTypes.string, // from enhancer (flattenProps - profile)
  avatarUrl: PropTypes.string, // from enhancer (flattenProps - profile)
  authExists: PropTypes.bool, // from enhancer (withProps - auth)
  goToAccount: PropTypes.func.isRequired, // from enhancer (withHandlers - router)
  handleLogout: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  closeAccountMenu: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  handleMenu: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  anchorEl: PropTypes.object // from enhancer (withStateHandlers - handleMenu)
}

export default Navbar