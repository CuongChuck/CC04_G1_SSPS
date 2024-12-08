import React from "react";
import "./Review.css";
import Checkmark from "../assets/green-icon.svg";

const Review = () => {
  return (
    <div className="review-container">
      <img src={Checkmark} className="bgr-check" />
      <div className="message">
        <p>Giao dịch thành công</p>
        <p>Cảm ơn bạn đã mua</p>
      </div>
      <button className="back-button" onClick={() => window.location.href = "/"}>
        Trang chủ
      </button>
    </div>
  );
};

export default Review;

