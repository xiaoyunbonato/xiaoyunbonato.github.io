import "../Styles/Gallery.css";
import React from "react";
import mac from "../Assets/mac.png";
import table from "../Assets/table.png";

const Gallery = () => {
const images = [
    require('../Assets/xiao1.png'),
    require('../Assets/xiao2.png'),
    require('../Assets/xiao3.png'),
    require('../Assets/xiao4.png'),
    require('../Assets/xiao5.png'),
    require('../Assets/xiao6.png'),
    require('../Assets/xiao7.png'),
    require('../Assets/xiao8.png'),
    require('../Assets/xiao9.png'),
  ];

  
  return(
    <section>
    <div className="gallery">
      {images.map((imageUrl, index) => (
        <img 
        key={index}
        src={imageUrl}
        alt={`Image ${index + 1}`}
        className="disable-select"
      />
      
      ))}
    </div>
    <div>
  <img 
    src={mac} 
    className="mac"
    style={{ width: '50%', justifyContent:'center'}}
  />

             {/* <img 
        src={table} 
        className="table"
        style={{justifyContent:'center', width:'100%'}}
      /> */}
    </div>
    </section>

  );
};
export default Gallery;
