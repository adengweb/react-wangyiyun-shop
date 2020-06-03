import React, { Component } from 'react';
import * as config from '../../../config'

class Order extends Component{
  state = {
  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.acctountOrder
  }
  render(){
    return (
      <div>Order</div>
    )
  }
}

export default Order