import React, { Component } from 'react';
import { Toast } from 'antd-mobile'
import * as config from '../../../config'

import '../account.scss'

class Login extends Component{
  state = {
    username: '',
    password: ''
  }
  componentDidMount() {
    document.title = config.CONFIG_TITLE.login
  }
  render(){
    return (
      <div className="login">
        <div className="logo"><i className="iconfont icon-musiccloud"></i></div>
        <ul>
          <li><input type="text" placeholder="请输入账号" onChange={(e)=>this.handleChangeUserName(e)} /><i className="iconfont icon-huiyuan"></i></li>
          <li><input type="password" placeholder="请输入6-16位字母、数字或者符号密码" onChange={(e)=>this.handleChangePassword(e)} /><i className="iconfont icon-3"></i></li>
        </ul>
        <div className="box-btn">
          <div className="btn" onClick={()=>this.handleClickLogin()}>登录</div>
        </div>
      </div>
    )
  }

  //监听账户输入
  handleChangeUserName(e){
    // console.log(e.target.value)
    this.setState({ username: e.target.value })
  }
  //监听密码输入
  handleChangePassword(e){
    // console.log(e.target.value)
    this.setState({ password: e.target.value })
  }
  //登录
  handleClickLogin() {
    if(!this.state.username){
      Toast.info('请填写正确的用户名', 2);
      return false
    }
    if(!this.state.password){
      Toast.info('密码不能为空', 2);
      return false
    }

    localStorage.setItem('token', 'token_dsajkXjksadjskHioiowmk')
    Toast.success('登录成功', 2);
    setTimeout(() => {
      window.location.href="/"
    }, 2000);
  }
}




export default Login