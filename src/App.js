import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';
import * as config from './config'

import Home from './pages/home'
import About from './pages/cart'
import Detail from './pages/detail'

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
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    )
  }
}

export default App

// const App = () => (
//   <Router>
//     <div className="mod-pages">
//       <Route exact path="/" component={Home}></Route>
//       <Route path="/detail" component={Detail}></Route>
//       <Route path="/about" component={About}></Route>
//     </div>
//   </Router>
// )

// export default App
