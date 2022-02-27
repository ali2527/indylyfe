import React from "react";
import {
  PageHeader,
  Button,
  Descriptions,
  Layout,
  Menu,
  Row,
  Col,
  Divide,
} from "antd";
import banner1 from "../Assets/banner1.jpeg";

import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const style = { background: "#0092ff", padding: "0px 10px" };

function Home() {
    const navigate = useNavigate()
  return (
    <Layout className="layout">
      <Header style={{ backgroundColor: "transparent" }}>
        <div
          style={{
            width: "100%",

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "25px",
              letterSpacing: "2px",
              fontWeight: "bold",
              color: "white",
              margin: 0,
              zIndex: 10,
            }}
          >
            INDYLYFE
          </h1>
          <div>
            <Row gutter={20}>
              <Col className="gutter-row">
                <p style={{ margin: 0, fontSize: "18px", color: "grey",cursor:'pointer' }}>
                  Premium
                </p>
              </Col>
              <Col className="gutter-row">
                <p style={{ margin: 0, fontSize: "18px", color: "grey",cursor:'pointer' }}>
                  Support
                </p>
              </Col>
              <Col className="gutter-row">
                <p style={{ margin: 0, fontSize: "18px", color: "grey",cursor:'pointer' }}>
                  Download
                </p>
              </Col>

              <Col className="gutter-row">
                <p onClick={()=> navigate("login")} style={{cursor:'pointer', margin: 0, fontSize: "18px", color: "white" }}>
                  Login
                </p>
              </Col>
              <Col className="gutter-row">
                <Button
                  type="primary"
                  size="middle"
                  className="SignupBtn"
                  style={{ backgroundColor: "grey", border: "none" }}
                  onClick={()=> navigate("signup")}
                >
                  Signup
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Header>
      <Content style={{ padding: "0px" }}>
        <div
          className="site-layout-content"
          style={{
            backgroundImage: `url(${banner1})`,
            minHeight: "120vh",
            backgroundSize: "cover",
            marginTop: "-80px",
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        INDYLYFE ©2022 Created by DarkMode Labs
      </Footer>
    </Layout>
  );
}

export default Home;
