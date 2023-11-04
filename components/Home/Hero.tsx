import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      <img
        src="https://example.com/your-image.jpg"
        alt="Your Image"
        style={{ width: "50%", borderRadius: "50%" }}
      />
      <p style={{ marginTop: "10px" }}>Your text goes here</p>
    </div>
  );
};

export default Hero;
