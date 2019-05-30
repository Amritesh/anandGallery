import React, { Component, Fragment } from 'react'
import { Layout, Menu, Icon} from 'antd';
import { arrayToTree } from 'utils'
// import { Link } from 'react-router-dom'
const { SubMenu } = Menu;
const { Sider } = Layout;

export default 
class Slider extends Component {
    state = {
        collapsed: false,
    };
    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    generateMenus = data => {
      return data.map(item => {
        if (item.children) {
          return (
            <SubMenu
              key={item.id}
              title={
                <Fragment>
                  {/* <Link to={item.route || '#'}> */}
                    {item.icon && <Icon type={item.icon} />}
                    <span>{item.name}</span>
                  {/* </Link> */}
                </Fragment>
              }
            >
              {this.generateMenus(item.children)}
            </SubMenu>
          )
        }
        return (
          <Menu.Item key={item.id}>
            {/* <Link to={item.route || '#'}> */}
              {item.icon && <Icon type={item.icon} />}
              <span>{item.name}</span>
            {/* </Link> */}
          </Menu.Item>
        )
      })
    }

    render() {
      const {menus} = this.props;
      const menuTree = arrayToTree(menus, 'id', 'parentId')
      return (
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
            width={200}
            style={{
              background: '#fff'
            }}>
            <Menu
              theme="dark" 
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
              height: '100%',
              borderRight: 0
            }}>
              {this.generateMenus(menuTree)}
            </Menu>
          </Sider>
        )
    }
}
