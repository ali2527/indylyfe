import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, Menu, Avatar, Dropdown } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import logo from "../Assets/logo.png";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { MdPlaylistPlay } from "react-icons/md";
import { GiLoveSong } from "react-icons/gi";
import { SiGooglepodcasts } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

const { Header, Content, Footer, Sider } = Layout;
const menu = (
  <Menu
    style={{
      backgroundColor: "rgba(255,255,255,0.5)",
      color: "white",
      border: "1px solid white",
      borderRadius: "10px",
    }}
  >
    <Menu.Item key="0">
      <a href="" style={{ color: "white" }}>
        Profile
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a style={{ color: "white" }}>Upgrade to Premium</a>
    </Menu.Item>

    <Menu.Item key="3" style={{ color: "white" }}>
      Logout
    </Menu.Item>
  </Menu>
);

function Dashboard() {
    const song = useSelector(state => state);
    console.log("song", song)
    const navigate = useNavigate()
  return (
    <div>
      <Layout style={{ height: "90vh" }}>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          style={{ backgroundColor: "black" }}
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div
            className="logo"
            style={{
              minHeight: "100px",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={logo} width={"100px"} />
          </div>
          <Menu
            style={{ backgroundColor: "black", color: "white", border: "none" }}
            mode="inline"
            className="sidebarNav"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" icon={<AiOutlineHome />} onClick={()=>navigate('/dashboard')}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<AiOutlineSearch />} onClick={()=>navigate('/dashboard/search')}>
              Search
            </Menu.Item>
            <Menu.Item key="3" icon={<BiLibrary />} onClick={()=>navigate('/dashboard/library')}>
              Your Library
            </Menu.Item>
            <Menu.Item key="4" icon={<MdPlaylistPlay />}>
              Create Playlist
            </Menu.Item>
            <Menu.Item key="5" icon={<GiLoveSong />}>
              Liked Songs
            </Menu.Item>
            <Menu.Item key="6" icon={<SiGooglepodcasts />}>
              Podcasts
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background innerHeader"
            style={{
              padding: 0,
              backgroundColor: "#373737",
              lineHeight: "40px",
            }}
          >
            <div
              style={{
                textAlign: "right",
                padding: "10px 20px",
                justifyContent: "flex-end",
              }}
            >
              <Dropdown overlay={menu} trigger={["click"]}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0px 20px",
                    border: "1px solid white",
                    borderRadius: "30px",
                  }}
                  className="avatarBox"
                >
                  <Avatar size={30} icon={<UserOutlined />} />
                  &emsp;
                  <h1
                    style={{
                      color: "white",
                      display: "inline",
                      margin: 0,
                      fontSize: "20px",
                    }}
                  >
                    Admin
                  </h1>
                </div>
              </Dropdown>
            </div>
          </Header>
          <Content style={{ margin: 0 }}>
            <div
              className="site-layout-background"
              style={{
                padding: "30px",
                backgroundColor: "#373737",
                minHeight: 360,
                overflowY: "auto",
                height: "82.9vh",
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
      <AudioPlayer
        style={{ zIndex: 10, backgroundColor: "#494749" }}
        layout="stacked-reverse"
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        onPlay={(e) => console.log("onPlay")}
      />
    </div>
  );
}

export default Dashboard;
