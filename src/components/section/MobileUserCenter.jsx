import React, { Component } from 'react'
import { Row, Col, Tabs, Card, Upload, Icon, Modal } from 'antd'
import { Link } from 'react-router-dom'
import MobileHeader from './../header/MobileHeader'
import Footer from './../footer/Footer'
import './../css/mobile.css'
const TabPane = Tabs.TabPane;

class PcUserCenter extends Component {
    constructor () {
        super ()
        this.state = {
            myCollections: '',
            myComments: '',
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }]
        }
    }

    componentWillMount () {
        this._mounted = true
        this.getCollection()
        this.getMyComents()
    }
    componentUnmount () {
        this._mounted = false
    }
    // 获取收藏新闻数据
    getCollection () {
        let myFetchOption = {
            method: 'GET'
        }
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=${localStorage.__UserId__}`, myFetchOption)
            .then(res => res.json())
            .then(json => {
                if (this._mounted) {
                    this.setState({ myCollections: json })
                }
            })
    }

    // 获取自己评论数据
    getMyComents () {
        let myFetchOption = {
            method: 'GET'
        }
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=${localStorage.__UserId__}`, myFetchOption)
		.then(res => res.json())
		.then(json => {
            if (this._mounted) {
                this.setState({ myComments: json });
            }
		});
    }

    // 上传逻辑
    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

    handleTabs = (key) => {
        
    }

    render () {
        const { myCollections } = this.state
        const collectList = myCollections.length ?
        myCollections.map((uc, index) => (
            <Card key={index} title={uc.uniquekey} extra={<Link target="_blank" to={`/details/${uc.uniquekey}`}>查看</Link>}>
                <p>{ uc.Title }</p>
            </Card>
        ))
        : 
        '暂时没有收藏新闻信息'

        const { myComments } = this.state
        const commentList = myComments.length ?
            myComments.map((comment, index) => (
                <Card key={index} title={`于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<Link target="_blank" to={`/details/${comment.uniquekey}`}>查看</Link>}>
					<p>{ comment.Comments }</p>
				</Card>
            ))
        :
        '暂时没有任何评论'

        const { previewVisible, previewImage, fileList } = this.state
        const uploadButton = (
            <div>
              <Icon type="plus" />
              <div className="ant-upload-text">Upload</div>
            </div>
        )
        
        return (
            <div>
                <MobileHeader />
                <Row>
                    <Col span={24}>
                        <Tabs defaultActiveKey="1" onChange={ this.handleTabs }>
                            <TabPane tab="我的收藏列表" key="1">
                                <div className="comment">
                                    <Row>
                                        <Col span={24}>
                                            { collectList }
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">
                                <div className="comment">
                                    <Row>
                                        <Col span={24}>
                                            { commentList }
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="头像设置" key="3">
                                <div className="clearfix">
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    fileList={ fileList }
                                    onPreview={ this.handlePreview }
                                    onChange={ this.handleChange }
                                >
                                    { fileList.length >= 3 ? null : uploadButton }
                                </Upload>
                                <Modal visible={ previewVisible } footer={null} onCancel={ this.handleCancel }>
                                    <img alt="example" style={{ width: '100%' }} src={ previewImage } />
                                </Modal>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <Footer />
            </div>
        )
    }
}

export default PcUserCenter
