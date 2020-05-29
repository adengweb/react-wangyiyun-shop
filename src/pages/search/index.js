import React, { Component } from 'react';
import axios from 'axios';
import * as config from '../../config'

import './style.scss'

class Search extends Component{
  state = {
    searchVal: '',
    arrVal: [],
    searchConfigKey: {},
    searchWords: [],
    searchHistory: [],
  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.search

    const start = new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1);
    console.log(start);

    //获取搜索历史记录
    // localStorage.setItem('searchHistory', JSON.stringify(['TODO']))
    this.setState({
      searchHistory: JSON.parse(localStorage.getItem('searchHistory'))
    })

    //热门搜索
    axios.get(`${config.BASE_URL}/searchConfigKey`).then((res) => {
      console.log(res.data, 'searchConfigKey')
      this.setState({ searchConfigKey : res.data })
      this.setState({ searchWords : res.data.configKey })
    })
  }
  render(){
    var searchWords = this.state.searchWords
    var searchHistory = this.state.searchHistory
    return (
      <div className="search">
        <div className="search-bar">
          <div className="inputwrap">
            <i className="iconfont icon-sousuo1"></i>
            <input id="search" type="text" placeholder={this.state.searchConfigKey.defaultKey} onChange={(e)=>this.onChangeSearchKey(e)} onKeyDown={(e)=>this.onKeyDownSearchKey(e)} />
            {
              this.state.searchVal && 
              <span className="btn-clear" onClick={()=>this.onClickClearVal()}>
                <i className="iconfont icon-close"></i>
              </span>
            }
          </div>
        </div>
        <div className="list">
          {this.state.searchVal.length > 0 ?
          <div className="chengVal">
            <a href={`/list/result?q=${this.state.searchVal}`}>搜索 " {this.state.searchVal} "</a>
          </div>
          :
          <div>
            <div className="hot-search-words">
              <h3>热门搜索</h3>
              <div className="cnt">
                {
                  searchWords.map((item, index) =>(
                    <span key={index + 1}>{item[index + 1]}</span>
                  ))
                }
              </div>
            </div>
            {
            searchHistory &&
            <ul className="search-history">
              {
                searchHistory.map((item, index) =>(
                <li key={index}>
                  <i className="iconfont icon-shijian3"></i>
                  <a href={`/list/result?q=${item}`}>{item}</a>
                  <span className="btn-clear" onClick={()=>this.onClickDelHistory(index)}>
                    <i className="iconfont icon-close"></i>
                  </span>
                </li>
                ))
              }
            </ul>
            }
          </div>
          }
        </div>
      </div>
    )
  }
  //搜索
  onChangeSearchKey(e){
    // console.log(e.target.value)
    this.setState({searchVal: e.target.value})
  }
  //按下回车搜索
  onKeyDownSearchKey(e){
    // var searchDom = document.getElementById('search');
    if (e.keyCode == "13") {
      var history = JSON.stringify(this.state.searchHistory) || [];
      var h_arr = JSON.parse(history)
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
    this.setState({searchVal: ''})
    searchDom.value = ''
  }
  // 删除搜索记录
  onClickDelHistory(index){
    var history = JSON.stringify(this.state.searchHistory) || [];
    var h_arr = JSON.parse(history)
    // console.log(JSON.parse(history_arr))
    h_arr.splice(index, 1);
    console.log(h_arr , 'h_arrh_arr')
    localStorage.setItem('searchHistory', JSON.stringify(h_arr))
    this.setState({
      searchHistory: JSON.parse(localStorage.getItem('searchHistory'))
    })
  }
}

export default Search