import React, { Component } from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import './../css/pc.css'

class PcNewsBlock extends Component {
    constructor () {
        super ()
        this.state = {
            news: ''
        }
    }
    componentWillMount () {
        let myFetchOptions = {
            methods: 'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
            .then(res => res.json())
            .then(json => this.setState({
                news: json
            }))
    }

    render () {
        const { news } = this.state
        const newsList = news.length
        ? news.map((newsItem, index) => (
            <li key={index}>
                <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                    { newsItem.title }
                </Link>
            </li>
        ))
        : '没有加载到任何新闻'
        return (
            <div className="topNewsList">
                <Card>
                    <ul>
                        { newsList }
                    </ul>
                </Card>
            </div>
        )
    }
}

export default PcNewsBlock