import React from "react";
import './FormPage.css';
import {  Layout,Row,Col,Select, Form, Input,DatePicker,Radio,Button ,FormInstance,Checkbox} from 'antd'
import { Option } from "antd/es/mentions";
import { Header, Content, Footer, } from 'antd/es/layout/layout';
import {Routes, Route, useNavigate} from 'react-router-dom';

function FormPage() {
    const formRef = React.useRef<FormInstance>(null);
    const navigate = useNavigate();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
    const [form] = Form.useForm();
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
      };
      
      const onReset = () => {
        formRef.current?.resetFields();
      };
    return(
        <Layout  className="layout-form">
            <Header className='header' >
                  <Row>
                    <Col span={12} style={{fontSize: '24px', fontWeight : 'bold'}} >
                      Form & Table
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
                
                <Form
                    {...layout}
                    form={form}
                    ref={formRef}
                    name="control-hooks"

                    //  style={{backgroundColor: 'green' }}
                    >
                   <Form.Item  >
                        <Row style={{width: 1150,}}>
                            <Form.Item label="คำนำหน้า" rules={[{ required: true }]} style={{width: '14%'}}  >
                                <Select
                                    placeholder="คำนำหน้า"
                                    onChange={onChange}
                                    allowClear
                                    style={{ textAlign: 'left' }}
                                    >
                                    <Option value="Mr.">นาย</Option>
                                    <Option value="Mrs.">นาง</Option>
                                    <Option value="Miss">นางสาว</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="name" label="ชื่อจริง" rules={[{ required: true }]} style={{width: '40%', marginLeft:'1%'}}>
                                <Input/>
                            </Form.Item> 
                            <Form.Item name="name" label="นามสกุล" rules={[{ required: true }]} style={{width: '40%' , marginLeft:'1%'}}>
                                <Input/>
                            </Form.Item>
                        </Row>
                        <Row style={{width: 1150 }}>
                            <Form.Item label="วันเกิด" rules={[{ required: true }]}>
                                <DatePicker format="MM/DD/YYYY" placeholder="เดือน/วัน/ปี"/>
                            </Form.Item>
                            <Form.Item label="สัญชาติ" rules={[{ required: true }]} style={{width: '44%', marginLeft:'1%'}}  >
                                <Select
                                    placeholder="--กรุญาเลือก--"
                                    onChange={onChange}
                                    allowClear
                                    style={{ textAlign: 'left' }}
                                    >
                                    <Option value="Thai.">ไทย</Option>
                                </Select>
                            </Form.Item>
                        </Row>
                        <Row style={{width: 1150 }}>
                            <Form.Item label="เลขบัตรประชาชน"  style={{width: '15%'}}>
                                <Input maxLength={1} style={{textAlign: 'center'}}/>
                            </Form.Item>
                            <label style={{fontSize: 20, marginLeft:'1%'}}>-</label>
                            <Form.Item style={{width: '15%', marginLeft:'1%'}}>
                                <Input maxLength={4} style={{textAlign: 'center'}}/>
                            </Form.Item>
                            <label style={{fontSize: 20, marginLeft:'1%'}}>-</label>
                            <Form.Item style={{width: '15%', marginLeft:'1%'}}>
                                <Input maxLength={5} style={{textAlign: 'center'}}/>
                            </Form.Item>
                            <label style={{fontSize: 20, marginLeft:'1%'}}>-</label>
                            <Form.Item style={{width: '10%', marginLeft:'1%'}}>
                                <Input maxLength={2} style={{textAlign: 'center'}}/>
                            </Form.Item>
                            <label style={{fontSize: 20, marginLeft:'1%'}}>-</label>
                            <Form.Item style={{width: '5%', marginLeft:'1%'}}>
                                <Input maxLength={1} style={{textAlign: 'center'}}/>
                            </Form.Item>
                        </Row>
                        <Row style={{width: 1150 }}>
                            <label >เพศ</label>
                            <Radio.Group style={{ marginLeft:'1%'}}>
                                <Radio value="male">ผู้ชาย</Radio>
                                <Radio value="female">ผู้หญิง</Radio>
                                <Radio value="other">ไม่ระบุ</Radio>
                            </Radio.Group>
                        </Row>
                        <Row style={{width: 1150 , marginTop: '2%'}}>
                            <Form.Item label="หมายเลขโทรศัพท์" rules={[{ required: true }]} style={{width: '20%'}}  >
                                <Select
                                    onChange={onChange}
                                    allowClear
                                    style={{ textAlign: 'left' }}
                                    >
                                    <Option value="th">+66</Option>
                                </Select>
                            </Form.Item>
                            <label style={{fontSize: 20, marginLeft:'1%'}}>-</label>
                            <Form.Item style={{width: '35%', marginLeft:'1%'}}>
                                <Input maxLength={9} style={{textAlign: 'left'}}/>
                            </Form.Item>
                        </Row>
                        <Row style={{width: 1150 }}>
                            <Form.Item  label="หนังสือเดินทาง" style={{width: '40%'}}>
                                <Input/>
                            </Form.Item> 
                        </Row>
                        <Row style={{width: 1150 }}>
                            <Form.Item  label="เงินเดือนที่คาดหวัง" rules={[{ required: true }]} style={{width: '50%'}}>
                                <Input/>
                            </Form.Item> 
                            <Form.Item style={{marginLeft: '10%' }}>
                                <Button htmlType="button" onClick={onReset} >
                                    ล้างข้อมูล
                                </Button>
                                <Button htmlType="submit" >
                                    ส่งข้อมูล
                                </Button>
                            </Form.Item>
                            
                        </Row>
                    
                   </Form.Item >
                </Form>
                </div>
               
                <Button onClick={() => navigate("/")} style={{marginLeft: '2%'}}> หน้าหลัก</Button>
                <div style={{marginLeft: '5%', marginTop: '3%'}}>
                <Form.Item  >
                    <Checkbox>เลือกทั้งหมด</Checkbox>
                    <Button htmlType="button"  >
                        ลบข้อมูล
                    </Button>
                </Form.Item>
                </div>
                
            </Content>

            <Footer className='footer'></Footer> 
        </Layout>
    )
}

export default FormPage;