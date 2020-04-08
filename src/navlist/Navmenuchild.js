import React from 'react';
import "./Navlist.css"
import { MenuButton, TextBox, ComboBox, Label, SubMenu, ButtonGroup, LinkButton, GridColumn, DataGrid } from 'rc-easyui';

class NavMenuChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data3: [
        {
          id: "0",
          name: "请选择查询条件"
        }, {
          id: "1",
          name: "公共服务"
        }],
      value3: "请选择查询条件",
      name3: "",
      data1: [
        {
          id: "0",
          name: "请选择查询条件"
        }, {
          id: "1",
          name: "城镇职工医疗保险参续保"
        }, {
          id: "2",
          name: "基本医疗保险待遇"
        }, {
          id: "3",
          name: "城乡居民医疗保险参续保"
        },
      ],
      value1: "请选择查询条件",
      name1: "",
      data2: [
        {
          id: "0",
          name: "请选择查询条件"
        }, {
          id: "1",
          name: "职工参续保"
        }, {
          id: "2",
          name: "职工缴费"
        },

      ],
      value2: "请选择查询条件",
      name2: "",
      listSECAH: "",
      total: 0,
      pageNumber: 1,
      pageSize: 20,
      data: [],
      loading: false,
      pagePosition: "bottom",
      options: [
        { value: "bottom", text: "Bottom" },
        { value: "top", text: "Top" },
        { value: "both", text: "Both" }
      ]
    }
    this.onChanges = this.onChanges.bind(this);
    this.seatchList = this.seatchList.bind(this);
  }
  handlePageChange(event) {
    this.loadPage(event.pageNumber, event.pageSize)
  }
  getData(pageNumber, pageSize) {
    let total = 100000;
    let data = [];
    let start = (pageNumber - 1) * pageSize;
    for (let i = start + 1; i <= start + pageSize; i++) {
      let amount = Math.floor(Math.random() * 1000);
      let price = Math.floor(Math.random() * 1000);
      data.push({
        inv: "Inv No " + i,
        name: "Name " + i,
        amount: amount,
        price: price,
        cost: amount * price,
        note: "Note " + i
      });
    }
    return {
      total: total,
      pageNumber: pageNumber,
      pageSize: pageSize,
      rows: data
    };
  }
  componentDidMount() {
    this.loadPage(this.state.pageNumber, this.state.pageSize)
  }
  loadPage(pageNumber, pageSize) {
    this.setState({ loading: true })
    setTimeout(() => {
      let result = this.getData(pageNumber, pageSize);
      this.setState(Object.assign({}, result, {
        data: result.rows,
        loading: false
      }))
    }, 1000);
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
              data={this.state.data3}
              value={this.state.value3}
              onChange={(value) => this.setState({ value3: value })}
              onSelectionChange={(value) => this.onChanges("0", value)}
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
              onSelectionChange={(value) => this.onChanges("1", value)}
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
              onSelectionChange={(value) => this.onChanges("2", value)}
            />
          </div>

        </div>
        <div style={{ clear: "both" }}></div>
        <div className="condition">
          <div className="condition-left">
            查询条件:
          {this.state.name3}&nbsp;&nbsp;{this.state.name1}&nbsp;&nbsp;{this.state.name2}
          </div>
          <div className="condition-right">
            <TextBox inputId="t1" placeholder="请输入关键字" name="fname" value={this.state.listSECAH} ></TextBox>
            <ButtonGroup selectionMode="multiple">
              <LinkButton onClick={this.seatchList}>搜 索</LinkButton>
            </ButtonGroup>
          </div>
          <div style={{ clear: "both" }}></div>
          <div className="list-data">
            <h2 className="data-name">延安市保障局网上办理事项列表</h2>
            <DataGrid
              style={{ height: 400 }}
              pagination
              lazy
              {...this.state}
              onPageChange={this.handlePageChange.bind(this)}
            >
              <GridColumn field="inv" title="" align="center"></GridColumn>
              <GridColumn field="name" title="事项名称"></GridColumn>
              <GridColumn field="amount" title="事项类别" align="center"></GridColumn>
              <GridColumn field="price" title="业务分类/主题" align="center"></GridColumn>
              <GridColumn field="cost" title="操作" align="center"></GridColumn>
            </DataGrid>
          </div>
        </div>
      </div>
    )
  }
  // https://wsbs.yayb.com.cn/onlineController/news_online
  onChanges = (id, valuees) => {
    console.log(id);
    let values = valuees.name;
    if (id == "0") {
      if (values == "请选择查询条件") {
        this.setState({ name3: "" });
      } else {
        this.setState({ name3: values });
      }

    } else if (id == "1") {
      if (values == "请选择查询条件") {
        this.setState({ name1: "" });
      } else {
        this.setState({ name1: values });
      }

    } else if (id == "2") {
      if (values == "请选择查询条件") {
        this.setState({ name2: "" });
      } else {
        this.setState({ name2: values });
      }
    }
  }
  seatchList(){
    console.log("1111111111111111111")
    fetch("").then(response => {
            // var rtodayN 
            console.log(response+"结果"+response.text()+"54535435435"+response.addAttribute)

            response.then(res => {
              response = res;
                console.log(response)
                console.log("2222222222222")
                // this.setState({ rtodayN })
                // console.log(this.state)
            })


        })

  }
}

export default NavMenuChild;