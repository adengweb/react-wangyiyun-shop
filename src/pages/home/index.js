import React, { Component } from 'react';
import axios from 'axios';
import * as config from '../../config'
import { Carousel } from 'antd-mobile';

import WelfareItem from './component/welfare'
import TopicsItem from './component/topicsItem'
import HotProductItem from './component/hotProduct'

import './style.scss'

class Index extends Component{
  state = {
    banners : [],
    imgHeight : 176
  }
  componentDidMount() {
    document.title = config.CONFIG_TITLE.home
    axios.get(`${config.BASE_URL}/banners`).then((res) => {
      console.log(res.data, 'banners')
      this.setState({
        banners : res.data
      })
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
              <h4>我的云贝 <span className="val"><i></i> 562</span></h4>
              <p>兑换福利 </p>
            </div>
            <div className="sign">签到</div>
          </div>
        </div>
        <WelfareItem></WelfareItem>
        <div className="topics">
          <TopicsItem></TopicsItem>
          <TopicsItem></TopicsItem>
        </div>
        <HotProductItem></HotProductItem>
        
        <div className="tab-bar">
          <ul>
            <li><i>icon</i>首页</li>
            <li><i>icon</i>分类</li>
            <li><i>icon</i>购物车</li>
            <li><i>icon</i>我的</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Index