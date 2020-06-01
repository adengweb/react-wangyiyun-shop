import React, { Component } from 'react';

class Detail extends Component{
  constructor(props) {
    super(props)
    console.log(this.props.location.query)
    this.state = {}
  }
  componentDidMount(){
  }
  render(){
    return (
      <div>Detail</div>
    )
  }
}

export default Detail