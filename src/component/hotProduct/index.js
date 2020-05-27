import React, { Component } from 'react';
import './hotProduct.scss'

class hotProduct extends Component{
  render(){
    var hotProductData = this.props.hotProductData
    // console.log(hotProductData, '----->hotProductData')
    return (
      <div className="panel hot-prouct">
        <h3>{this.props.title}</h3>
        <div className="panel-box">
          <ul>
            {hotProductData.map((item,index) => (
              <li key={item.id}>
                <a href="detail/" className="item">
                  <div className="pic">
                    <img src={item.products.coverUrl+"?imageView&thumbnail=346x0&quality=75&tostatic=0&type=webp"} alt={item.name} />
                    <div className="buying">
                      {item.products.tags[0] === '限时抢购' ? item.products.tags[0] : ''}
                      {item.products.originalCost > item.products.minPrice && item.products.tags[0] !== '限时抢购' ? <div><p className="min">￥{item.products.minPrice}</p><p className="cost"><del>￥{item.products.originalCost}</del></p></div> : ''}
                    </div>
                  </div>
            <div className="name">{item.products.couponLabelDesc != null ? <i className="tag">{item.products.couponLabelDesc}</i> : ''}{item.name}</div>
                  <p>￥{item.products.minPrice}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default hotProduct