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
import swal from 'sweetalert';


function Login() {
    const navigate = useNavigate() 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onFinish = () =>{
        console.log("email", email)
        console.log("Password", password)

if(email == "admin123@gmail.com" && password == "admin123"){
    swal({
        title: "Success!",
        text: "welcome to Indylyfe!",
        icon: "success",
      });
      setEmail("");
      setPassword("");
      navigate("/dashboard")
}else{
    swal({
        title: "Error!",
        text: "Incorrect Email or Password!",
        icon: "error",
      });
}

    }



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
          <p style={{color:'black', fontWeight:'bold', fontSize:"18px", textAlign:'center', textTransform:'capitalize'}}>To continue login with indylyfe</p>
          <Button type="primary" shape="round" style={{backgroundColor:'#4167b2', display:'flex', alignItems:'center', justifyContent:'space-evenly',textAlign:'left', fontWeight:'bold',border:"2px solid #4167b2"}} icon={<FaFacebookF />} block size={'large'} >  Connect with Facebook
        </Button>
        <br/>

        <Button type="default" shape="round" icon={<FcGoogle />} block size={'large'} style={{ fontWeight:'bold', display:'flex', alignItems:'center', justifyContent:'space-evenly',textAlign:'left',color:"grey",border:"2px solid grey"}}> Connect with Google
        </Button>

        <Divider>or</Divider>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item label="Username or email" style={{fontWeight:'bold'}} rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input placeholder="Username or Email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderRadius:'50px', padding:'8px 10px', border:"2px solid grey"}} />
          </Form.Item>
          <Form.Item label="Password" style={{fontWeight:'bold'}}>
            <Input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderRadius:'50px', padding:'8px 10px', border:"2px solid grey"}} />
          </Form.Item>
          <p style={{color:'black',margin:0,  fontWeight:'bold', fontSize:"14px"}}>forgot your password?</p>
         <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
<div>
         <Form.Item name="remember" valuePropName="checked" >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      </div>

      <div>
          <Form.Item >
            <Button type="primary" onClick={(e)=>onFinish(e)} size="large"style={{borderRadius:'20px', backgroundColor:'#4c23ed',border:'none', fontWeight:'bold'}}>LOGIN</Button>
          </Form.Item>
         </div>
         </div>
        
        </Form>

        <Button type="default" shape="round" onClick={()=>navigate("/signup")}  block size={'large'} style={{ fontWeight:'bold',color:"grey", border:'2px solid grey'}}> SIGNUP WITH INDYLYFE
        </Button>
      </div>
    </Layout>
  );
}

export default Login;
