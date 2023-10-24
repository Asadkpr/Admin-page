import React from "react";
import '../styles/layout.css';

import
{
  UploadOutlined,
  UserOutlined,}
      from "@ant-design/icons";
import { Card, Col, Divider, Layout, Menu, Row, message, theme } from "antd";
import { Image, Space } from "antd";
import { Input } from "antd";
import logo from "../Assets/Logo.png";
import chartpie from "../Assets/icon/chart-pie.svg";
import pages from "../Assets/icon/file.svg";
import sales from "../Assets/icon/sales.svg";
import messageIcon from "../Assets/icon/message.svg";
import lock from "../Assets/icon/lock.svg";
import clipboard from "../Assets/icon/clipboard.svg";
import component from "../Assets/icon/component.svg";
import help from "../Assets/icon/help.svg";
import SubMenu from "antd/es/menu/SubMenu";
import bell from "../Assets/icon/bell.svg";
import Avatar from "../Assets/icon/Avatar2.svg";
import neil from "../Assets/icon/neil.svg";
import search from "../Assets/icon/search.png"
import exclamation from "../Assets/icon/exclamation.svg"
import second from "../Assets/icon/second.svg"
import third from "../Assets/icon/third.svg"
import fourth from "../Assets/icon/fourth.svg"
import fifth from "../Assets/icon/fifth.svg"
import six from "../Assets/icon/sixPic.svg"
import { CustomChart } from "./CustomChart";
import facebook from "../Assets/icon/facebook.svg"
import tweter from "../Assets/icon/tweter.svg"
import github from "../Assets/icon/github.svg"
import 'bootstrap/dist/css/bootstrap.css'
import Table from './Table';
import dribble from "../Assets/icon/dribbble.svg"
import icon from  "../Assets/icon/menu.svg"

