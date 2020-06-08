import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as config from '../../config'

import { Carousel,Toast } from 'antd-mobile';

import HotProductItem from '../../component/hotProduct'

import './detail.scss'

class Detail extends Component{
  state = {
    hot:[],
    detail: {},
    picUrls: [],
    skuList: [],
    serviceTypeList: [],
    descList: [],
    slideIndex: 1,
    imgHeight : 176
  }
  componentDidMount(){
    //pid
    let pid = this.props.match.params.id
    Toast.loading('加载中...', 0, null, false)

    
    // 获取产品详情数据
    React.$api.Get(`${config.BASE_URL}/detail?id=${pid}`).then((res) => {
      console.log(res.data[0], 'Detail')
      this.setState({
        detail : res.data[0],
        picUrls: res.data[0].picUrls,
        skuList: res.data[0].skuList[0],
        serviceTypeList: res.data[0].detail.serviceTypeList,
        descList: res.data[0].detail.descList
      })
      document.title = res.data[0].name
      Toast.hide()
    })

    React.$api.Get(`${config.BASE_URL}/hotProduct`).then((res) => {
      console.log(res.data, 'hotProduct')
      this.setState({hot : res.data })
    })
  }
  render(){
    let detail = this.state.detail
    return (
      <div className="mod-detail">
        <Link to="/cart" className="gocart"><i className="iconfont icon-gouwuche"></i></Link>
        <div className="swipe-box">
          <Carousel autoplay infinite
            beforeChange={(from, to) => this.setState({ slideIndex: to +1 })}
            >
            {this.state.picUrls.map((item,index) => (
                <img
                  src={item}
                  alt=""
                  key={index}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
            ))}
          </Carousel>
          <div className="current">{this.state.slideIndex}/{this.state.picUrls.length}</div>
        </div>
        <div className="m-title">
          <p className="name"><span className="tag">{detail.tagList}</span>{detail.name}</p>
          <p className="promotion">{detail.suggestWord}</p>
          <p className="price">￥<span className="favor">99-109</span><span className="normal">{this.state.skuList.price}</span></p>
        </div>
        <div className="item-floor">
          <div className="lab">优惠券(3)</div>
          <i className="iconfont icon-right1"></i>
        </div>
        <div className="item-floor">
          <div className="lab">服务</div>
          <div className="cnt sever">{this.state.serviceTypeList.map((item,index)=>(<span key={index}>{item.serviceName}</span>))}</div>
          <i className="iconfont icon-right1"></i>
        </div>
        <div className="doc">
          <h4 className="tit">商品介绍</h4>
          <ul>
            {this.state.descList.map((item,index)=>(<li key={index}>{ item.type == '1' ? <p className="type-text" dangerouslySetInnerHTML = {{__html:item.content}}></p> : <p><img src={item.content} /></p>}</li>))}
          </ul>
        </div>
        <HotProductItem title="为你推荐"  hotProductData = {this.state.hot}  />
        <div className="m-buy">
          <div className="shoucang"><i className="iconfont icon-shoucang"></i></div>
          <ul>
            <li><span className="gouwuche">加入购物车</span></li>
            <li><span className="pay">立即购买</span></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Detail