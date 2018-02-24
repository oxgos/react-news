import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
    render () {
        return (
            <div className="index">
                <header>
                    <ul>
                        <li>
                            <Link to="/">
                                首页
                            </Link>
                        </li>
                        <li>
                            <Link to="/About">
                                关于我
                            </Link>
                        </li>
                        <li>
                            <Link to="/Topics">
                                文章
                            </Link>
                        </li>
                    </ul>
                </header>
                <section>我是关于我</section>
                <footer>我是脚尾</footer>
            </div>
        )
    }
}

export default About