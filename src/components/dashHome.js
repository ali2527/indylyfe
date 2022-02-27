import React from 'react'
import {
    PageHeader,
    Button,
    Descriptions,
    Layout,
    Menu,
    Row,
    Col,
    Divide,
    Card
  } from "antd";
  import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../Assets/banner1.jpeg"
import banner2 from "../Assets/banner2.jpeg"
import banner3 from "../Assets/banner3.jpeg"
import artist1 from "../Assets/artist1.jpeg"
import artist2 from "../Assets/artist2.jpeg"
import artist3 from "../Assets/artist3.jpeg"
import artist4 from "../Assets/artist4.jpeg"
import artist5 from "../Assets/artist5.jpeg"

//carousel Library
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";





function DashHome() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        760: { items: 5 },
        1024: { items: 6 },
      };


  return (
    <Layout className="layout" style={{backgroundColor:'transparent'}}>
      <Carousel autoPlay={true} interval={3000} showIndicators={false} showStatus={false} infiniteLoop={true} showArrows={false} showThumbs={false} style={{backgroundColor:'transparent'}}>
        <div>
          <img src={banner1} height={"350px"} style={{objectFit:'cover', borderRadius:'20px'}}/>
         
        </div>
        <div>
          <img src={banner2} height={"350px"} style={{objectFit:'cover', borderRadius:'20px'}} />
       
        </div>
        <div>
          <img src={banner3} height={"350px"} style={{objectFit:'cover', borderRadius:'20px'}} />
       
        </div>
      </Carousel>
      <br/>

      <h1 style={{color:'white', fontSize:'20px', marginLeft:'10px', marginBottom:'10px'}}>Recently Played</h1>

      <AliceCarousel
            mouseTracking
            keyboardNavigation
            disableDotsControls="true"  
            responsive={responsive}
          >
            {["song1","song2","song3","song4","song5","song6","song7","song8"].map((item, key) => {
              return (
                <div
                  className="item"
                  style={{ marginRight: 10, marginLeft: 10 }}
                  data-value={key + 1}
                
                >
                  <Card
                    style={{ width: "100%", padding:'20px', borderRadius:'10px', backgroundColor:'#4d4d4d', border:'none' }}
                    className="homeInnerCard"
                    cover={<img alt="banner Image" src={"http://www.scottishculture.org/themes/scottishculture/images/music_placeholder.png"} className="homeCardsImg" className="homeCardsImg"/>}
                  >
                    <div>
                    <h1 style={{color:'white', fontSize:'20px', margin:'0'}}>{item}</h1>
                    </div>
                  </Card>
                </div>
              );
            })}
          </AliceCarousel>
<br/>
<Carousel autoPlay={true} interval={3000} showIndicators={false} showStatus={false} infiniteLoop={true} showArrows={false} showThumbs={false} style={{backgroundColor:'transparent'}}>
        <div>
          <img src={artist1} height={"350px"} style={{objectFit:'cover', borderRadius:'20px'}}/>
         
        </div>
        <div>
          <img src={artist2} height={"350px"} style={{objectFit:'cover', borderRadius:'20px'}} />
       
        </div>
        <div>
          <img src={artist3} height={"350px"} style={{objectFit:'cover', borderRadius:'20px'}} />
       
        </div>
        <div>
          <img src={artist4} height={"350px"} style={{objectFit:'cover', borderRadius:'20px'}} />
       
        </div>
        <div>
          <img src={artist5} height={"350px"} style={{objectFit:'cover', borderRadius:'20px'}} />
       
        </div>
      </Carousel>
      <br/>

      <h1 style={{color:'white', fontSize:'20px', marginLeft:'10px', marginBottom:'10px'}}>Most Likec Coldplay</h1>

      <AliceCarousel
            mouseTracking
            keyboardNavigation
            disableDotsControls="true"  
            responsive={responsive}
          >
            {["song1","song2","song3","song4","song5","song6","song7","song8"].map((item, key) => {
              return (
                <div
                  className="item"
                  style={{ marginRight: 10, marginLeft: 10 }}
                  data-value={key + 1}
                
                >
                  <Card
                    style={{ width: "100%", padding:'20px', borderRadius:'10px', backgroundColor:'#4d4d4d', border:'none' }}
                    className="homeInnerCard"
                    cover={<img alt="banner Image" src={"http://www.scottishculture.org/themes/scottishculture/images/music_placeholder.png"} className="homeCardsImg" className="homeCardsImg"/>}
                  >
                    <div>
                    <h1 style={{color:'white', fontSize:'20px', margin:'0'}}>{item}</h1>
                    </div>
                  </Card>
                </div>
              );
            })}
          </AliceCarousel>

          <br/>

      <h1 style={{color:'white', fontSize:'20px', marginLeft:'10px', marginBottom:'10px'}}>Todays Biggest Hits</h1>

      <AliceCarousel
            mouseTracking
            keyboardNavigation
            disableDotsControls="true"  
            responsive={responsive}
          >
            {["song1","song2","song3","song4","song5","song6","song7","song8"].map((item, key) => {
              return (
                <div
                  className="item"
                  style={{ marginRight: 10, marginLeft: 10 }}
                  data-value={key + 1}
                
                >
                  <Card
                    style={{ width: "100%", padding:'20px', borderRadius:'10px', backgroundColor:'#4d4d4d', border:'none' }}
                    className="homeInnerCard"
                    cover={<img alt="banner Image" src={"http://www.scottishculture.org/themes/scottishculture/images/music_placeholder.png"} className="homeCardsImg" className="homeCardsImg"/>}
                  >
                    <div>
                    <h1 style={{color:'white', fontSize:'20px', margin:'0'}}>{item}</h1>
                    </div>
                  </Card>
                </div>
              );
            })}
          </AliceCarousel>

    </Layout>
  );
}

export default DashHome