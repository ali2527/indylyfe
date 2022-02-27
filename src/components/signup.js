import React, { useState } from 'react';
import {
  PageHeader,
  Button,
  Descriptions,
  Layout,
  Menu,
  Row,
  Col,
  Checkbox,
  Divider,
  Form, Input, Radio
} from "antd";
import logo from "../Assets/logo.png"
import { DownloadOutlined } from '@ant-design/icons';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';


function Signup() {
const navigate = useNavigate()
    return (
    <Layout
      className="layout"
      style={{
        display: "flex",
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100vh",
        padding: "20px",
      }}
    >
      <div style={{ display: "inline", padding: "10px" }}>
        <img src={logo} width={70} alt="logo" style={{ display: "inline" }} />{" "}
        <h1
          style={{
            fontSize: "30px",
            letterSpacing: "2px",
            fontWeight: "bold",
            color: "black",
            margin: 0,
            display: "inline",
            zIndex: 10,
          }}
        >
          INDYLYFE
        </h1>
      </div>
      <hr style={{ width: "100%" }} />
      <div style={{ display: "inline", padding: "10px", minWidth:'400px' }}>
          <p style={{color:'black', fontWeight:'bold', fontSize:"18px", textAlign:'center', textTransform:'capitalize'}}>Signup for free to start Listening</p>
          <Button type="primary" shape="round" style={{backgroundColor:'#4167b2', display:'flex', alignItems:'center', justifyContent:'space-evenly',textAlign:'left', fontWeight:'bold',border:"2px solid #4167b2"}} icon={<FaFacebookF />} block size={'large'} >  Signup with Facebook
        </Button>
        <br/>

        <Button type="default" shape="round" icon={<FcGoogle />} block size={'large'} style={{ fontWeight:'bold', display:'flex', alignItems:'center', justifyContent:'space-evenly',textAlign:'left',color:"grey",border:"2px solid grey"}}> Signup with Google
        </Button>

        <Divider>or</Divider>
        <Form layout='vertical'>
          <Form.Item label="Username " style={{fontWeight:'bold'}}>
            <Input placeholder="Username" style={{borderRadius:'50px', padding:'8px 10px', border:"2px solid grey"}} />
          </Form.Item>
          <Form.Item label="Email" style={{fontWeight:'bold'}}>
            <Input placeholder="Email" style={{borderRadius:'50px', padding:'8px 10px', border:"2px solid grey"}} />
          </Form.Item>
          <Form.Item label="Password" style={{fontWeight:'bold'}}>
            <Input placeholder="Password" style={{borderRadius:'50px', padding:'8px 10px', border:"2px solid grey"}} />
          </Form.Item>
          <p style={{color:'black',margin:0,  fontWeight:'bold', fontSize:"14px"}}>Whats Your Gender?</p>
         

          <Form.Item name="checkbox-group" >
        <Checkbox.Group>
          <Row>
            <Col span={12}>
              <Checkbox value="A" style={{ lineHeight: '32px', fontWeight:'bold' }}>
                Male
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B" style={{ lineHeight: '32px', fontWeight:'bold' }}>
                Female
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>


    <div style={{textAlign:'right'}}>
          <Form.Item >
            <Button type="primary" onClick={()=>navigate("/login")} size="large"style={{borderRadius:'20px', backgroundColor:'#4c23ed',border:'none', fontWeight:'bold'}}>SIGNUP</Button>
          </Form.Item>
          </div>
        </Form>
      </div>
    </Layout>
  );
}

export default Signup;
