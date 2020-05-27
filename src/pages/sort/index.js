import React, { Component } from 'react';

class Sort extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div className="sort">
        <div className="item">
          <div className="title">数码影音</div>
          <ul>
            <li>
              <a href="/detail">
                <div className="pic"><img src="http://p1.music.126.net/S_cRDMQXAZ8QIcSB0HbchQ==/109951163391888693.jpg" alt="" /></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sort