import React, { Component } from 'react'
import PcNewsDetail from './../components/section/PcNewsDetail'
import MobileNewsDetail from './../components/section/MobileNewsDetail'
import MediaQuery from 'react-responsive'

class NewsDetail extends Component {
    render () {
        return (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <PcNewsDetail uniquekey={this.props.match.params.uniquekey}></PcNewsDetail>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <MobileNewsDetail uniquekey={this.props.match.params.uniquekey}></MobileNewsDetail>
                </MediaQuery>
            </div>
        )
    }
}

export default NewsDetail