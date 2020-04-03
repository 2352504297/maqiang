import React from 'react';
import "./Navlist.css"
import { MenuButton, TextBox, ComboBox, Label, SubMenu, ButtonGroup, LinkButton } from 'rc-easyui';

class NavMenuChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: "0",
          name: "请选择查询条件"
        }, {
          id: "1",
          name: "公共服务"
        }],
      value: "请选择查询条件",
      data1: [
        {
          id: "0",
          name: "请选择查询条件"
        }, {
          id: "1",
          name: "城镇职工医疗保险参续保"
        },{
          id: "2",
          name: "基本医疗保险待遇"
        },{
          id: "3",
          name: "城乡居民医疗保险参续保"
        },
      ],
      value1: "请选择查询条件",
      data2: [
        {
          id: "0",
          name: "请选择查询条件"
        }, {
          id: "1",
          name: "职工参续保"
        },{
          id: "2",
          name: "职工缴费"
        },
      
      ],
      value2: "请选择查询条件"
    }
  }
  render() {
    return (

      <div className="nav-list-if">

        <div className="nav-list-if-list">
          <div className="nav-list-if-list-div">
            <Label htmlFor="c1" align="top">事项类别:</Label>
            <ComboBox
              inputId="c1"
              valueField='id'
              textField='name'
              data={this.state.data}
              value={this.state.value}
              onChange={(value) => this.setState({ value: value })}
            />
          </div>
          <div className="nav-list-if-list-div">
            <Label htmlFor="c2" align="top">业务分类：</Label>
            <ComboBox
              inputId="c2"
              valueField='id'
              textField='name'
              data={this.state.data1}
              value={this.state.value1}
              onChange={(value) => this.setState({ value1: value })}
            />
          </div>
          <div className="nav-list-if-list-div">
            <Label htmlFor="c3" align="top">业务主题:</Label>
            <ComboBox
              inputId="c3"
              valueField='id'
              textField='name'
              data={this.state.data2}
              value={this.state.value2}
              onChange={(value) => this.setState({ value2: value })}
            />
          </div>
          
        </div>
        <div style={{clear: "both"}}></div>
        <div className="condition">
          <div className="condition-left">查询条件</div>
          <div className="condition-right">
            <TextBox inputId="t1" placeholder="请输入关键字" name="fname" value={this.state.value} ></TextBox>
            <ButtonGroup selectionMode="multiple">
              <LinkButton >搜 索</LinkButton>
            </ButtonGroup>
          </div>
        </div>
      </div>
    )
  }
}

export default NavMenuChild;