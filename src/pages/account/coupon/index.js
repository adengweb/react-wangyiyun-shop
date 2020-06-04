import React, { Component } from 'react';
import * as config from '../../../config'
import './style.scss'

// import CouponItem1 from './CouponItem'

class Coupon extends Component{
  state = {
    validList: [],
    invalidList: [],
    isDisplay: false,
    curItemIndex: -1,
  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.acctountCoupon

    React.$api.Get(`${config.BASE_URL}/getCoupons`).then(res=>{
      // console.log(res.data, 'getCoupons')
      this.setState({validList: res.data.valid,invalidList: res.data.invalid})
      // this.setState({invalidList: res.data.invalid})
    })
  }
  render(){
    return (
      <div className="mod-coupon">
        <div className="valid-coupon">
          {this.state.validList ?
            <ul className="couponBox">
              {this.state.validList.map((item,index)=>(
                <li className="couponItem" key={index}>
                  <div className="cnt">
                    <div className="price">
                      <h3 className="val"><em>¥</em>{item.effectValue}</h3>
                      <p className="tip">{item.minMoney == '0' ? '无门槛' : `满${item.minMoney}使用`}</p>
                    </div>
                    <div className="cmina">
                      <div className="tit"><i className="tag">{item.couponLabel}</i>{item.couponName}</div>
                      <div className="use">
                        <span className="time">{DateSwitch(item.validStartTime)} - {DateSwitch(item.validEndTime)}</span>
                      </div>
                    </div>
                  </div>
                  <div className={"doc" + (this.state.curItemIndex === item.couponId ? ' active' : '')}>
                    <p className="note">{item.couponDesc}</p>
                    <span className="arr iconfont icon-right1" onClick={()=>this.handleClickItemDisplay(item.couponId)}></span>
                  </div>
                </li>
              ))}
            </ul>
            : <div className="none-tips"><div className="iconfont icon-zanwuyouhuiquan"></div>暂无优惠券</div>
          }
        </div>
        <div className="invalid-coupon">
          <div className={"disbar" + (this.state.isDisplay ? ' active' : '')} onClick={()=>this.setState({isDisplay: !this.state.isDisplay})}><i className="iconfont icon-right1"></i>已失效（{this.state.invalidList.length || 0}）</div>
          {this.state.isDisplay &&
            // <CouponItem handleClick={this.handleClick} v={this.state.invalidList}></CouponItem>
            <ul className="couponBox">
              {this.state.invalidList.map((item,index)=>(
                <li className="couponItem" key={index}>
                  <div className="cnt">
                    <div className="price">
                      <h3 className="val"><em>¥</em>{item.effectValue}</h3>
                      <p className="tip">{item.minMoney == '0' ? '无门槛' : `满${item.minMoney}使用`}</p>
                    </div>
                    <div className="cmina">
                      <div className="tit"><i className="tag">{item.couponLabel}</i>{item.couponName}</div>
                      <div className="use">
                        <span className="time">{DateSwitch(item.validStartTime)} - {DateSwitch(item.validEndTime)}</span>
                      </div>
                    </div>
                  </div>
                  <div className={"doc" + (this.state.curItemIndex === item.couponId ? ' active' : '')}>
                    <p className="note">{item.couponDesc}</p>
                    <span className="arr iconfont icon-right1" onClick={()=>this.handleClickItemDisplay(item.couponId)}></span>
                  </div>
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
    )
  }
  // 显示隐藏文档
  handleClickItemDisplay (id) {
    if(this.state.curItemIndex === id){
      this.setState({curItemIndex: -1})
    }else{
      this.setState({curItemIndex: id})
    }
  }
}


function add0(m){return m<10?'0'+m:m }
function DateSwitch(time){
  // console.log(time)
  var  timestamp = parseInt(time);
  var d = new Date(timestamp);
  var jstimestamp = (d.getFullYear())+"-"+(add0(d.getMonth()+1))+"-"+(add0(d.getDate()));
  return jstimestamp;
}

export default Coupon