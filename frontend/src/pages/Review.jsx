import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div className="review-container">
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

