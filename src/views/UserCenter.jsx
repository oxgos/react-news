import React, { Component } from 'react'
import PcUserCenter from './../components/section/PcUserCenter'
import MobileUserCenter from './../components/section/MobileUserCenter'
import MediaQuery from 'react-responsive'

export default class UserCenter extends Component {
    render () {
        return (
            <div>
                <MediaQuery  query="(min-device-width: 1224px)">
                    <PcUserCenter />
                </MediaQuery>
                <MediaQuery  query="(max-device-width: 1224px)">
                    <MobileUserCenter />
                </MediaQuery>
            </div>
        )
    }
}
