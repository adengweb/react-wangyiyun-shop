import React, { Component } from 'react';
import * as config from '../../config'

import Item2Row from '../../component/Item2Row/'

import './list.scss'

function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
       hash = hashes[i].split('=');
       vars.push(hash[0]);
       vars[hash[0]] = hash[1];
  }
  return vars;
}

class Lists extends Component{
  state = {
    searchVal: '',
    priceFilter: '',
    list: [],
    valKeyShow: false,
  }
  componentDidMount(){
    let pid = window.location.pathname.split('/')[2];
    let searchhas = window.location.search.indexOf("?");
    
    var params = getUrlVars();
    console.log(decodeURI(params.q));
    
    if(!searchhas){
      this.setState({searchVal: decodeURI(params.q)})
      React.$api.Get(`${config.BASE_URL}/hotProduct?key=${decodeURI(params.q)}&priceFilter=${this.state.priceFilter}`).then((res) => {
        // console.log(res.data, 'hotProduct')
        this.setState({list : res.data })
      })
    }else{
      React.$api.Get(`${config.BASE_URL}/hotProduct?productId=${pid}&priceFilter=${this.state.priceFilter}`).then((res) => {
        // console.log(res.data, 'hotProduct')
        this.setState({list : res.data })
      })
    }
  }
  render(){
    console.log(this.state.list)
    return (
      <div className="lists">
        <div className="search-bar">
          <div className="inputwrap">
            <i className="iconfont icon-sousuo1"></i>
            <input id="search" type="text" value={this.state.searchVal} onChange={(e)=>this.onChangeSearchKey(e)} onKeyDown={(e)=>this.onKeyDownSearchKey(e)} onFocus={()=>this.setState({valKeyShow: true})} />
            {
              this.state.searchVal && 
              <span className="btn-clear" onClick={()=>this.onClickClearVal()}>
                <i className="iconfont icon-close"></i>
              </span>
            }
          </div>
        </div>
        {this.state.valKeyShow && 
          <div className="chengVal">
            <a href={`/list/result?q=${this.state.searchVal}`}>搜索 " {this.state.searchVal} "</a>
          </div>
        }
        <div className="filter">
          <ul>
            <li><span className={`${this.state.priceFilter == '' ? 'active' : null}`} onClick={()=>this.onClickPriceFilter('all')}>综合</span></li>
            <li><span onClick={()=>this.onClickPriceFilter()}>价格<em className="arr"><i className={`${this.state.priceFilter == '1' ? 'cur' : null}`}></i><i className={`${this.state.priceFilter == '0' ? 'cur' : null}`}></i></em></span></li>
          </ul>
        </div>
        <div className="list-warp">
        {
          this.state.list.length>0 ? <ul>
            <Item2Row lists={this.state.list}></Item2Row>
          </ul> : <div className="none-tips"><div className="iconfont icon-zanwuneirong"></div>暂无商品</div>
        }
        </div>
      </div>
    )
  }

  //搜索
  onChangeSearchKey(e){
    // console.log(e.target.value)
    this.setState({searchVal: e.target.value,valKeyShow: true})
  }
  //按下回车搜索
  onKeyDownSearchKey(e){
    // var searchDom = document.getElementById('search');
    if (e.keyCode == "13") {
      // var history = JSON.stringify(localStorage.getItem('searchHistory')) || [];
      var h_arr = JSON.parse(localStorage.getItem('searchHistory')) || []
      // 先获取当前searchHistory
      console.log(h_arr)
      h_arr.splice(0,0,this.state.searchVal);
      console.log(h_arr, '111111')
      // var arr = JSON.parse(localStorage.getItem("searchHistory"))
      localStorage.setItem('searchHistory', JSON.stringify(h_arr))
      
      window.location.href="/list/result?q=" + this.state.searchVal
　　}
  }
  //清除搜索
  onClickClearVal(){
    var searchDom = document.getElementById('search');
    this.setState({valKeyShow: false})
    searchDom.value = ''
  }
  // 选择价格
  onClickPriceFilter(t){
    if(t){
      this.setState({priceFilter: ''})
      React.$api.Get(`${config.BASE_URL}/hotProduct?priceFilter=`).then((res) => {
        this.setState({list : res.data })
      })
    }
    // 0是低价  1是高价
    if(this.state.priceFilter == '' || this.state.priceFilter == '1'){
      this.setState({priceFilter: '0'})
      React.$api.Get(`${config.BASE_URL}/hotProduct?priceFilter=0`).then((res) => {
        this.setState({list : res.data })
      })
    }else{
      this.setState({priceFilter: '1'})
      React.$api.Get(`${config.BASE_URL}/hotProduct?priceFilter=1`).then((res) => {
        this.setState({list : res.data })
      })
    }
  }
}



export default Lists