import React, { Component } from 'react';

class My extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount(){
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