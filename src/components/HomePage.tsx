import React from "react";
import './HomePage.css';
import {  Layout,Select } from 'antd'
import { Option } from "antd/es/mentions";
import { Header, Content, Footer, } from 'antd/es/layout/layout';
import {Routes, Route, useNavigate} from 'react-router-dom';

function HomePage() {
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
      };
    const navigate = useNavigate();

    return(
        <Layout  className="layout-home">
            <Header className='header' >
                <div style={{textAlign: 'right'}}>
                    <Select
                        placeholder="TH"
                        onChange={onChange}
                        allowClear
                        style={{ textAlign: 'left', width:'5%' }}
                        >
                        <Option value="EN">EN</Option>
                        <Option value="TH">TH</Option>
                    </Select> 
                </div>
                
            </Header>
       
            <Content className='content'>
                <div  className="frame1">
                    <button onClick={() => navigate("/MnageWeb")}  className='button'>
                        <p> แบบทดสอบที่ 1</p>
                        <p> การจัดเรียงหน้าเว็บ</p>
                    </button>
                    
                    <button onClick={() => navigate("/FormPage")}   className='button' >
                        <p> แบบทดสอบที่ 2</p>
                        <p> การจัดหน้าฟอร์ม</p>
                    </button> 
                </div> 
            </Content>

            <Footer className='footer'></Footer> 
        </Layout>
    )
}

export default HomePage;