const { Header, Content, Footer, Sider } = Layout;
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();  
  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>

       
  <div style={{ }} className="d-none d-sm-block w-50 mt-3">
    <div style={{display:'flex',width:'100%'}}>
    <div style={{display: "flex"}}>
      <img src={logo} />
    </div>
    <Input
      style={{ height: '40px', width: '70%', marginLeft: '20px',borderRadius:'10px' }}
      prefix={<img src={search}  />}
      placeholder="Search" 
    />
    </div>
  </div>


          <div style={{display:'flex',marginLeft:'180px',marginTop:'20px'}}>
            <img src={bell} /> <img src={Avatar} />
          </div>
        </div>
        {/* <div className="logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
          }))}
        /> */}
      </Header>
      <Layout>
        <Sider 
        // style={{overflow:'auto',minHeight:'100vh'}}
        trigger={<img src={icon} style={{backgroundColor:'white',border:'none'}} />}
          // style={{ backgroundColor: "white",marginTop:'-80px',position:"absolute",top:31,zIndex:33}}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
         >
        <Menu className="overview" style={{marginTop:'20px'}}
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[{ label: "Overview", icon: <img  src={chartpie} /> }]}
          />

          <Menu className="page" mode="inline">
            <SubMenu title="pages" icon={<img src={pages} />}>
              <Menu.Item>Product</Menu.Item>
              <Menu.Item>Item</Menu.Item>
              <Menu.Item>Sell</Menu.Item>
            </SubMenu>
          </Menu> 
          <Menu className="sale" mode="inline">
            <SubMenu title="sales" icon={<img src={sales} />}>
              <Menu.Item>Product</Menu.Item>
              <Menu.Item>Item</Menu.Item>
              <Menu.Item>Sell</Menu.Item>
            </SubMenu>
          </Menu>
          <Menu className="message"
            theme="light"
            mode="inline"
            items={[{ label: "Message", icon: <img src={messageIcon} /> }]}
          />
          <Menu className="authentication"  mode="inline">
            <SubMenu title="Authentication" icon={<img src={lock} />}>
              <Menu.Item>Product</Menu.Item>
              <Menu.Item>Item</Menu.Item>
              <Menu.Item>Sell</Menu.Item>
            </SubMenu>
          </Menu>
          <Divider />

          <Menu className="docs"
            theme="light"
            mode="inline"
            items={[{ label: "Docs", icon: <img src={clipboard} /> }]}
          />

          <Menu className="components"
            theme="light"
            mode="inline"
            items={[{ label: "Components", icon: <img src={component} /> }]}
          />

          <Menu className="help"
            theme="light"
            mode="inline"
            items={[{ label: "Help", icon: <img src={help} /> }]}
          />
        </Sider>
        <Layout className="abo-layout">
          <Content>
          <Card>
                <div style={{fontWeight:'700',fontSize:'20px',marginLeft:'50px',marginBottom:'20px'}}>sales < img style={{width:'18px',marginTop:'3px'}} src={exclamation}/> </div>
                   < CustomChart />
               
              </Card>
                <Row>
                <Col xs={24} sm={24} md={12} lg={8}>
                  <Card >
                    <div style={{height:'390px'}}>
                    <h2 style={{ fontSize: "20px", fontWeight: "600",marginBottom:'30px', }}>
                        Latest Customers
                      </h2>
                      <div style={{  display: "flex", justifyContent: "space-between", padding: "5px", }}>
                        <div style={{ display: "flex", marginLeft: "10px" }}>
                          <div>
                            <img src={neil} />
                          </div>
                          <div style={{ marginLeft: "10px" }}>
                            <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "3px",
                              }}
                            >
                              {" "}
                              Neil Sims
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                lineHeight: "0px",
                                fontWeight: "400",
                              }}
                            >
                              email@example.com
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              marginLeft: "60px",
                              fontWeight: "600",
                              fontSize: "16px",
                            }}
                          >
                            $367
                          </p>
                        </div>
                      </div>

                      <div style={{  display: "flex", justifyContent: "space-between", padding: "5px",}}>
                        <div style={{ display: "flex", marginLeft: "10px" }}>
                          <div>
                            <img src={six} />
                          </div>
                          <div style={{ marginLeft: "10px" }}>
                            <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "3px",
                              }}
                            >
                              {" "}
                              Bonnie Green
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                lineHeight: "0px",
                                fontWeight: "400",
                              }}
                            >
                              email@example.com
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              marginLeft: "60px",
                              fontWeight: "600",
                              fontSize: "16px",
                            }}
                          >
                            $67
                          </p>
                        </div>
                      </div>

                      <div style={{  display: "flex", justifyContent: "space-between", padding: "5px", }}>
                        <div style={{ display: "flex", marginLeft: "10px" }}>
                          <div>
                            <img src={second} />
                          </div>
                          <div style={{  marginLeft: "10px" }}>
                            <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "3px",
                              }}
                            >
                              {" "}
                              Micheal Gough
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                lineHeight: "0px",
                                fontWeight: "400",
                              }}
                            >
                              email@example.com
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              marginLeft: "60px",
                              fontWeight: "600",
                              fontSize: "16px",
                            }}
                          >
                            $3467
                          </p>
                        </div>
                      </div>

                      <div style={{  display: "flex", justifyContent: "space-between", padding: "5px",}}>
                        <div style={{ display: "flex", marginLeft: "10px" }}>
                          <div>
                            <img src={third} />
                          </div>
                          <div style={{ marginLeft: "10px" }}>
                            <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "3px",
                              }}
                            >
                              {" "}
                              Thomas Lean
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                lineHeight: "0px",
                                fontWeight: "400",
                              }}
                            >
                              email@example.com
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              marginLeft: "60px",
                              fontWeight: "600",
                              fontSize: "16px",
                            }}
                          >
                            $2367
                          </p>
                        </div>
                      </div>

                      <div style={{  display: "flex", justifyContent: "space-between", padding: "5px", }}>
                        <div style={{ display: "flex", marginLeft: "10px" }}>
                          <div>
                            <img src={fourth} />
                          </div>
                          <div style={{ marginLeft: "10px" }}>
                            <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "3px",
                              }}
                            >
                              {" "}
                              Lana Byrd
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                lineHeight: "0px",
                                fontWeight: "400",
                              }}
                            >
                              email@example.com
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              marginLeft: "60px",
                              fontWeight: "600",
                              fontSize: "16px",
                            }}
                          >
                            $367
                          </p>
                        </div>
                      </div>

                      <div style={{  display: "flex", justifyContent: "space-between", padding: "5px", }}>
                        <div style={{ display: "flex", marginLeft: "10px" }}>
                          <div>
                            <img src={fifth} />
                          </div>
                          <div style={{  marginLeft: "10px" }}>
                            <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "3px",
                              }}
                            >
                              {" "}
                              Karen Nelson
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                lineHeight: "0px",
                                fontWeight: "400",
                              }}
                            >
                              email@example.com
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            style={{
                              marginLeft: "60px",
                              fontWeight: "600",
                              fontSize: "16px",
                            }}
                          >
                            $1367
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={16}>
                  <Card>
                    <div
                    // style={{
                    //   width: "100%",
                    //   // height: "400px",
                    //   boxShadow: "1px 2px 9px black",
                    //   borderRadius: "10px",
                    //   padding:'10px'
                    // }}
                    >
                      <div style={{ fontSize: "20px", fontWeight: "600",marginBottom:'20px' }}>
                        Top products
                      </div>

                      <div
                        style={{ display: "flex", justifyContent: "space-between", padding: "5px",}}
                      >
                        <div style={{ display: "flex", marginLeft: "10px", }}>
                          <div style={{  marginLeft: "10px" }}>
                            <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight:'3px'


                              }}
                            >
                              {" "}
                              Restaurant Booking App
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                lineHeight: "0px",
                                fontWeight: "400",
                                lineHeight: '0px',
                              }}
                            >
                              React & Bootstrap Framework
                            </p>
                          </div>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600", fontSize: "16px" }}>
                            70 sales
                          </p>
                        </div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", padding: "5px", }}>
                        <div style={{ display: "flex", marginLeft: "10px",lineHeight:'15px' }}>
                          <div style={{  marginLeft: "10px" }}>
                          <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                               


                              }}
                            >
                              {" "}
                              UI Kit
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                lineHeight: "0px",
                                fontWeight: "400",
                                lineHeight: '0px',
                              }}
                            >
                              React & Bootstrap Framework
                            </p>
                          </div>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600", fontSize: "16px" }}>
                            70 sales
                          </p>
                        </div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", padding: "5px", }}>
                        <div style={{ display: "flex", marginLeft: "10px",lineHeight:'15px'  }}>
                          <div style={{ marginLeft: "10px" }}>
                          <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",
                                


                              }}
                            >
                              {" "}
                              Design System Pro
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                lineHeight: "0px",
                                fontWeight: "400",
                                lineHeight: '0px',
                              }}
                            >
                              React & Bootstrap Framework
                            </p>
                          </div>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600", fontSize: "16px" }}>
                            70 sales
                          </p>
                        </div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", padding: "5px", }}>
                        <div style={{ display: "flex", marginLeft: "10px",lineHeight:'15px'  }}>
                          <div style={{  marginLeft: "10px" }}>
                          <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",


                              }}
                            >
                              {" "}
                              Dashboard
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                lineHeight: "0px",
                                fontWeight: "400",
                                lineHeight: '0px',
                              }}
                            >
                              React & Bootstrap Framework
                            </p>
                          </div>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600", fontSize: "16px" }}>
                            70 sales
                          </p>
                        </div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", padding: "5px", }}>
                        <div style={{ display: "flex", marginLeft: "10px",lineHeight:'15px'  }}>
                          <div style={{ marginLeft: "10px" }}>
                          <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",


                              }}
                            >
                              {" "}
                              Glassmorphism UI
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                lineHeight: "0px",
                                fontWeight: "400",
                                lineHeight: '0px',
                              }}
                            >
                              React & Bootstrap Framework
                            </p>
                          </div>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600", fontSize: "16px" }}>
                            70 sales
                          </p>
                        </div>
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", padding: "5px", }}>
                        <div style={{ display: "flex", marginLeft: "10px",lineHeight:'15px'  }}>
                          <div style={{ marginLeft: "10px" }}>
                          <p
                              style={{
                                fontSize: "16px",
                                fontWeight: "600",


                              }}
                            >
                              {" "}
                              Multipurpose Template
                            </p>
                            <p
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                lineHeight: "0px",
                                fontWeight: "400",
                                lineHeight: '0px',
                              }}
                            >
                              React & Bootstrap Framework
                            </p>
                          </div>
                        </div>
                        <div>
                          <p style={{ fontWeight: "600", fontSize: "16px" }}>
                            70 sales
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            {/* <Card style={{width:500}} className="custom_card">
            </Card> */}
            <div> <h3 style={{ fontWeight: '600', font: '50px' }}>Transaction</h3>
              <p>This is a list of latest transactions.</p>
            </div>
          <Card>
          <Table />
          </Card>
          <div style={{display:'flex',justifyContent:'space-between'}}>
        <div >

        © 2021 Themesberg, LLC. All rights reserved.
</div>

        <div style={{}}>
          <img src={facebook}/>
          <img src={tweter}/>
          <img src={github}/>
          <img src={dribble}/>
          
        </div>

       
        </div>
          </Content>
        </Layout>
      </Layout>
     
    </>
  );
};



export default App;
