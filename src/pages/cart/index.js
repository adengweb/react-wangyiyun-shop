import React, { Component } from 'react';
import * as config from '../../config'

import { Checkbox,Toast } from 'antd-mobile';

import './cart.scss'

import HotProductItem from '../../component/hotProduct'

const CheckboxItem = Checkbox.CheckboxItem;

class Cart extends Component{
  constructor(props) {
    super(props)
    this.state = {
      ids: '',
      hot: [],
      value: [],
      allChechked: false,
      TotalPriceVal: 0,
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
        <React.Fragment>
          <div className="car-list">
            <div className="tit">已选商品</div>
            <ul>
              {this.state.hot.slice(0, this.state.ids.length).map((item,index)=>(
                <li key={index}>
                  <div className="chebox"><CheckboxItem onChange={() => this.onChangeBox(index)} checked={item.checked}></CheckboxItem></div>
                  <div className="imgbox"><img src={item.products.coverUrl} /></div>
                  <div className="cnt">
                    <div className="name"><span className="t">{item.products.name}</span><span className="cprice">￥{item.products.minPrice}</span></div>
                    <div className="sku">
                      <span className="color">{item.skuArr}</span>
                      <div className="num">
                        <span className="btn dis"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 60"><path d="m21.5 28h20c.828 0 1.5.672 1.5 1.5 0 .829-.672 1.5-1.5 1.5h-20c-.829 0-1.5-.671-1.5-1.5 0-.828.671-1.5 1.5-1.5"></path></svg></span>
                        <input type="number" disabled value="1" />
                        <span className="btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 60"><path d="m41.5 28h-8.5v-8.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5v8.5h-8.5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5h8.5v8.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5v-8.5h8.5c.828 0 1.5-.671 1.5-1.5 0-.828-.672-1.5-1.5-1.5"></path></svg></span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}

            </ul>
          </div>
          <div className="tips">全场满￥199免运费，还差￥199</div>
          <div className="cart-bar">
            <div className="chebox"><CheckboxItem onChange={(e)=>this.onAllCheckBox(e)} checked={this.state.allChechked}>全选</CheckboxItem></div>
            <div className="inner">
              <div className="cprice">合计：<span className="red">￥<em className="val">{this.TotalPrice()}</em></span></div>
              <div className="freight">差199免运费</div>
            </div>
            <div className="paybtn dis">结算</div>
          </div>
        </React.Fragment>
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
  //单选
  onChangeBox = (index) => {
    this.state.hot[index].checked = !this.state.hot[index].checked;

    this.state.hot.slice(0, this.state.ids.length).some((item,i)=>
      {
        console.log(i,this.state.hot[index].checked);
        
        if(item.checked){
          this.setState({allChechked: true})
          console.log(111);
        }else{
          console.log(222);
          this.setState({allChechked: false})
        }
      }
    )
    
    
    this.setState({
      hot:this.state.hot
    })

  }
  // 全选
  onAllCheckBox(e){
    console.log(e.target)
    const checked = e.target.checked
    this.setState({
      allChechked: checked
    })
    if (checked) {
      this.state.hot.slice(0, this.state.ids.length).forEach(i=>{
        i.checked = true;
      })
    } else {
      this.state.hot.slice(0, this.state.ids.length).forEach(i=>{
        i.checked = false;
      })
    }
    this.setState({ // 每点击一次更新状态
      hot:this.state.hot
    })
  }
  // 获取总价
  TotalPrice(){
    let a = 1,
    b = 2;
    return a+b
  }
}

export default Cart