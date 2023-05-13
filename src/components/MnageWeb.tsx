import React from "react";
import './MnageWeb.css';
import {  Layout,Row,Col, Select, Button } from 'antd'
import { Header, Content, Footer, } from 'antd/es/layout/layout';
import { Option } from "antd/es/mentions";
import {Routes, Route, useNavigate} from 'react-router-dom';


function MnageWeb() {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };
    return(
        <Layout  className="layout-manage">
            <Header className='header' >
                  <Row>
                    <Col span={12} style={{fontSize: '24px', fontWeight : 'bold'}} >
                      Layout & Style
                    </Col>
                    <Col span={12} style={{textAlign: 'right'}}>
                    <Select
                            placeholder="TH"
                            onChange={onChange}
                            allowClear
                            style={{ textAlign: 'left', width:'10%' }}
                            >
                            <Option value="EN">EN</Option>
                            <Option value="TH">TH</Option>
                        </Select>
                    </Col>
                   
                   
                  </Row>
                
            </Header>
       
            <Content className='content'>
                <div  className="frame1" >
                  <Row >
                    <button className="button-1"  style={{marginLeft: '8%'}}>
                        <div className="triangle-1" />
                      </button>
                    
                    <button className="button-2" style={{marginLeft: '1%', marginRight: '1%'}}>
                      <div className="triangle-2" style={{marginLeft: '14%'}} />
                      <div className="triangle-3" style={{marginLeft: '35%' }}/>
                    </button>
                    <button className="button-1" style={{marginRight: '8%'}}>
                    <div className="triangle-4" />
                    </button>
                  </Row>
                  <Row style={{borderBottom : '2px solid ' , margin: '1% 9% 1% 8%'}}>

                  </Row>
                  <Row>
                    <button className="button-1" style={{marginLeft: '29%'}}>
                      <div className="trapezoid" />
                    </button>
                    <button className="button-1" style={{marginLeft: '1%',marginRight: '1%'}}>
                      <div className="parallelogram" />
                    </button>
                    <button className="button-1" style={{marginRight: '8%'}}>
                      <div className="rectangle" />
                    </button>
                  </Row>
                  <Row style={{marginTop:'1%'}}>
                    <button className="button-1" style={{marginLeft: '19%'}}>
                      <div className="oval" />
                    </button>
                    <button className="button-1" style={{marginLeft: '1%',marginRight: '1%'}}>
                      <div className="square" style={{marginLeft: '26%',marginRight: '26%'}}/>
                    </button>
                    <button className="button-1" style={{marginRight: '8%'}}>
                      <div className="circle" style={{marginLeft: '26%',marginRight: '26%'}}/>
                    </button>
                  </Row>


                </div> 
            </Content>

            <Footer className='footer'></Footer> 
        </Layout>
    )
}

export default MnageWeb;