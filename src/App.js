import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';
import * as config from './config'

import Home from './pages/home'
import Search from './pages/search'
import Sort from './pages/sort'
import Cart from './pages/cart'
import Detail from './pages/detail'

//个人中心
import Login from './pages/account/login/login'
import My from './pages/account/my/my'

class App extends Component{
  componentDidMount() {
    axios.get(`${config.BASE_URL}/user`).then((res) => {
      console.log(res.data, 'user')
      // this.setState({ user : res.data })
      localStorage.setItem('user', JSON.stringify(res.data));
    })
  }
  
  render(){
    return (
      <Router>
        <div className="mod-pages">
          <Route exact path="/" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/sort" component={Sort}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/account/my" component={My}></Route>
          {/* <Route path="/Cart" component={Cart}></Route> */}
        </div>
      </Router>
    )
  }
}
export default App
