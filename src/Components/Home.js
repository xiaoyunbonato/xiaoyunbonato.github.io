import React from "react";
import CircleWithArrow from "./CircleWithArrow"; // Import the new component
import img1 from "../Assets/polenta.png"; // Import the image
import img2 from "../Assets/maru.png"; // Import the image
import img3 from "../Assets/pietro.png"; // Import the image
import img4 from "../Assets/pietro.png"; // Import the image
import design from "../Assets/design.png"; // Import the image
import dev from "../Assets/dev.png"; // Import the image
import design1 from "../Assets/design1.png"; // Import the image
import design2 from "../Assets/design2.png"; // Import the image
import design3 from "../Assets/design3.png"; // Import the image
import design4 from "../Assets/design4.png"; // Import the image
import me from "../Assets/me.png"; // Import the image
import syow from "../Assets/syow.png"; // Import the image
import dorsia from "../Assets/dorsia.png"; // Import the image

import Gallery from "./Gallery";
import Carousel from "./ImageCarousel";
import dev1 from "../Assets/dev1.png"; 
import dev2 from "../Assets/dev2.png";
import dev3 from "../Assets/dev3.png"; 
import dev4 from "../Assets/dev4.png";
import dev5 from "../Assets/dev5.png";
import dev6 from "../Assets/dev6.png";
import dev7 from "../Assets/dev7.png";
import dev8 from "../Assets/dev8.png";
import dev9 from "../Assets/dev9.png";
import dev10 from "../Assets/dev10.png";
import dev11 from "../Assets/dev11.png";
import dev12 from "../Assets/dev12.png";
import Contact from "./Contact";

import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../Styles/home.css";

const renderTooltip = (text) => (
  <Tooltip id="button-tooltip" placement="bottom">
    {text}
  </Tooltip>
);


const Home = () => {
  const sectionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "0",
    padding: "20px", // You can adjust the padding as needed
  };

  const firstSectionStyle = {
    ...sectionStyle,
    backgroundColor: "#FFF",
    minHeight: "100vh",
    margin: 0, padding: 0 
  };

  const otherSectionStyle = {
    ...sectionStyle,
    backgroundColor: "#FFF", // Different background color for the other sections
    minHeight: "5vh",
    
  };
  const otherSectionStyle1 = {
    ...sectionStyle,
    backgroundColor: "#FFF", // Different background color for the other sections
    minHeight: "100vh",
  };
  
  const otherSectionStyle2 = {
    ...sectionStyle,
    backgroundColor: "#FFF", // Different background color for the other sections
    minHeight: "100vh",
  };
  const otherSectionStyle3 = {
    ...sectionStyle,
    backgroundColor: "#FFF", // Different background color for the other sections
    minHeight: "100vh",
  };
  const otherSectionStyle4 = {
    ...sectionStyle,
    backgroundColor: "#FFF", // Different background color for the other sections
    minHeight: "100vh",
  };

  
  
  return (

    <div>
      <div>
        
      </div>
  <section style={firstSectionStyle} class="light">
    
  <div>
    <h1 className="responsive-heading" style={{ display: 'block', marginBottom: '10px' }}>Xiaoyun</h1>
    <h1 className="responsive-heading" style={{ display: 'block' }}>Bonato</h1>
  </div>
</section>

<Gallery/>

<section style={{height:'60vh', background: 'rgb(245,233,243)',
background: 'linear-gradient(0deg, rgba(245,233,243,1) 0%, rgba(245,241,243,1) 36%, rgba(237,237,235,1) 100%)',  margin: 0, padding: 0, marginTop:0}}>


</section>
<section id="About">

<section style={{height:'30vh', backgroundColor:'#F5E9F3', margin: 0, padding: 0, marginTop:0}}>
<div class="top">
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* <img src={me} className="img-fluid circular-image" alt="Image 3" /> */}
    </div>
    
</div>
</section >

<h2  style={{ fontFamily: "'Avenir Next', sans-serif", display: 'block', textAlign: 'center', margin: 0, padding: 0 }}>Hello, I'm Xiao!</h2>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <img src={syow} alt="Xiaoyun" className="syow" style={{ width: "105px", margin: 0, padding: 0, marginLeft:'250px'}} />
</div>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <img
    src={me}
    alt="Xiaoyun"
    className="circular-image"
    style={{ maxWidth: '50%', height: 'auto' }}
  />
  
</div>
</section>



