import React from 'react'
import { Input, Space,Layout, Row, Col,Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';



  const onSearch = value => console.log(value);
  const style = { background: '#0092ff', padding: '8px 0' };

function SearchPage() {
  return (
    <Layout style={{backgroundColor:'transparent'}}>
    <Input size="large" style={{padding:'10px', borderRadius:'20px'}} placeholder="Artists , Songs or Podcasts" prefix={<SearchOutlined />} />
    <br/>
    <h1 style={{color:'white', fontSize:'25px', marginLeft:'10px', marginBottom:'10px'}}>Browse All</h1>
    <br/>
    <Row gutter={20}>
      <Col className="gutter-row" span={8}>
      <Card bordered={false} style={{ width: "100%", borderRadius:'10px', minHeight:300,backgroundImage:'linear-gradient(to right,#4CA1AF , #2C3E50)', display:'flex', justifyContent:'center',alignItems:'center' }}>
      <h1 style={{color:'white', fontSize:'30px', marginLeft:'10px', marginBottom:'10px'}}>Made For You</h1>
    </Card>
      </Col>
      <Col className="gutter-row" span={8}>
      <Card bordered={false} style={{ width: "100%", borderRadius:'10px', minHeight:300,backgroundImage:'linear-gradient(to right, #2C7744   , #4DA0B0)', display:'flex', justifyContent:'center',alignItems:'center' }}>
      <h1 style={{color:'white', fontSize:'30px', marginLeft:'10px', marginBottom:'10px'}}>New Release</h1>
    </Card>
      </Col>
      <Col className="gutter-row" span={8}>
      <Card bordered={false} style={{ width: "100%", borderRadius:'10px', minHeight:300,backgroundImage:'linear-gradient(to right, #e96443 , #904e95)', display:'flex', justifyContent:'center',alignItems:'center' }}>
      <h1 style={{color:'white', fontSize:'30px', marginLeft:'10px', marginBottom:'10px'}}>Charts</h1>
    </Card>
      </Col>

    </Row>

    </Layout>
  )
}

export default SearchPage