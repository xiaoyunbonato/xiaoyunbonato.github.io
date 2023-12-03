// DraggableImagesSection.js

import React from 'react';
import Draggable from 'react-draggable';
import image1 from '../Assets/xiao1.png'; // Replace with the actual path to your image
import image2 from '../Assets/xiao2.png'; // Replace with the actual path to your image
import image3 from '../Assets/xiao3.png'; // Replace with the actual path to your image
import image4 from '../Assets/xiao4.png'; // Replace with the actual path to your image
import image5 from '../Assets/xiao5.png'; // Replace with the actual path to your image
import image6 from '../Assets/xiao6.png'; // Replace with the actual path to your image
import image7 from '../Assets/xiao7.png'; // Replace with the actual path to your image
import image8 from '../Assets/xiao8.png'; // Replace with the actual path to your image
import image9 from '../Assets/xiao9.png'; // Replace with the actual path to your image

import '../Styles/DraggableImageSection.css'; // Import your CSS file

const images = [
  { src: image1, group: 1 },
  { src: image2, group: 3 },
  { src: image3, group: 1 },
  { src: image4, group: 2 },
  { src: image5, group: 2 },
  { src: image6, group: 2 },
  { src: image7, group: 1 },
  { src: image8, group: 3 },
  { src: image9, group: 1 },
]; // Add more images as needed

const DraggableImagesSection = () => {
  return (
    <div className="draggable-images-section">
      <div className="image-container">
        {images.map((image, index) => (
          <Draggable key={index}>
            <div className={`draggable-image-container group-${image.group}`}>
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="draggable-image"
              />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default DraggableImagesSection;
