import React, { Component } from 'react';
import * as config from '../../../config'

import { Modal } from 'antd-mobile'
const alert = Modal.alert;


class My extends Component{
  state = {

  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.acctountMy

    var token = localStorage.getItem('token');
    console.log(token, '=====>token')
    if(!token){
      window.location.href="/login"
    }
  }
  render(){
    return (
      <div className="my">
        <div className="row-box order-clear">
          <div className="row">
            <a href="/TODO">
              <span className="txt">我的订单</span>
              <em>全部订单</em>
            </a>
            <i className="iconfont icon-right1"></i>
          </div>
        </div>
        <div className="order-row">
          <a href="/TODO"><i className="iconfont icon-daizhifu"></i><p>待支付</p></a>
          <a href="/TODO"><i className="iconfont icon-daishouhuo"></i><p>待发货</p></a>
          <a href="/TODO"><i className="iconfont icon-daifahuo"></i><p>待收货</p></a>
        </div>
        <div className="row-box">
          <div className="row">
            <a href="/TODO">
              <span className="txt">我的优惠券</span>
              <em>1张</em>
            </a>
            <i className="iconfont icon-right1"></i>
          </div>
          <div className="row">
            <a href="/TODO">
              <span className="txt">我的收货地址</span>
            </a>
            <i className="iconfont icon-right1"></i>
          </div>
          <div className="row">
            <a href="/TODO">
              <span className="txt">我想看的演出</span>
            </a>
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