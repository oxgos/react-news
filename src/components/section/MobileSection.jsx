import React, { Component } from 'react'
import MoblieList from './../block/MoblieList'
import { Tabs, Carousel } from 'antd'
import carousel_1 from './img/carousel_1.jpg'
import carousel_2 from './img/carousel_2.jpg'
import carousel_3 from './img/carousel_3.jpg'
import carousel_4 from './img/carousel_4.jpg'

const TabPane = Tabs.TabPane;

class MobileSection extends Component {
    render () {
        const settings = {
            autoplay: true,
            slidesToShow: 1,
            speed: 500,
            infinite: true,
            dots: true
        }
        return (
            <Tabs defaultActiveKey="1">
                <TabPane tab="头条" key="1">
                    <div className="Carousel">
                        <Carousel {...settings}>
                            <div><img src={carousel_1} alt="轮播图1"/></div>
                            <div><img src={carousel_2} alt="轮播图2"/></div>
                            <div><img src={carousel_3} alt="轮播图3"/></div>
                            <div><img src={carousel_4} alt="轮播图4"/></div>
                        </Carousel>
                    </div>
                    <MoblieList count={20} type="top" />
                </TabPane>
                <TabPane tab="社会" key="2">
                    <MoblieList count={20} type="shehui" />
                </TabPane>
                <TabPane tab="国内" key="3">
                    <MoblieList count={20} type="guonei" />
                </TabPane>
                <TabPane tab="国际" key="4">
                    <MoblieList count={20} type="guoji" />
                </TabPane>
                <TabPane tab="娱乐" key="5">
                    <MoblieList count={20} type="yule" />
                </TabPane>
                <TabPane tab="体育" key="6">
                    <MoblieList count={20} type="tiyu" />
                </TabPane>
                <TabPane tab="科技" key="7">
                    <MoblieList count={20} type="keji" />
                </TabPane>
                <TabPane tab="时尚" key="8">
                    <MoblieList count={20} type="shishang" />
                </TabPane>
            </Tabs>
        )
    }
}

export default MobileSection