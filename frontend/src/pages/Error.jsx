import React from "react";
import "./Error.css";

const Error = () => {
  const handleRebuy = () => {
    window.location.href = "/buy";
  };

  const handleContinue = () => {
    window.location.href = "/"; // Chuyển về trang chủ
  };

  return (
    <div className="error-container">
      <div className="error-message">
        <p>Đã xảy ra lỗi. Giao dịch đã bị hủy.</p>
        <p>Mua lại hoặc đến trang chủ</p>
      </div>
      <div className="error-buttons">
        <button className="rebuy-button" onClick={handleRebuy}>
          Mua lại
        </button>
        <button className="continue-button" onClick={handleContinue}>
          Trang chủ
        </button>
      </div>
    </div>
  );
};

export default Error;

