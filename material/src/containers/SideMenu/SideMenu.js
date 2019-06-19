import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { isEmpty } from 'react-redux-firebase'
import { closeSideMenuIfOpen } from './functions/'
class SideMenu extends Component {
  render() {
    const { open, auth } = this.props
    return (
      <Drawer open={open} onClick={closeSideMenuIfOpen(this)} anchor={'left'}>
        {' '}
        {isEmpty(auth) ? null : (
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
  }
}

export default SideMenu
