import React, { Component } from 'react'
import { Row, Col, BackTop } from 'antd'
import MobileHeader from './../header/MobileHeader'
import Footer from './../footer/Footer'
import './../css/mobile.css'

class MoblieNewsDetail extends Component {
    constructor () {
        super ()
        this.state = {
            newsItem: ''
        }
    }
    componentWillMount () {
        this._isMounted = true
        let myFetchOptions = {
            methods: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                if (this._isMounted) {
                    this.setState({newsItem: json})
                    document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
                }
            })
    }
    componentWillUnmount () {
        this._isMounted = false
    }
    createMarkup () {
        return {
            __html: this.state.newsItem.pagecontent
        }
    }
    render () {
        return (
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
        )
    }
}

export default MoblieNewsDetail