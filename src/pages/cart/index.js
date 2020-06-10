import React, { Component } from 'react';
import * as config from '../../config'

import './cart.scss'

import HotProductItem from '../../component/hotProduct'

class Cart extends Component{
  constructor(props) {
    super(props)
    this.state = {
      ids: '',
      hot: [],
    }
  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.cart

    //获取购物车id
    let ids = JSON.parse(localStorage.getItem('cart_history')) || '';
    console.log(ids);
    this.setState({ids: ids})
    

    // 获取hotProduct数据
    React.$api.Get(`${config.BASE_URL}/hotProduct`).then((res) => {
      console.log(res.data, 'hotProduct')
      this.setState({hot : res.data })
    })
  }
  render(){
    return (
      <div className="mod-cart">
      {this.state.ids ? 
        <div className="car-list">
          <ul>
            {this.state.hot.slice(0, this.state.ids.length).map((item,index)=>(
              <li key={index}>{this.state.ids} --- {this.state.ids.length}</li>
            ))}
          </ul>
        </div>
          :
        <React.Fragment>
          <div className="car-list">
            <div className="none-tips"><div className="iconfont icon-gouwuchewushuju"></div>还未添加任何商品</div>
          </div>
          <HotProductItem title="猜你喜欢"  hotProductData = {this.state.hot}  />
        </React.Fragment>
        }
      </div>
    )
  }
}

export default Cart