import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './topicsItem.scss'

class topicsItem extends Component{
  render(){
    var gettopicsData = this.props.gettopicsData
    // console.log(gettopicsData, '----->gettopicsData')
    return (
      <div>
        {
          gettopicsData.map(item => (
            <div className="topics_item" key={item.id}>
              <div className="tit" style={{backgroundImage: `url(${item.backGroudPic})`}} onClick={()=>this.onClickGoDetail(item.id)}>
                <h4>{item.columnTitle}</h4>
                <p>{item.subColumnTitle}</p>
              </div>
              <div className="list">
                <Item v = {item.products}></Item>
              </div>
            </div>
          ))
        }
        
      </div>
    )
  }
  onClickGoDetail(id){
    console.log(id)
    // this.props.history.push(`/detail/${id}`)
  }
}

function Item(props) {
  var item = props.v
  // console.log(item,'---itemitem')
  return (
    <ul>
      {
        item.map(v =>(
          <li key={v.stock}>
            <Link to={`/detail/${v.stock}`}>
              <div className="pic">
                <img src={v.coverUrl +"?imageView&thumbnail=200x0&quality=75&tostatic=0&type=webp"} alt={v.name} />
                {v.originalCost > v.minPrice ? <div className="buying">
                <p className="min">￥{v.minPrice}</p><p className="cost"><del>￥{v.originalCost}</del></p>
                </div> : null}
              </div>
              <h5>{v.name}</h5>
              <p>￥{v.minPrice}</p>
            </Link>
          </li>
        ))
      }
    </ul>
  );
}
export default topicsItem