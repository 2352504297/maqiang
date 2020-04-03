import React from 'react';
import { MenuButton, Menu, MenuItem,LinkButton } from 'rc-easyui';
import "./Navmenu.css"
const list = [
    {
        name: "网站首页",
        updown: "",
        url: "http://ybj.yanan.gov.cn/",
        id: "1"
    },
    {
        name: "新闻中心",
        updown: [
            {
                name: "医保动态",
                url: "http://ybj.yanan.gov.cn//ybdt/index.jhtml",
            }, {
                name: "国务院信息",
                url: "http://www.gov.cn/guowuyuan/index.htm",
            }, {
                name: "县区快讯",
                url: "http://ybj.yanan.gov.cn//xqkx/index.jhtml",
            },

        ],
        url: "http://ybj.yanan.gov.cn/ybdt/index.jhtml",
        id: "2"
    },
    {
        name: "信息公开",
        updown: [
            {
                name: "单位简介",
                url: "http://ybj.yanan.gov.cn//dwjj/index.jhtml",
            }, {
                name: "公告公示",
                url: "http://ybj.yanan.gov.cn//gsgg/index.jhtml",
            }, {
                name: "机关党建",
                url: "http://ybj.yanan.gov.cn//jgdj/index.jhtml",
            }, {
                name: "规划计划",
                url: "http://ybj.yanan.gov.cn//ghjh/index.jhtml",
            }, {
                name: "部门预算",
                url: "http://ybj.yanan.gov.cn//bmys/index.jhtml",
            }, {
                name: "提案议案",
                url: "http://ybj.yanan.gov.cn//taya/index.jhtml",
            },
            {
                name: "公开目录",
                url: "http://ybj.yanan.gov.cn//gkml/index.jhtml",
            },
        ],
        url: "http://ybj.yanan.gov.cn/dwjj/index.jhtml",
        id: "3"
    },
    {
        name: "政策法规",
        updown: [
            {
                name: "医疗保险",
                url: "http://ybj.yanan.gov.cn//ylbx/index.jhtml",
            }, {
                name: "政策解读",
                url: "http://ybj.yanan.gov.cn//zcjd/index.jhtml",
            },

        ],
        url: "http://ybj.yanan.gov.cn/ylbx/index.jhtml",
        id: "4"
    },
    {
        name: "网上大厅",
        updown: "",
        url: "https://wsbs.yayb.com.cn/onlineController/news_online",
        id: "5"
    },
    {
        name: "互动交流",
        updown: [
            {
                name: "局长信箱",
                url: "http://ybj.yanan.gov.cn//jzxx/index.jhtml",
            }, {
                name: "问题解答",
                url: "http://ybj.yanan.gov.cn//wtjd/index.jhtml",
            },

        ],
        url: "http://ybj.yanan.gov.cn/jzxx/index.jhtml",
        id: "6"
    },
    {
        name: "专题专栏",
        updown: "",
        url: "http://ybj.yanan.gov.cn/topic/4.jspx",
        id: "7"
    },
    {
        name: "下载专区",
        updown: [
            {
                name: "城乡居民",
                url: "http://ybj.yanan.gov.cn//cxjm/index.jhtml",
            }, {
                name: "城镇职工",
                url: "http://ybj.yanan.gov.cn//czzg/index.jhtml",
            },

        ],
        url: "http://ybj.yanan.gov.cn/czzg/index.jhtml",
        id: "8"
    }
];
class NavMenu extends React.Component {
    constructor( props ) {
        super( props )
        this.state = {
            liked: []
        };
        this.editMenu = this.editMenu.bind(this);
    }
    editMenu=(updown)=> {
        let like=[];
        updown.map((res)=>{
            like.push(
                <a href={res.url}>
                <MenuItem text={res.name}></MenuItem>
                </a>
            )
        })
          return(
            <Menu>
                {like}
            </Menu>
          )
    }
    
    render() {
        return list.map((res,index) => {
            return (
                <div className="nav-menu-frist-li">
                  {(() => {
                      switch (res.id) {
                        case '1':
                          return <LinkButton plain href={res.url} >
                          {res.name}
                      </LinkButton>
                        case '2':
                          return  <MenuButton text={res.name} plain menu={(e)=>this.editMenu(res.updown)} >
                          </MenuButton>;
                        case '3':
                            
                          return <MenuButton text={res.name} plain menu={(e)=>this.editMenu(res.updown)} >
                          </MenuButton>;
                          case '4':
                          return <MenuButton text={res.name} plain menu={(e)=>this.editMenu(res.updown)} >
                          </MenuButton>;
                          case '5':
                          return <LinkButton plain href={res.url} >
                          {res.name}
                      </LinkButton>;
                          case '6':
                          return <MenuButton text={res.name} plain menu={(e)=>this.editMenu(res.updown)} >
                          </MenuButton>;
                          case '7':
                          return <LinkButton plain href={res.url} >
                          {res.name}
                      </LinkButton>;
                          case '8':
                          return <MenuButton text={res.name} plain menu={(e)=>this.editMenu(res.updown)} >
                          </MenuButton>;
                        default:
                          return null;
                      }
                  })()}
                </div>  
              );
        })

    }
    
}


export default NavMenu;