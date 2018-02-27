import React, { Component } from 'react'
import { Row, Col, Menu, Icon, Modal, Tabs } from 'antd'
import { Form, Input, Button, message } from 'antd'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './../css/pc.css'

const TabPane = Tabs.TabPane
const FormItem = Form.Item

class PcHeader extends Component {
    constructor () {
        super()
        this.state = {
            current: 'top',
            modalVisible: false,
            isLogin: false,
            action: 'login',
            userNickName: '',
            userid: 0
        }
        /* 如果定义的方法不是用"属性初始化器语法" showModal = () => {},而用正常定义方法 showModal () {},则需bind(this),否则this为undefined */
        // this.handleClick = this.handleClick.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.tabsChange = this.tabsChange.bind(this)
    }
    // 导航点击事件
    handleClick = (e) => {
        this.setState({
          current: e.key,
        });
        if (e.key === 'register') {
          this.showModal();
        }
    }
    // 控制模态框
    showModal = () => {
        this.setState({
            modalVisible: true
        })
    }
    setModalVisible = (value) => {
		this.setState({modalVisible: value});
	}
    handleOk = (e) => {
        this.setState({
            modalVisible: false,
        });
    }
    handleCancel = (e) => {
        this.setState({
            modalVisible: false,
        });
    }
    tabsChange = (key) => {
        if (key === '1') {
            this.setState({action: 'login'})
        } else {
            this.setState({action: 'register'})
        }
    }
    // 表单提交事件
    handleSubmit = (e) => {
        e.preventDefault()
        let formData = this.props.form.getFieldsValue()
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=${this.state.action}&username=${formData.userName}&&password=${formData.password}&r_userName=${formData.r_userName}&r_password=${formData.r_password}&r_confirmPassword=${formData.r_confirmPwd}`, {
            methods: 'GET'
        })
        .then(res => res.json())
        .then(json => {
            this.setState({userNickName: json.NickUserName, userid: json.UserId})
            message.success('请求成功！')
            if (this.state.action === 'login') {
                this.setState({isLogin: true})
            }
            this.setModalVisible(false)
        })
        /* this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        }); */
    }
    render () {
        const { getFieldDecorator } = this.props.form
        const loginBtn = this.state.isLogin
        ? <Menu.Item key="logout">
            <Button type="primary" htmlType="button">{ this.state.userNickName }</Button>
            &nbsp;&nbsp;
            <Link to="/">
                <Button type="dashed" htmlType="button">个人中心</Button>
            </Link>
            &nbsp;&nbsp;
            <Button type="ghost" htmlType="button">退出</Button>
          </Menu.Item>
        : <Menu.Item key="register" className="register">
            <Icon type="plus-circle" />注册/登录
        </Menu.Item>;
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <Link href="/" className="logo">
                            <img src={logo} alt="logo"/>
                            <span>ReactNews</span>
                        </Link>
                    </Col>
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
                        { loginBtn }
                    </Menu>
                    </Col>
                    <Col span={2}></Col>
                    <Modal
                        visible={this.state.modalVisible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <Tabs defaultActiveKey="1" onChange={this.tabsChange}>
                            <TabPane tab={<span><Icon type="user" />登陆</span>} key="1">
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <FormItem>
                                        {getFieldDecorator('userName', {
                                            rules: [{ required: true, message: '用户名不能为空' }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: '密码不能为空' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            log in
                                        </Button>
                                    </FormItem>
                                </Form>
                            </TabPane>
                            <TabPane tab={<span><Icon type="user-add" />注册</span>} key="2">
                                <Form onSubmit={this.handleSubmit} className="register-form">
                                    <FormItem>
                                        {getFieldDecorator('r_userName', {
                                            rules: [{ required: true, message: '用户名不能为空' }],
                                        })(
                                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('r_password', {
                                            rules: [{ required: true, message: '密码不能为空' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('r_confirmPwd', {
                                            rules: [{ required: true, message: '确认密码不能为空' }],
                                        })(
                                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请再次输入密码" />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            signin
                                        </Button>
                                    </FormItem>
                                </Form>
                            </TabPane>
                        </Tabs>
                    </Modal>
                </Row>
            </header>
        )
    }
}

export default PcHeader = Form.create()(PcHeader)