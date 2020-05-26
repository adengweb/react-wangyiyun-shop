import React, { Component } from 'react';
import './topicsItem.scss'

class topicsItem extends Component{
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
      <div className="topics_item">
        <div className="tit">
          <h4>数码音源</h4>
          <p>sdsadsad</p>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="#">
                <div className="pic"><img src="http://p4.music.126.net/OBvLBH4ReNpSXgf66b9A7A==/109951164941875821.webp" /></div>
                <h5>网易云音乐易系列17音卡林巴拇指琴 二色可选</h5>
                <p>￥309</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="pic"><img src="http://p4.music.126.net/OBvLBH4ReNpSXgf66b9A7A==/109951164941875821.webp" /></div>
                <h5>1111</h5>
                <p>￥309</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="pic"><img src="http://p4.music.126.net/OBvLBH4ReNpSXgf66b9A7A==/109951164941875821.webp" /></div>
                <h5>1111</h5>
                <p>￥309</p>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="pic"><img src="http://p4.music.126.net/OBvLBH4ReNpSXgf66b9A7A==/109951164941875821.webp" /></div>
                <h5>1111</h5>
                <p>￥309</p>
              </a>
            </li>
          </ul>
        </div>
      </div> 
    )
  }
}

export default topicsItem