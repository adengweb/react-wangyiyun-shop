import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom'


import Home from './pages/home'
import Search from './pages/search'
import Sort from './pages/sort'
import List from './pages/sort/list'
import Cart from './pages/cart'
import Detail from './pages/detail'

//个人中心
import Login from './pages/account/login/login'
import My from './pages/account/my/my'
import Live from './pages/account/live/live'
import Address from './pages/account/address'
import Coupon from './pages/account/coupon'
import Order from './pages/account/order'
import OrderDetail from './pages/account/order/detail'

class App extends Component{
  render(){
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/sort" component={Sort}></Route>
            <Route path="/list" component={List}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/account/my" component={My}></Route>
            <Route path="/account/live" component={Live}></Route>
            <Route path="/account/coupon" component={Coupon}></Route>
            <Route path="/account/address" component={Address}></Route>
            <Route path="/order" component={Order}></Route>
            <Route path="/order/detail/:id" component={OrderDetail}></Route>
            <Route path="/cart" component={Cart}></Route>
          </Switch>
      </Router>
    )
  }
}
export default App
