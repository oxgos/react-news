import React, { Component } from 'react'
import { Row, Col, Carousel, Tabs } from 'antd'
import PcNewsBlock from './../block/PcNewsBlock'
import PcNewsImageBlock from './../block/PcNewsImageBlock'
import './../css/pc.css'
import carousel_1 from './img/carousel_1.jpg'
import carousel_2 from './img/carousel_2.jpg'
import carousel_3 from './img/carousel_3.jpg'
import carousel_4 from './img/carousel_4.jpg'

const TabPane = Tabs.TabPane

class PcSection extends Component {
    render () {
        const settings = {
            autoplay: true,
            slidesToShow: 1,
            speed: 500,
            infinite: true,
            dots: true
        }
        return (
            <Row>
                <Col span={2}></Col>
                <Col span={20} className="container">
                    <div className="leftContainer">
                        <div className="Carousel">
                            <Carousel {...settings}>
                                <div><img src={carousel_1} alt="轮播图1"/></div>
                                <div><img src={carousel_2} alt="轮播图2"/></div>
                                <div><img src={carousel_3} alt="轮播图3"/></div>
                                <div><img src={carousel_4} alt="轮播图4"/></div>
                            </Carousel>
                        </div>
                        <PcNewsImageBlock count={6} type="guoji" width="400px"  cartTitle="国际头条" imageWidth="112px" />
                    </div>
                    <Tabs className="tabs_news">
                        <TabPane tab="头条新闻" key="1">
                            <PcNewsBlock count={23} type="top" width="100%" bordered="false" />
                        </TabPane>
                        <TabPane tab="国际新闻" key="2">
                            <PcNewsBlock count={25} type="guoji" width="100%" bordered="false" />
                        </TabPane>
                    </Tabs>
                    <div>
                        <PcNewsImageBlock count={10} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"/>
                        <PcNewsImageBlock count={22} type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="130px"/>
                    </div>
                </Col>
                <Col span={2}></Col>
            </Row>
        )
    }
}

export default PcSection