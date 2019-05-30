import React from 'react';
import PropTypes from 'prop-types'
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux'
import { connect } from 'react-redux'
import './App.css';
import Sider from './containers/Sider'
import Content from './containers/Content'
import { Layout } from 'antd';

const siderProps = {
  menus : [
    {
      icon: 'pie-chart',
      id: 1,
      name: 'Home',
      route: '/'
    },
    {
      icon: 'pie-chart',
      id: 2,
      name: 'Numismatics',
      route: '/numismatics'
    },
    {
      icon: 'pie-chart',
      id: 3,
      name: 'Philately',
      route: '/philately'
    },
    {
      icon: 'pie-chart',
      id: 4,
      name: 'Garden',
      route: '/garden'
    },
    {
      icon: 'pie-chart',
      id: 5,
      name: 'Publications',
      route: '/publications'
    },
    {
      icon: 'pie-chart',
      id: 6,
      name: 'Mughal',
      route: '/numismatics/mughal',
      parentId: 2
    },
  ]
}

const App = ({ firebase, users, store }) => (
  <div>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider {...siderProps} ></Sider>
      <Content></Content>
    </Layout>
  </div>
);

App.propTypes = {
  firebase: PropTypes.object.isRequired
}

const enhance = compose(
  firebaseConnect(() => [{
    path: 'users'
  }
  ]),
  connect(
    ({ firebase }) => ({
      users: firebase.users,
    })
  )
)

export default enhance(App);
