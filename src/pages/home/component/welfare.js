import React, { Component } from 'react';
import './welfare.scss'

class WelfareItem extends Component{
  render(){
    var welfareData = this.props.welfareData
    // console.log(welfareData , '----->welfareData')
    return (
      <div className="panel welfare-box">
        <h3>福利社</h3>
        <div className="panel-box">
          {
            welfareData.map(item =>(
              <div className="item" key={item.productId}>
                <div className="pic"><img src={item.picUrl} alt={item.productName} /></div>
                <div className="cnt">
                  <p className="tit">{item.tags.length > 0 ? <i className="tag">{item.tags[0]}</i> : null}{item.productName}</p>
                  <div className="price">
                    <p className="welfare">福利价<span className="price_welfare"><em>￥</em>{item.welfarePrice}</span><span className="balance"> + <i className="iconfont icon-beike"></i> {item.point}</span></p>
                    <p className="oprice"><span>原价 ￥{item.oriPrice}</span><span>限量{item.welfareNum}件</span></p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default WelfareItem