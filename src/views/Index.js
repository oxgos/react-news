import React, { Component } from 'react'
import PcHeader from './../components/header/PcHeader'
import MobileHeader from './../components/header/MobileHeader'
import Footer from './../components/footer/Footer'
import MediaQuery from 'react-responsive'
// import { Link } from 'react-router-dom'
import { Button } from 'antd';

class Index extends Component {
    render () {
        return (
            <div className="index">
                <MediaQuery query="(min-device-width: 1224px)">
                    <PcHeader />
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <MobileHeader />
                </MediaQuery>
                <section>
                    <Button type="primary" htmlType="button">点我</Button>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Index