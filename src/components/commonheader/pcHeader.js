import React, { Component } from 'react'
import { Row, Col, Menu, Icon } from 'antd';

class PcHeader extends Component {
    constructor () {
        super()
        this.state = {
            current: 'top'
        }
    }
    handleClick = (e) => {
        this.setState({
          current: e.key,
        });
        /* if (e.key === 'register') {
          this.showModal();
        } */
    }
    render () {
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}></Col>
                    <Col span={16}>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="top">
                            <Icon type="appstore"/>头条
                        </Menu.Item>
                        <Menu.Item key="shehui">
                            <Icon type="appstore"/>社会
                        </Menu.Item>
                        <Menu.Item key="guonei">
                            <Icon type="appstore"/>国内
                        </Menu.Item>
                        <Menu.Item key="guoji">
                            <Icon type="appstore"/>国际
                        </Menu.Item>
                        <Menu.Item key="yule">
                            <Icon type="appstore"/>娱乐
                        </Menu.Item>
                        <Menu.Item key="tiyu">
                            <Icon type="appstore"/>体育
                        </Menu.Item>
                        <Menu.Item key="keji">
                            <Icon type="appstore"/>科技
                        </Menu.Item>
                        <Menu.Item key="shishang">
                            <Icon type="appstore"/>时尚
                        </Menu.Item>
                    </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}

export default PcHeader