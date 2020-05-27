import React, { Component } from 'react';
import { Toast, Drawer } from 'antd-mobile'
import * as config from '../../../config'

import '../account.scss'

class Login extends Component{
  state = {
    username: '',
    password: '',
    open: false,
  }
  componentDidMount() {
    document.title = config.CONFIG_TITLE.login
  }
  render(){
    let drawerStyle = {}
    if(!this.state.open){
      drawerStyle = {
        position: 'relative',
        overflow: 'auto'
      }
    }else{
      drawerStyle = {}
    }
    const sidebar = (
      <div className="agreement-drawer">
        <div className="tit">服务协议</div>
        <div className="cnt">蚂蚁金服（以下或称“我们”）尊重并保护您的隐私。在您使用蚂蚁金服旗下公司的各项服务（例如：花呗、蚂蚁借呗、财富平台服务、保险平台服务、蚂蚁森林、蚂蚁庄园、蚂上租租房等)时，相关服务提供方将按照蚂蚁金服隐私权政策（以下简称“本政策”）收集、存储、使用及对外提供您的个人信息。同时，我们会通过本政策向您说明，我们如何为您提供访问、更新、管理和保护您的信息的服务。</div>
      </div>
    );
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
        <span className="agreement" onClick={()=>this.onOpenChange()}>服务协议</span>
        <Drawer
          className="my-drawer"
          position='bottom'
          enableDragHandle
          style={drawerStyle}
          sidebar={sidebar}
          open={this.state.open}
          onOpenChange={()=>this.onOpenChange()}
        > </Drawer>
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
  // 协议弹窗
  onOpenChange() {
    this.setState({ open: !this.state.open });
  }
}




export default Login
