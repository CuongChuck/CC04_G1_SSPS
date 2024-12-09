import React from "react";
import "./Home.css"; // Import CSS file
import bkImage from "../assets/bk.png"; // Import hình ảnh

const Home = () => {
  return (
    <div className="home-container">
      <img src={bkImage} alt="BK University" className="full-screen-image" />
    </div>
  );
};

export default Home;
