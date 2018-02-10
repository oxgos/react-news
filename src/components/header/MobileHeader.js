import React, { Component } from 'react'
import { Icon, Modal, Tabs } from 'antd'
import { Form, Input, Button, message } from 'antd'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './mobile.css'

const TabPane = Tabs.TabPane
const FormItem = Form.Item

class MobileHeader extends Component {
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
        // this.login = this.login.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
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
    login = () => {
		this.setModalVisible(true);
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
        e.preventDefault();
        let formData = this.props.form.getFieldsValue();
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=${this.state.action}&username=${formData.userName}&&password=${formData.password}&r_userName=${formData.r_userName}&r_password=${formData.r_password}&r_confirmPassword=${formData.r_confirmPwd}`, {
            methods: 'GET'
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            // this.setState({userNickName: json.NickUserName, userid: json.UserId})
            message.success("请求成功！")
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
        const userShow = this.state.isLogin
        ? <Link to="/">
			<Icon type="inbox"/>
		  </Link>
		: <Icon type="setting" onClick={this.login}/>

        return (
            <div id="mobileheader">
                <header>
                    <img src={logo} alt="logo"/>
                    <span>ReactNews</span>
                    { userShow }
                </header>
                <Modal
                    title="用户中心"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Tabs defaultActiveKey="1" onChange={this.tabsChange}>
                        <TabPane tab={<span><Icon type="user" />登陆</span>} key="1">
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
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        login
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
            </div>
        )
    }
}

export default MobileHeader = Form.create()(MobileHeader)