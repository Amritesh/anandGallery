import React, { Component } from 'react'
import { Layout, Menu, Avatar} from 'antd';
import logo from '../logo.svg';
const { Header} = Layout;


export default class MyHeader extends Component {
    render() {
        return (
            <Header className="header">
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{
                lineHeight: '64px'
                }}>
                <Menu.Item style={{float:'left'}}>
                    <img src={logo} className="App-logo" alt="logo" />
                </Menu.Item> 
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Numismatics</Menu.Item>
                <Menu.Item key="3">Philately</Menu.Item>
                <Menu.Item key="4">Garden</Menu.Item>
                <Menu.Item key="5">Publication</Menu.Item>
                <Menu.Item style={{float:'right'}}>
                    <Avatar size="large" icon="user"/>
                </Menu.Item>
                </Menu>
            </Header>
        )
    }
}
