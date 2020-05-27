import React, { Component } from 'react';
import axios from 'axios';
import * as config from '../../config'

import './style.scss'

class Sort extends Component{
  state = {
    categoryList: []
  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.sort

    axios.get(`${config.BASE_URL}/categoryList`).then((res) => {
      console.log(res.data, 'categoryList')
      this.setState({ categoryList : res.data })
    })
  }
  render(){
    let categoryList = this.state.categoryList;
    return (
      <div className="sort">
        {
          categoryList.map(item =>(
            <div className="category" key={item.categoryId}>
              <div className="title">{item.category1Name}</div>
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