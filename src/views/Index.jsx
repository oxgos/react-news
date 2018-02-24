import React, { Component } from 'react'
import PcHeader from './../components/header/PcHeader'
import PcSection from './../components/section/PcSection'
import MobileHeader from './../components/header/MobileHeader'
import MobileSection from './../components/section/MobileSection'
import Footer from './../components/footer/Footer'
import MediaQuery from 'react-responsive'
// import { Link } from 'react-router-dom'

class Index extends Component {
    render () {
        return (
            <div className="index">
                <MediaQuery query="(min-device-width: 1224px)">
                    <PcHeader />
                    <PcSection />
                    <Footer />
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    <MobileHeader />
                    <MobileSection />
                    <Footer />
                </MediaQuery>
            </div>
        )
    }
}

export default Index