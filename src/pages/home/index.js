import React, { Component } from 'react';
import * as config from '../../config'
import { Carousel, Toast } from 'antd-mobile';

import WelfareItem from './component/welfare'
import TopicsItem from './component/topicsItem'
import HotProductItem from '../../component/hotProduct'
import TabBarItem from '../../component/tabbar/tabbar'

import './style.scss'

class Index extends Component{
  state = {
    token: '',
    user: {},
    banners : [],
    welfare: [],
    gettopics: [],
    hot: [],
    imgHeight : 176
  }
  componentDidMount() {
    document.title = config.CONFIG_TITLE.home

    //获取全局挂载的axios封装方法
    // console.log(React.$api)

    // 默认未签到-存入localStorage
    localStorage.setItem("signStatus", localStorage.getItem('signStatus') || 0)
    React.$api.Get(`${config.BASE_URL}/user`).then((res) => {
      console.log(res.data, 'user')
      this.setState({ user : res.data,signStatus : res.data.status })
      // this.setState({ signStatus : 0 })
    })

    // 用户数据，当有token的时候在去请求
    var token = localStorage.getItem('token');
    this.setState({ token : token })
    console.log(token, '=====>token')
    if(token){
      // welfare数据
      React.$api.Get(`${config.BASE_URL}/welfareInfo`).then((res) => {
        console.log(res.data, 'welfareInfo')
        this.setState({ welfare : res.data })
      })
    }
    
    // 获取banner数据
    React.$api.Get(`${config.BASE_URL}/banners`,{}).then((res) => {
      console.log(res.data, 'banners')
      this.setState({ banners : res.data })
    })
    
    // gettopics数据
    React.$api.Get(`${config.BASE_URL}/gettopics`,{}).then((res) => {
      console.log(res.data, 'gettopics')
      this.setState({ gettopics : res.data })
    })
    
    // 获取hotProduct数据
    React.$api.Get(`${config.BASE_URL}/hotProduct`).then((res) => {
      console.log(res.data, 'hotProduct')
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
              <h4>我的云贝 <span className="val"><i className="iconfont icon-beike"></i> {this.state.user.balance || '--'}</span></h4>
              <p>兑换福利 <i className="iconfont icon-right1"></i></p>
            </div>
            <div className={ `sign ${this.state.signStatus == 1 ? 'over' : null}`} onClick={()=>this.handleClickSign()}>{this.state.signStatus == 1 ? '已签到' : '签到'}</div>
          </div>
        </div>
        {this.state.welfare.length > 0 ? <WelfareItem welfareData = {this.state.welfare} /> : null}
        <div className="topics">
          <TopicsItem gettopicsData = {this.state.gettopics} />
        </div>
        <HotProductItem title="热门商品"  hotProductData = {this.state.hot}  />
        
        <TabBarItem />
        
      </div>
    )
  }

  //签到
  handleClickSign(){
    if(!this.state.token){
      Toast.info('您还未登录~', 2);
      return false
    }
    
    if(this.state.signStatus == 0){
      // let y = (new Date()).getFullYear()
      // let m = ((new Date()).getMonth()+1) < 10 ? '0' + ((new Date()).getMonth()+1) : ((new Date()).getMonth()+1)
      // let d = (new Date()).getDate() < 10 ? '0' + (new Date()).getDate() : (new Date()).getDate()
      // let time = y+m+d;
      let time = new Date().getTime()
      
      this.setState({signStatus: 1})
      Toast.success('恭喜，签到成功', 2);
      localStorage.setItem("signStatus", 1)
      localStorage.setItem("signTime", time)
    }
  }
}

export default Index