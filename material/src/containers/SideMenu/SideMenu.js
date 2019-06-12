import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import { isEmpty } from 'react-redux-firebase'
class SideMenu extends Component {
  render() {
    const { auth } = this.props
    return (
      <Drawer anchor={'left'}>
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
