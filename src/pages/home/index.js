import React, { Component } from 'react';
import axios from 'axios';
import * as config from '../../config'
import { Carousel } from 'antd-mobile';

import WelfareItem from './component/welfare'
import TopicsItem from './component/topicsItem'
import HotProductItem from '../../component/hotProduct'
import TabBarItem from '../../component/tabbar/tabbar'

import './style.scss'

class Index extends Component{
  state = {
    banners : [],
    welfare: [],
    gettopics: [],
    hot: [],
    imgHeight : 176
  }
  componentDidMount() {
    document.title = config.CONFIG_TITLE.home
    
    // 获取banner数据
    axios.get(`${config.BASE_URL}/banners`).then((res) => {
      // console.log(res.data, 'banners')
      this.setState({ banners : res.data })
    })
    // welfare数据
    axios.get(`${config.BASE_URL}/welfareInfo`).then((res) => {
      // console.log(res.data, 'welfareInfo')
      this.setState({ welfare : res.data })
    })
    // gettopics数据
    axios.get(`${config.BASE_URL}/gettopics`).then((res) => {
      // console.log(res.data, 'gettopics')
      this.setState({ gettopics : res.data })
    })
    
    // 获取hotProduct数据
    axios.get(`${config.BASE_URL}/hotProduct`).then((res) => {
      // console.log(res.data, 'hotProduct')
      this.setState({hot : res.data })
    })
  }
  render(){
    return (
      <div className="mod-index">
        <div className="swipe-box">
        <Carousel autoplay infinite
        beforeChange={(from, to) => <i>${from} / ${to}</i> }
        afterChange={index => index}
        >
          {this.state.banners.map((val,index) => (
              <img
                src={val.picStr}
                alt=""
                key={index}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
          ))}
        </Carousel>
        </div>
        <div className="panel sign-box">
          <h3>签到领云贝</h3>
          <div className="panel-box">
            <div className="info">
              <h4>我的云贝 <span className="val"><i className="iconfont icon-beike"></i> 562</span></h4>
              <p>兑换福利 <i className="iconfont icon-right1"></i></p>
            </div>
            <div className="sign">签到</div>
          </div>
        </div>
        <WelfareItem welfareData = {this.state.welfare} />
        <div className="topics">
          <TopicsItem gettopicsData = {this.state.gettopics} />
        </div>
        <HotProductItem title="热门商品"  hotProductData = {this.state.hot}  />
        
        <TabBarItem />
        
      </div>
    )
  }
}

export default Index