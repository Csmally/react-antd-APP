import React from 'react';
import { Layout, Menu } from 'antd'
import { CalculatorOutlined } from '@ant-design/icons'
import Content1 from './content1'
import Content2 from './content2'
import Content3 from './content3'

const { Header, Sider, Content } = Layout
class AntdStudy extends React.Component {
  state = {
    collapsed: false,
    showIndex: 1
  };

  changeContent = (key) => {
    this.setState({
      showIndex: key
    })
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{ height: 657 }}>
          <div className="logo"
            style={{
              height: 32,
              background: "#FF0000",
              textAlign: "center",
              fontSize: 20,
              color: "green",
              margin: 16
            }}
          >leetcode</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <a onClick={()=>this.changeContent(1)}>
                <CalculatorOutlined />
                <span>两数之和</span>
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <a onClick={()=>this.changeContent(2)}>
                <CalculatorOutlined />
                <span>移除元素</span>
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              <a onClick={()=>this.changeContent(3)}>
                <CalculatorOutlined />
                <span>搜索插入位置</span>
              </a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }}>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.state.showIndex==1?
              <Content1/>:(this.state.showIndex==2?
                  <Content2/>:<Content3/>
                )
            }
          </Content>
        </Layout>
      </Layout >
    )
  }
}

export default AntdStudy