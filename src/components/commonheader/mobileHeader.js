import React, { Component } from 'react'
import logo from './logo.png'
import './mobile.css'

class MobileHeader extends Component {
    render () {
        return (
            <div id="mobileheader">
                <header>
                    <img src={logo} alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
        )
    }
}

export default MobileHeader