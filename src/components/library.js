import React from "react";
import { Input, Space, Layout, Row, Col, Card, Tabs } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import artist2 from "../Assets/artist2Img.jpeg";
import artist3 from "../Assets/artist3Img.jpeg";
import artist4 from "../Assets/artist4Img.jpeg";
import artist5 from "../Assets/artist5Img.jpeg";

const { TabPane } = Tabs;
const style = { background: "#0092ff", padding: "8px 0" };

function Library() {
  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Tabs defaultActiveKey="1" centered type="card">
        <TabPane tab="PlayLists" key="1">
          <br />
          <Row gutter={20}>
            <Col className="gutter-row" span={4}>
              <Card
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#4d4d4d",
                  border: "none",
                }}
                className="homeInnerCard"
                cover={
                  <img
                    alt="banner Image"
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZROfVKHACX8cDClQ8W9hJ9KlMJBkoXxbWw&usqp=CAU"
                    }
                    className="homeCardsImg"
                    className="homeCardsImg"
                  />
                }
              >
                <div>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    My PlayList # 1
                  </h1>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "14px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    By jhon Doe
                  </h1>
                </div>
              </Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#4d4d4d",
                  border: "none",
                }}
                className="homeInnerCard"
                cover={
                  <img
                    alt="banner Image"
                    src={
                      "https://i.pinimg.com/736x/17/4a/cd/174acde545d61ead6f3cefc2c161cb13.jpg"
                    }
                    className="homeCardsImg"
                    className="homeCardsImg"
                  />
                }
              >
                <div>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    My PlayList # 2
                  </h1>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "14px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    By jhon Doe
                  </h1>
                </div>
              </Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#4d4d4d",
                  border: "none",
                }}
                className="homeInnerCard"
                cover={
                  <img
                    alt="banner Image"
                    src={
                      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f5a34e108782021.5fc5820ec88bf.png"
                    }
                    className="homeCardsImg"
                    className="homeCardsImg"
                  />
                }
              >
                <div>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    My PlayList # 3
                  </h1>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "14px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    By jhon Doe
                  </h1>
                </div>
              </Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#4d4d4d",
                  border: "none",
                }}
                className="homeInnerCard"
                cover={
                  <img
                    alt="banner Image"
                    src={
                      "https://i.pinimg.com/736x/b7/54/6b/b7546bca6cbf4fe7f474d213bb9c6a28.jpg"
                    }
                    className="homeCardsImg"
                    className="homeCardsImg"
                  />
                }
              >
                <div>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    My PlayList # 4
                  </h1>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "14px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    By jhon Doe
                  </h1>
                </div>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Artists" key="2">
          <br />
          <Row gutter={20}>
            <Col className="gutter-row" span={4}>
              <Card
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#4d4d4d",
                  border: "none",
                }}
                className="homeInnerCard"
                cover={
                  <img
                    alt="banner Image"
                    src={artist2}
                    className="homeCardsImg"
                    className="homeCardsImg"
                  />
                }
              >
                <div>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    Artist # 1
                  </h1>
                </div>
              </Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#4d4d4d",
                  border: "none",
                }}
                className="homeInnerCard"
                cover={
                  <img
                    alt="banner Image"
                    src={artist3}
                    className="homeCardsImg"
                    className="homeCardsImg"
                  />
                }
              >
                <div>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    Artist # 2
                  </h1>
                </div>
              </Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#4d4d4d",
                  border: "none",
                }}
                className="homeInnerCard"
                cover={
                  <img
                    alt="banner Image"
                    src={artist4}
                    className="homeCardsImg"
                    className="homeCardsImg"
                  />
                }
              >
                <div>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    Artist # 3
                  </h1>
                </div>
              </Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#4d4d4d",
                  border: "none",
                }}
                className="homeInnerCard"
                cover={
                  <img
                    alt="banner Image"
                    src={artist5}
                    className="homeCardsImg"
                    className="homeCardsImg"
                  />
                }
              >
                <div>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    Artist # 4
                  </h1>
                </div>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Albums" key="3">
          <Row gutter={20}>
            <Col className="gutter-row" span={4}>
              <Card
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#4d4d4d",
                  border: "none",
                }}
                className="homeInnerCard"
                cover={
                  <img
                    alt="banner Image"
                    src={
                      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
                    }
                    className="homeCardsImg"
                    className="homeCardsImg"
                  />
                }
              >
                <div>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    Album # 1
                  </h1>
                </div>
              </Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#4d4d4d",
                  border: "none",
                }}
                className="homeInnerCard"
                cover={
                  <img
                    alt="banner Image"
                    src={
                      "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/160db2f2cc6eaef1ad40cb4f5f43cffd_screen.jpg?ts=1561422695"
                    }
                    className="homeCardsImg"
                    className="homeCardsImg"
                  />
                }
              >
                <div>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    Album # 2
                  </h1>
                </div>
              </Card>
            </Col>
            <Col className="gutter-row" span={4}>
              <Card
                style={{
                  width: "100%",
                  padding: "20px",
                  borderRadius: "10px",
                  backgroundColor: "#4d4d4d",
                  border: "none",
                }}
                className="homeInnerCard"
                cover={
                  <img
                    alt="banner Image"
                    src={
                      "https://thumbs.dreamstime.com/b/dynamic-radial-color-sound-equalizer-design-music-album-cover-template-abstract-circular-digital-data-form-vector-160916775.jpg"
                    }
                    className="homeCardsImg"
                    className="homeCardsImg"
                  />
                }
              >
                <div>
                  <h1
                    style={{
                      color: "white",
                      fontSize: "16px",
                      margin: "0",
                      textAlign: "center",
                    }}
                  >
                    Album # 3
                  </h1>
                </div>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </Layout>
  );
}

export default Library;
