import React, { Component } from 'react';
import * as config from '../../config'

import './style.scss'

class Sort extends Component{
  state = {
    categoryList: []
  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.sort

    React.$api.Get(`${config.BASE_URL}/categoryList`).then((res) => {
      console.log(res.data, 'categoryList')
      this.setState({ categoryList : res.data })
    })
  }
  handleClick(cid){
    console.log(cid)
    this.props.history.push({pathname:`/detail/${cid}`,query:{id:cid}})
  }
  render(){
    let categoryList = this.state.categoryList;
    return (
      <div className="sort">
        {
          categoryList.map(item =>(
            <div className="category" key={item.categoryId}>
              <div className="title" onClick={()=>this.handleClick(item.categoryId)}>{item.category1Name}</div>
              <Item v ={item.sub} />
            </div>
          ))
        }
      </div>
    )
  }
}

function Item (props){
  let sub = props.v
  return (
    <ul>
      {
        sub.map(item =>(
          <li key={item.id}>
            <a href={`/list/${item.id}`} className="item">
              <div className="pic"><img src={item.picUrl} alt={item.name} /></div>
              <p>{item.name}</p>
            </a>
          </li>
        ))
      }
    </ul>
  )
}

export default Sort