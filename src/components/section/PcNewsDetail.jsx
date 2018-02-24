import React, { Component } from 'react'
import { Row, Col, BackTop } from 'antd'
import PcHeader from './../header/PcHeader'
import Footer from './../footer/Footer'
import PcNewsImageBlock from './../block/PcNewsImageBlock'
import './../css/pc.css'

class PcNewsDetail extends Component {
    constructor () {
        super ()
        this.state = {
            newsItem: ''
        }
    }
    componentWillMount () {
        let myFetchOptions = {
            methods: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({newsItem: json})
                document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
            })
    }
    createMarkup () {
        return {
            __html: this.state.newsItem.pagecontent
        }
    }
    render () {
        return (
            <div>
                <PcHeader />
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={ this.createMarkup() }></div>
                    </Col>
                    <Col span={6}>
                        <PcNewsImageBlock count={40} type="guoji" width="100%" cartTitle="相关新闻" imageWidth="150px" />
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Footer />
                <BackTop />
            </div>
        )
    }
}

export default PcNewsDetail