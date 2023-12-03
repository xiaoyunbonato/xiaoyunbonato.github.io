import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import xiao8 from '../Assets/bl.png'; // Replace with the actual path to your image
import "../Styles/ImageCarousel.css";
import React, { useEffect } from 'react';


const ImageCarousel = () => {
    useEffect(() => {
        const preventRightClick = (event) => {
          event.preventDefault();
        };
    
        document.addEventListener('contextmenu', preventRightClick);
    
        return () => {
          document.removeEventListener('contextmenu', preventRightClick);
        };
      }, []);

  return (
    <Carousel style={{ maxWidth: '600px', maxheight:'100px', margin: 'auto' }}>
      {/* Adjust the maxWidth value as needed */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={xiao8}
          alt="First slide"
          style={{ maxWidth: '100%', height: 'auto', pointerEvents: 'none'}} // Adjust the styles as needed
        />
        {/* <Carousel.Caption>
          <h3>Caption for Slide 1</h3>
          <p>Some additional information about the first slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={xiao8}
          alt="First slide"
          style={{ maxWidth: '100%', height: 'auto' }} // Adjust the styles as needed
        />
      </Carousel.Item>
      {/* Add more Carousel.Items as needed for additional slides */}
    </Carousel>
  );
};

export default ImageCarousel;
