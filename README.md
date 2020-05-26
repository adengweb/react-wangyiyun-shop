## React-wangyiyun-shop React仿网易云商城

云音乐商城是专注于音乐场景打造的音乐购物平台，包含音乐人周边、3c影音数码、音乐市集等，和我们一起让音乐购有趣，给生活加点料

## 使用插件

``` bash
  Ant Design Mobile  // 蚂蚁金服React UI框架
  node-sass  // css预处理   yarn add node-sass
  React router  //路由
  axios  //  使用Promise管理异步的http库
  redux   // 状态管理模式   npm install redux
  JSON-server   // 启动API服务器
```

## 服务启动

``` bash
  启动API： json-server --watch --port 3200 db.json

  开发环境： yarn start
  打包环境： yarn build
```

## API

``` bash
http://localhost:3200/user  // 用户数据
http://localhost:3200/welfareInfo  // 用户福利社 需要用户status = 1展示
http://localhost:3200/banners   // 首页banner
http://localhost:3200/hotProduct   // 热门推荐
http://localhost:3200/gettopics   // 分类
  
```

## Project issue

``` bash
React组件的写法
1、函数式
function Comp(props){
  return(...)
}

2、类
class Comp extends React.Component {
  render(){
    return ( ... )
  }
}

属性
<Comp name="" style={{...}} />  //单个属性直接传，多个属性用对象

状态
class Comp{
  state = {}
  componentDidMount(){
    this.setState({prop:val})  //直接设置值
    this.setState((state) =>({prop:val}))  // funtion设置
  }
}

条件和循环

{this.state.isLogin ? {userInfo.name} : 登录}  //三元表达式
{this.state.msg && <p>{this.state.msg}</p>}  // 如果前面不为空就输出
{this.state.list.map( u => <li>{u.name}</li>)}  //循环

事件
1、onChange = () => {} //注意this的指向
<input onChange = {this.onChange}>

<input onChange = {()=>this.onChange(val)}>
  
```

## vs code代码片段

点选「首选项：配置用户代码片片段」；
点击界面最左侧竖栏（也即活动栏）最下方的齿轮按钮，在弹出来的菜单中点选「用户代码片段」；

自定义React常用的代码片段  body内容用\n换行  $ {1：name}来指定新建后的鼠标位置（1参数：第几个指针，2参数：指针选择的内容）；
``` bash
  "Print to rapp": {
    "prefix": "rapp",
    "body": [
      "import React from 'react'\n\nconst App = () => (\n  <div>$1\n  </div>\n)\n\nexport default App",
      "$2"
    ],
    "description": "新建react模板"
  },
  "Print to rappc": {
    "prefix": "rappc",
    "body": [
      "import React, { Component } from 'react';\n\nclass ${1:Name} extends Component{\n  static defaultProps={			\n  }\n\n  static propTypes = {\n  }\n\n  constructor(props) {\n    super(props)\n    this.state = {}\n  }\n  render(){\n    return (\n      <div>${2:Name}</div>\n    )\n  }\n}\n\nexport default ${3:Name}"
    ],
    "description": "新建react组件"
  }
```
原文链接：https://blog.csdn.net/maokelong95/java/article/details/54379046

## License

MIT
[前端蜗牛](http://adeng.vip)
[adeng.y](http://1eng.vip)
