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

class App extends Component{
  render(){
    return (
      <Router>
        <div className="mod-pages">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/sort" component={Sort}></Route>
            <Route path="/list" component={List}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/account/my" component={My}></Route>
            {/* <Route path="/Cart" component={Cart}></Route> */}
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App
