import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Home from './pages/home'
import About from './pages/cart'
import Detail from './pages/detail'


const App = () => (
  <Router>
    <div className="mod-pages">
      <Route exact path="/" component={Home}></Route>
      <Route path="/detail" component={Detail}></Route>
      <Route path="/about" component={About}></Route>
    </div>
  </Router>
)

export default App
