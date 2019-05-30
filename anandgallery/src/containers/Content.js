import React, { Component } from 'react'

import { Layout, Card } from 'antd';
const { Content } = Layout;
const { Meta } = Card;

export default class MyContent extends Component {
    render() {
        return (
            <Layout
              style={{
              padding: '24px'
            }}>
              <Content
                style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280
              }}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta title="Europe Street beat" description="www.instagram.com" />
                </Card>
              </Content>
            </Layout>
        )
    }
}
