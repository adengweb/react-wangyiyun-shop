import React, { Component } from 'react';
import * as config from '../../../config'

class My extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.acctountMy

    var token = localStorage.getItem('token');
    console.log(token, '=====>token')
    if(!token){
      window.location.href="/login"
    }
  }
  render(){
    return (
      <div>MyMy</div>
    )
  }
}

export default My