<div>
  <h4 style={{ fontSize:'24px', fontWeight:'normal', padding: '80px', lineHeight: 1.8, marginTop:'150px', marginBottom: '-110px' }}>
    I am a proud graduate of the <a href="https://www.uwo.ca/" style={{ textDecoration: 'none', fontWeight: 'bolder', color: '#B592BA' }} target="_blank" rel="noopener noreferrer">University of Western Ontario</a> with an undergrduate degree in Computer Science and French Studies. My skills encompass full-stack development, UI/UX design, and branding, reflecting my versatile background. I approach my work with creativity and passion, aiming to bring innovation to every project.
  </h4>
  <h4 style={{ fontSize:'24px',fontWeight:'normal',padding: '80px', lineHeight: 1.8 }}>
    Beyond the tech world, I'm quite multifaceted with diverse interests in <a href="https://www.instagram.com/harajukuxiao/" style={{ fontWeight: 'bolder', textDecoration: 'none', color: '#BEDDE9' }} target="_blank" rel="noopener noreferrer">fashion</a>, <a href="https://open.spotify.com/user/xiaoyunb?si=a7eea36881554eaa" style={{ fontWeight: 'bolder', textDecoration: 'none', color: '#769248' }} target="_blank" rel="noopener noreferrer">music</a>, interior design, and a deep love for exploring new destinations through travel. My combination of technical acumen and creative flair defines me as a well-rounded and forward-thinking professional.
  </h4>


<h4 style={{fontFamily:"'Avenir Next', sans-serif", display:'block', marginLeft:'90px', marginBottom:'15px'}}>design</h4>
  <div style={{ display: 'flex', marginLeft: '80px'}}>
  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("Figma")}
    >
      <img src={design1} alt="Design 1" className="lighten-on-hover" style={{ width: "20px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("Photoshop")}
    >
      <img src={design2} alt="Design 2" className="lighten-on-hover1" style={{ width: "20px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("Illustrator")}
    >
      <img src={design3} alt="Design 3" className="lighten-on-hover" style={{ width: "20px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("InDesign")}
    >
      <img src={design4} alt="Design 4" className="lighten-on-hover1" style={{ width: "20px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>
</div>


      
  <h4 style={{fontFamily:"'Avenir Next', sans-serif", display:'block', marginLeft:'90px', marginTop:'40px'}}>development</h4>
  
  <div className="iconRight" style={{ display: 'flex', marginLeft: '80px', marginRight:'100px'}}>
  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("C++")}
    >
      <img src={dev1} alt="Design 1" className="lighten-on-hover" style={{ width: "25px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("Java")}
    >
      <img src={dev2} alt="Design 2" className="lighten-on-hover1" style={{ width: "25px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("Python")}
    >
      <img src={dev3} alt="Design 3" className="lighten-on-hover" style={{ width: "20px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("React")}
    >
      <img src={dev4} alt="Design 4" className="lighten-on-hover1" style={{ width: "23px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>
  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("NextJS")}
    >
      <img src={dev5} alt="Design 1" className="lighten-on-hover" style={{ width: "20px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("MongoDB")}
    >
      <img src={dev6} alt="Design 2" className="lighten-on-hover1" style={{ width: "10px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("Php")}
    >
      <img src={dev7} alt="Design 3" className="lighten-on-hover" style={{ width: "30px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("MySQL")}
    >
      <img src={dev8} alt="Design 4" className="lighten-on-hover1" style={{ width: "20px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>
  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("Bootstrap")}
    >
      <img src={dev9} alt="Design 1" className="lighten-on-hover" style={{ width: "25px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("TypeScript")}
    >
      <img src={dev10} alt="Design 2" className="lighten-on-hover1" style={{ width: "20px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("Node + Express")}
    >
      <img src={dev11} alt="Design 3" className="lighten-on-hover" style={{ width: "20px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  <section>
    <OverlayTrigger
      placement="bottom"
      overlay={renderTooltip("Angular")}
    >
      <img src={dev12} alt="Design 4" className="lighten-on-hover1" style={{ width: "20px", margin: "0 5px" }} />
    </OverlayTrigger>
    {/* Repeat for other design images */}
  </section>

  </div>


</div>







<section style={{height:'50vh'}}></section>



      <section id="Portfolio" style={{ ...otherSectionStyle3, padding: "0" }}>
  <div className="container-fluid p-0">
    <div className="row mx-0">
      <div className="col-md-6 col-lg-6 col-xl-6 p-0">
        <a href="/">
          <img src={img1} className="img-fluid" alt="Image 1" />
        </a>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-6 p-0">
        <a href="/">
          <img src={img2} className="img-fluid" alt="Image 2" />
        </a>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-6 p-0">
        <a href="/">
          <img src={dorsia} className="img-fluid" alt="Image 3" />
        </a>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-6 p-0">
        <a href="/">
          <img src={img4} className="img-fluid" alt="Image 4" />
        </a>
      </div>
    </div>
  </div>
</section>

<section style={{height:'50vh'}}></section>
<h2 className="Contact" style={{textAlign:'center', alignItems:'center', margin:'0', fontWeight:'normal', fontFamily:"Avenir Next, sans-serif "}}>Let's stay connected!</h2>

<section id="Contact" style={{ ...otherSectionStyle4, animation: "fadeIn 8s", textAlign: "left" }}>

<Contact/>

</section>

      <CircleWithArrow />
    </div>
  );
};

export default Home;