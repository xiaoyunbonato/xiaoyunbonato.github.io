import React, { useState, useEffect } from "react";

const CircleWithArrow = () => {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const circleStyle = {
    position: "fixed",
    bottom: "35px",
    right: isVisible ? "35px" : "-60px", // Position off-screen when not visible
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: ".9px solid black",
    backgroundColor: hovered ? "black" : "rgba(0, 0, 0, 0)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "right 0.3s"
  };

  const arrowContainerStyle = {
    position: "relative",
    width: "25px",
    height: "1px",
    background: hovered ? "white" : "black",
    transform: "rotate(-90deg)", // Rotating the arrow by 90 degrees
  };

  const arrowBeforeStyle = {
    content: '""',
    display: "block",
    position: "absolute",
    right: "0",
    bottom: "0px",
    width: "8px",
    height: "8px",
    borderBottomLeftRadius: "100%",
    borderLeft: "1px solid",
    borderBottom: "1px solid",
    borderColor: hovered ? "white" : "black",
  };

  const arrowAfterStyle = {
    content: '""',
    display: "block",
    position: "absolute",
    top: "0px",
    right: "0",
    width: "8px",
    height: "8px",
    borderTopLeftRadius: "100%",
    borderTop: "1px solid",
    borderLeft: "1px solid",
    borderColor: hovered ? "white" : "black",
  };

  return (
    <section
      style={circleStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={scrollToTop}
    >
      <div style={arrowContainerStyle}>
        <div style={arrowBeforeStyle}></div>
        <div style={arrowAfterStyle}></div>
      </div>
    </section>
  );
};

export default CircleWithArrow;
