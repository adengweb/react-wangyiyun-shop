import React, { Component } from 'react';
import * as config from '../../config'

import './cart.scss'

import HotProductItem from '../../component/hotProduct'

class Cart extends Component{
  constructor(props) {
    super(props)
    this.state = {
      detail: {},
      hot: [],
    }
  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.cart

    //pid
    let pid = this.props.id

    // 获取hotProduct数据
    React.$api.Get(`${config.BASE_URL}/hotProduct`).then((res) => {
      console.log(res.data, 'hotProduct')
      this.setState({hot : res.data })
    })
  }
  render(){
    return (
      <div className="mod-cart">
        <div className="car-list">
          <ul><li>11111</li></ul>
          <div className="none-tips"><div className="iconfont icon-gouwuchewushuju"></div>还未添加任何商品</div>
        </div>
        <HotProductItem title="猜你喜欢"  hotProductData = {this.state.hot}  />
      </div>
    )
  }
}

export default Cart