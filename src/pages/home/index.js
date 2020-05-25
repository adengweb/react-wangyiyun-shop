import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import axios from 'axios';
import './style.scss'

class Index extends Component{
  state = {
    banners : [],
    imgHeight : 176
  }
  componentDidMount() {
    axios.get('http://localhost:3200/banners').then((res) => {
      console.log(res.data,'banners')
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
        <div className="panel">
          <h3>签到领云贝</h3>
          <div className="panel-box">
            111111111
          </div>
        </div>
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