import React, { Component } from 'react';
import './tabbar.scss'

class TabBarItem extends Component{
  static defaultProps={			
  }

  static propTypes = {
  }

  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className="tab-bar">
          <ul>
            <li><i className="iconfont icon-sousuo1"></i>搜索</li>
            <li><i className="iconfont icon-fenlei"></i>分类</li>
            <li><i className="iconfont icon-gouwuche"></i>购物车</li>
            <li><i className="iconfont icon-wode"></i>我的</li>
          </ul>
        </div>
    )
  }
}

export default TabBarItem