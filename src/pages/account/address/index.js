import React, { Component } from 'react';
import * as config from '../../../config'

class Address extends Component{
  state = {
  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.acctountAddress
  }
  render(){
    return (
      <div>Address</div>
    )
  }
}

export default Address