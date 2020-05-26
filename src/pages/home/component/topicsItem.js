import React, { Component } from 'react';
import './topicsItem.scss'

class topicsItem extends Component{
  static defaultProps={			
  }

  static propTypes = {
  }

  constructor(props) {
    super(props)
  }
  render(){
    var gettopicsData = this.props.gettopicsData
    console.log(gettopicsData, '----->gettopicsData')
    return (
      <div>
        {
          gettopicsData.map(item => (
            <div className="topics_item" key={item.id}>
              <div className="tit" style={{backgroundImage: `url(${item.backGroudPic})`}}>
                <h4>{item.columnTitle}</h4>
                <p>{item.subColumnTitle}</p>
              </div>
              <div className="list">
                <Item v = {item.products}></Item>
                  {/* <li>
                    <a href="#">
                      <div className="pic"><img src="http://p3.music.126.net/OqGgbzZqmEWGFCIJuS4FIw==/109951163663734720.webp?imageView&thumbnail=200x0&quality=75&tostatic=0&type=webp" /></div>
                      <h5>网易云音乐易系列17音卡林巴拇指琴 二色可选</h5>
                      <p>￥309</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pic"><img src="http://p3.music.126.net/OqGgbzZqmEWGFCIJuS4FIw==/109951163663734720.webp?imageView&thumbnail=200x0&quality=75&tostatic=0&type=webp" /></div>
                      <h5>1111</h5>
                      <p>￥309</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pic"><img src="http://p3.music.126.net/OqGgbzZqmEWGFCIJuS4FIw==/109951163663734720.webp?imageView&thumbnail=200x0&quality=75&tostatic=0&type=webp" /></div>
                      <h5>1111</h5>
                      <p>￥309</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="pic"><img src="http://p4.music.126.net/OBvLBH4ReNpSXgf66b9A7A==/109951164941875821.webp" /></div>
                      <h5>1111</h5>
                      <p>￥309</p>
                    </a>
                  </li> */}
                
              </div>
            </div>
          ))
        }
        
      </div>
    )
  }
}

function Item(props) {
  var item = props.v
  console.log(item,'---itemitem')
  return (
    <ul>
      {
        item.map(v =>(
          <li key={v.stock}>
            <a href="#">
              <div className="pic">
                <img src={v.coverUrl +"?imageView&thumbnail=200x0&quality=75&tostatic=0&type=webp"} />
                {v.originalCost > v.minPrice ? <div className="buying">
                <p className="min">￥{v.minPrice}</p><p className="cost"><del>￥{v.originalCost}</del></p>
                </div> : ''}
              </div>
              <h5>{v.name}</h5>
              <p>￥{v.minPrice}</p>
            </a>
          </li>
        ))
      }
    </ul>
  );
}
export default topicsItem