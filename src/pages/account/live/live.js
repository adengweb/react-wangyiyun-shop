import React, { Component } from 'react';
import * as config from '../../../config'

import './style.scss'

class Live extends Component{
  state = {
    lists: []
  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.acctountLive

    React.$api.Get(`${config.BASE_URL}/getLiveList`).then(res=>{
      console.log(res.data, 'getLiveList')
      this.setState({lists: res.data})
    })
  }
  render(){
    return (
      <div className="mod-live">
        {
          this.state.lists.map((item,index)=>(
            <a href={item.url} target="_blank" className="item" key={index}>
              <div className="pic"><img src={item.pic} /></div>
              <div className="info">
                <h4 className="name">{item.name}</h4>
                <p><i className="iconfont icon-shijian3"></i>{item.time}</p>
                <p><i className="iconfont icon-beike"></i>{item.venue_name}</p>
                <div className="price"><em>￥{item.low_price}</em>起</div>
              </div>
            </a>
          ))
        }
      </div>
    )
  }
}

export default Live