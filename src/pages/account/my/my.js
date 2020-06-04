import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as config from '../../../config'

import { Modal } from 'antd-mobile'
const alert = Modal.alert;


class My extends Component{
  state = {
    myConfig:{}
  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.acctountMy

    var token = localStorage.getItem('token');
    console.log(token, '=====>token')
    if(!token){
      window.location.href="/login"
    }

    //获取个人中心数据
    React.$api.Get(`${config.BASE_URL}/getMyConfig`).then((res) => {
      console.log(res.data, 'myConfig')
      this.setState({myConfig : res.data })
    })
  }
  render(){
    return (
      <div className="my">
        <div className="row-box order-clear">
          <div className="row">
            <Link to="/order">
              <span className="txt">我的订单</span>
              <em>全部订单</em>
            </Link>
            <i className="iconfont icon-right1"></i>
          </div>
        </div>
        <div className="order-row">
          <Link to="/order?type=1"><i className="iconfont icon-daizhifu"></i><p>待支付</p></Link>
          <Link to="/order?type=2"><i className="iconfont icon-daishouhuo"></i><p>待发货</p></Link>
          <Link to="/order?type=3"><i className="iconfont icon-daifahuo"></i><p>待收货</p></Link>
        </div>
        <div className="row-box">
          <div className="row">
            <Link to="/account/coupon">
              <span className="txt">我的优惠券</span>
              <em>{this.state.myConfig.couponNum}张</em>
            </Link>
            <i className="iconfont icon-right1"></i>
          </div>
          <div className="row">
            <Link to="/account/address">
              <span className="txt">我的收货地址</span>
            </Link>
            <i className="iconfont icon-right1"></i>
          </div>
          <div className="row">
            <Link to="/account/live">
              <span className="txt">我想看的演出</span>
              <em className={`${this.state.myConfig.liveNum && 'reddot'}`}>{this.state.myConfig.liveNum}</em>
            </Link>
            <i className="iconfont icon-right1"></i>
          </div>
          <div className="row">
            <a href="https://music.163.com/st/platform/qiyu?scope=music163&orderId=">
              <span className="txt">在线客服</span>
            </a>
            <i className="iconfont icon-right1"></i>
          </div>
        </div>
        <div className="row-box">
          <div className="row">
            {/* <a onClick={()=>this.onClickOutLogin()}> */}
            <a onClick={() =>
              alert('提示', '确定要退出当前账户？', [
                { text: '取消', onPress: () => console.log('cancel') },
                { text: '确定', onPress: () => this.onClickOutLogin() },
              ])
            }>
              <span className="txt">退出</span>
            </a>
            <i className="iconfont icon-right1"></i>
          </div>
        </div>

        <div className="f-logo">
          <i className="iconfont icon-musiccloud"></i>
          <p>&copy; 网易云商城</p>
        </div>
      </div>
    )
  }

  // 退出
  onClickOutLogin(){
    localStorage.removeItem('token')
    window.location.href="/"
  }
}

export default My