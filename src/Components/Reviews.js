import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const images = [
  "./Images/review0.jpg",
  "./Images/review1.jpg",
  "./Images/review2.jpg"
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box sx={{ width: "100%", height: "400px", position: "relative", overflow: "hidden" }}>
      {/* Image Wrapper */}
      <Box sx={{ display: "flex", transition: "transform 1s ease", transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((src, index) => (
          <Box key={index} sx={{ minWidth: "100%", height: "400px" }}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>

      {/* Left Navigation Button (Caret) using Typography */}
      <Typography
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          fontSize: "50px", // Larger caret
          color: "white",
          cursor: "pointer",
          zIndex: 2,
          textShadow: "2px 2px 5px rgba(0,0,0,0.5)", // Text shadow applied here
        }}
      >
        {"‹"}
      </Typography>

      {/* Right Navigation Button (Caret) using Typography */}
      <Typography
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          fontSize: "50px", // Larger caret
          color: "white",
          cursor: "pointer",
          zIndex: 2,
          textShadow: "2px 2px 5px rgba(0,0,0,0.5)", // Text shadow applied here
        }}
      >
        {"›"}
      </Typography>

      {/* Dot Indicators */}
      <Box sx={{
        position: "absolute",
        bottom: "10px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        {images.map((_, index) => (
          <Typography
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              width: "12px",
              height: "12px",
              margin: "0 5px",
              backgroundColor: activeIndex === index ? "white" : "rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageCarousel;
