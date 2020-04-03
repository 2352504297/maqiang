import React from 'react';
import './App.css';
import NavMenu from "./navmenu/Navmenu";
import NavMenuChild from   "./navlist/Navmenuchild";
export class App extends React.Component {
    constructor(props) {
        super(props);
        var today = new Date(),
            date = today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日';
        this.state = {
            date: date,
            rtodayN: {}
        };
    }
    componentDidMount() {

        fetch("https://tianqiapi.com/api?version=v61&appid=54518179&appsecret=0HDb58sO").then(response => {
            var rtodayN = response.json();
            rtodayN.then(res => {
                rtodayN = res;
                console.log(rtodayN)
                this.setState({ rtodayN })
                console.log(this.state)
            })


        })

    }
    render() {
        return (
            <div className="App" >
                <header className="App-header" >
                    <div className="App-headerleft" >
                        今天是： {this.state.date}
                    </div>
                    <div className="App-header-right" >
                        <span > {this.state.rtodayN.city}: {this.state.rtodayN.tem2}℃~{this.state.rtodayN.tem1}℃ </span>
                        <span className="App-header-right-span" > 空气质量： {this.state.rtodayN.air_level} </span>
                    </div>
                </header>
                <div className="nav" >
                    <div className="nav-login">
                        <div className="nav-login-left">
                            <img src="../image/logo.png" alt="无法获取图片"></img>
                        </div>
                        <div className="nav-login-right">
                            <button>注册</button>
                            <button>登录</button>
                        </div>
                    </div>
                    <div className="nav-menu" >
                            <NavMenu />
                    </div>
                   <div className="nav-list">
                       
                       <NavMenuChild />
                       </div>
                </div>
            </div>
        );
    }
}

export default App;