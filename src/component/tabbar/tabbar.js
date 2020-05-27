import React, { Component } from 'react';
import './tabbar.scss'

class TabBarItem extends Component{
  render(){
    return (
      <div className="tab-bar">
        <ul>
          <li><a href="/search"><i className="iconfont icon-sousuo1"></i>搜索</a></li>
          <li><a href="/sort"><i className="iconfont icon-fenlei"></i>分类</a></li>
          <li><a href="/cart"><i className="iconfont icon-gouwuche"></i>购物车</a></li>
          <li><a href="/account/my"><i className="iconfont icon-wode"></i>我的</a></li>
        </ul>
      </div>
    )
  }
}

export default TabBarItem