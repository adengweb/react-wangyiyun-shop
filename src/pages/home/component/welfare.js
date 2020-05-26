import React, { Component } from 'react';
import './welfare.scss'

class WelfareItem extends Component{
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
      <div className="panel welfare-box">
        <h3>福利社</h3>
        <div className="panel-box">
          <div className="item">
            <div className="pic"><img src="http://p1.music.126.net/1zaKcRetZz4EF9U2y0Kj_A==/109951164170809327.jpg" /></div>
            <div className="cnt">
              <p className="tit"><i className="tag">包邮</i>赫恩男士持久留香古龙香水沐浴露送50g美白洗面奶</p>
              <div className="price">
                <p className="welfare">福利价<span className="price_welfare"><em>￥</em>88</span><span className="balance"> + <i>icon</i>3</span></p>
                <p className="oprice"><span>原价 ￥89</span><span>限量230件</span></p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="pic"><img src="http://p1.music.126.net/1zaKcRetZz4EF9U2y0Kj_A==/109951164170809327.jpg" /></div>
            <div className="cnt">
              <p className="tit"><i className="tag">包邮</i>赫恩男士持久留香古龙香面奶</p>
              <div className="price">
                <p className="welfare">福利价<span className="price_welfare"><em>￥</em>88</span><span className="balance"> + <i>icon</i>3</span></p>
                <p className="oprice"><span>原价 ￥89</span><span>限量230件</span></p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="pic"><img src="http://p1.music.126.net/1zaKcRetZz4EF9U2y0Kj_A==/109951164170809327.jpg" /></div>
            <div className="cnt">
              <p className="tit"><i className="tag">包邮</i>赫恩男士持久留香古龙香水沐浴露送50g美白洗面奶</p>
              <div className="price">
                <p className="welfare">福利价<span className="price_welfare"><em>￥</em>88</span><span className="balance"> + <i>icon</i>3</span></p>
                <p className="oprice"><span>原价 ￥89</span><span>限量230件</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WelfareItem