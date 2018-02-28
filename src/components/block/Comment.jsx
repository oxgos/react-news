import React, { Component } from 'react'
import { Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal, Card, notification } from 'antd'
import './../css/pc.css'

const FormItem = Form.Item
const { TextArea } = Input
class Comment extends Component {
    constructor () {
        super ()
        this.state = {
            comments: ''
        }
    }
    
    componentWillMount () {
        this._isMounted = true
        let myFetchOption = {
            methods: 'GET'
        }
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=${ this.props.uniquekey }`, myFetchOption)
            .then(res => res.json())
            .then(json => {
                if (this._isMounted) {
                    this.setState({
                        comments: json.slice(0, 4)
                    })
                }
            })
    }
    componentUnmount () {
        this._isMounted = false
    }

    handleSubmit = (e) => {
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
        var formdata = this.props.form.getFieldsValue();
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=${ window.localStorage.__UserId__ }&uniquekey=${ this.props.uniquekey }&commnet=${ formdata.remark }`, myFetchOptions)
            .then(res => res.json())
            .then(json => {
			    this.componentWillMount()
		    })
	}
    render () {
        const { getFieldDecorator } = this.props.form
        const { comments } = this.state
        const commentList = comments.length
            ? comments.map((comment, index) => (
                <Card key={ index } title={ comment.UserName } extra={ <a href="#" >发布于 { comment.datetime }</a> }>
                    <p>{ comment.Comments }</p>
                </Card>
            ))
            : '没有任何评论'
        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                        { commentList }
                        <Form onSubmit={ this.handleSubmit }>
                            <FormItem label="你的评论">
                                { getFieldDecorator('remark')(
                                    <TextArea  row={4} placeholder='随便写'/>
                                ) }
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Comment = Form.create({})(Comment)