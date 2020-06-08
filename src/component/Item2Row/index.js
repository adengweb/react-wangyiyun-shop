import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.scss'

class Item2Row extends Component{
  render(){
    let list = this.props.lists
    return (
      <React.Fragment>
        {list.map((item,index) => (
          <li key={item.id}>
            {/* <Link to={{pathname'/detail', state:{pid: item.productId}}} className="item"> */}
            {/* <Link to={`/detail/${item.productId}`} className="item"> */}
            <a href={`/detail/${item.productId}`} className="item">
              <div className="pic">
                <img src={item.products.coverUrl+"?imageView&thumbnail=346x0&quality=75&tostatic=0&type=webp"} alt={item.name} />
                <div className="buying">
                  {item.products.tags[0] === '限时抢购' ? item.products.tags[0] : null}
                  {item.products.originalCost > item.products.minPrice && item.products.tags[0] !== '限时抢购' ? <div><p className="min">￥{item.products.minPrice}</p><p className="cost"><del>￥{item.products.originalCost}</del></p></div> : null}
                </div>
              </div>
        <div className="name">{item.products.couponLabelDesc != null ? <i className="tag">{item.products.couponLabelDesc}</i> : null}{item.name}</div>
              <p>￥{item.products.minPrice}</p>
            </a>
            {/* </Link> */}
          </li>
        ))}
      </React.Fragment>
    )
  }
}

export default Item2Row