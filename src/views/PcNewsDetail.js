import React, { Component } from 'react'
import { Row, Col, BackTop } from 'antd'
import PcHeader from './../components/header/PcHeader'
import MobileHeader from './../components/header/MobileHeader'
import Footer from './../components/footer/Footer'
import PcNewsImageBlock from './../components/block/PcNewsImageBlock'
import MediaQuery from 'react-responsive'
import './../components/css/pc.css'

class PcNewDetail extends Component {
    constructor () {
        super ()
        this.state = {
            newsItem: ''
        }
    }
    componentDidMount () {
        let myFetchOptions = {
            methods: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions)
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
                <MediaQuery query="(min-device-width: 1224px)">
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
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <div id="mobileDetailsContainer">
                        <MobileHeader />
                        <div className="ucmobileList">
                            <Row>
                                <Col span={24} className="container">
                                    <div className="articleContainer" dangerouslySetInnerHTML={ this.createMarkup() }></div>
                                </Col>
                            </Row>
                        </div>
                        <Footer />
                        <BackTop />
                    </div>
                </MediaQuery>
            </div>
        )
    }
}

export default PcNewDetail