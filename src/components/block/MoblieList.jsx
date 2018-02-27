import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import './../css/mobile.css'

class MoblieList extends Component {
    constructor (props) {
        super (props)
        this.state = {
            news: ''
        }
    }
    componentWillMount () {
        this._isMounted = true
        let myFetchOptions = {
            methods: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
            .then(res => res.json())
            .then(json => {
                if (this._isMounted) {
                    this.setState({
                        news: json
                    })
                }
            })
    }
    componentWillUnmount () {
        this._isMounted = false
    }
    render () {
        const { news } = this.state
        const newsList = news.length
        ? news.map((newsItem, index) => (
            <section key={ index } className="m_article list-item special_section">
                <Link to={ `details/${newsItem.uniquekey}` }>
                    <div className="m_article_img">
                        <img src={ newsItem.thumbnail_pic_s } alt={ newsItem.title } />
                    </div>
                    <div className="m_article_info">
                    <div className="m_article_title">
                        <span>{ newsItem.title }</span>
                    </div>
                    <div className="m_article_desc clearfix">
                        <div className="m_article_desc_l">
                            <span className="m_article_channel">{ newsItem.realtype }</span>
                            <span className="m_article_time">{ newsItem.date }</span>
                        </div>
                    </div>
                    </div>
                </Link>
            </section>
        ))
        : '没有加载到任何新闻'
        return (
            <div className="topNewsList">
                <Row>
                    <Col span={24}>
                        { newsList }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MoblieList