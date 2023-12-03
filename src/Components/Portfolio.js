import React from "react";
import CircleWithArrow from "./CircleWithArrow"; // Import the new component
import img1 from "../Assets/polenta.png"; // Import the image
import img2 from "../Assets/pietro.png"; // Import the image
import img3 from "../Assets/pietro.png"; // Import the image
import img4 from "../Assets/pietro.png"; // Import the image
import design from "../Assets/design.png"; // Import the image
import dev from "../Assets/dev.png"; // Import the image
import design1 from "../Assets/design1.png"; // Import the image
import design2 from "../Assets/design2.png"; // Import the image
import design3 from "../Assets/design3.png"; // Import the image
import design4 from "../Assets/design4.png"; // Import the image

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




import "../Styles/home.css";

const Portfolio = () => {
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
  <div>


      <section style={{ ...otherSectionStyle3, padding: "0" }}>
  <div className="container-fluid p-0">
    <div className="row mx-0">
      <div className="col-md-6 col-lg-6 col-xl-6 p-0">
        <a href="/page1">
          <img src={img1} className="img-fluid" alt="Image 1" />
        </a>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-6 p-0">
        <a href="/page2">
          <img src={img2} className="img-fluid" alt="Image 2" />
        </a>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-6 p-0">
        <a href="/page3">
          <img src={img3} className="img-fluid" alt="Image 3" />
        </a>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-6 p-0">
        <a href="/page4">
          <img src={img4} className="img-fluid" alt="Image 4" />
        </a>
      </div>
    </div>
  </div>
</section>



      <CircleWithArrow />
    </div>
    </div>
  );
};

export default Portfolio;