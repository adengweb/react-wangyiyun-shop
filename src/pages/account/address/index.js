import React, { Component } from 'react';
import { List, InputItem, Picker, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { district } from 'antd-mobile-demo-data';

import * as config from '../../../config'
import './style.scss'


class Address extends Component{
  state = {
    lists: null,
    isEdit: true,
  }
  componentDidMount(){
    document.title = config.CONFIG_TITLE.acctountAddress


    React.$api.Get(`${config.BASE_URL}/getAddressList`).then(res=>{
      console.log(res.data, 'getAddressList')
      this.setState({lists: res.data})
    })
  }
  render(){
    const { getFieldProps } = this.props.form;
    return (
      <div className="mod-address">
        {this.state.isEdit ?
          <div className="list">
            {this.state.lists === null ? 
            <ul>
              {/* <li className="item">
                <h3 className="tit"><span>name</span><span>tel</span></h3>
                <p className="info">广东-深圳-南山区2356356565</p>
                <span className="iconfont icon-bianji edit"></span>
              </li> */}
            </ul>
            : <div className="none-tips"><div className="iconfont icon-zanwushouhuodizhi"></div>暂无收货地址</div>}
            <div className="add"><span onClick={()=>this.setState({isEdit: false})}>添加收货地址</span></div>
          </div>
         :
          <div className="edit-box">
            <div className="title"><span className="iconfont icon-right1 back" onClick={()=>this.setState({isEdit: true})}></span>添加地址</div>
            <form>
              <List renderHeader={() => ''}>
                <InputItem placeholder="输入收货人姓名" {...getFieldProps('name')}>收货人</InputItem>
                <InputItem placeholder="输入收货人手机号" type="phone" {...getFieldProps('tel')}>手机号</InputItem>
                <Picker extra="选择所在地区"
                  data={district}
                  title="选择地区"
                  {...getFieldProps('district', {
                    initialValue: [],
                  })}
                  onOk={e => console.log('ok')}
                  onDismiss={e => console.log('dismiss')}
                >
                  <List.Item arrow="horizontal">所在地区</List.Item>
                </Picker>
                <TextareaItem
                  title="详细地址"
                  placeholder="输入街道、楼牌号等"
                  data-seed="logId"
                  autoHeight
                  {...getFieldProps('ccc')}
                />
              </List>
              <div className="btn-box">
                <div className="but" onClick={this.onSubmit}>保存</div>
              </div>
            </form>
          </div>
        }
      </div>
    )
  }

  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        console.log(error);
        alert('Validation failed');
      }
    });
  }

}

// const TestWrapper = createForm()(Address);
export default Address = createForm()(Address);