import React, { useState, useEffect } from "react";
import Back from "../components/Back";
import "./Confirm-purchase.css";
import hcmutLogo from "../assets/HCMUT.svg";
import Continue from "../components/Continue";

const ConfirmPurchase = ({ setProgIndex }) => {
  const [otpActive, setOtpActive] = useState(false);

  const handleClickOtp = (butn) => {
    setOtpActive(butn);
  };

  const [generatedId, setGeneratedId] = useState("");

  const [currentDate, setCurrentDate] = useState("");
  const generateId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const generateDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    const newId = generateId();
    const today = generateDate();
    setGeneratedId(newId);
    setCurrentDate(today);
  }, []);
  const numberOfPage = 20;
  const pricePerPage = 400;
  const subTotalCost = numberOfPage * pricePerPage;
  const discountPercent = 10;
  const totalPrice = subTotalCost * (100 - discountPercent) * 0.01;
  return (
    <div className="confirm-container">
      <Back link={"/payment-method"}  />
      <div className="detail-title">Chi tiết giao dịch</div>
      <div className="info-box">
        <div className="inputting">
          <div className="name">
            <div className="text">HỌ VÀ TÊN</div>
            <input type="text" />
          </div>
          <div className="sid">
            <div className="text">MÃ SỐ SINH VIÊN</div>
            <input type="text" />
          </div>
          <div className="date">
            <div className="text">NGÀY GIAO DỊCH</div>
            <input type="text" value={currentDate} readOnly />
          </div>
          <div className="tid">
            <div className="text">MÃ GIAO DỊCH</div>
            <input type="text"  value={generatedId} readOnly/>
          </div>
        </div>
        <div className="line"></div>
        <div className="below-line">
          <div className="payment-method">
            <div className="title">Phương thức trả tiền</div>
            <a
              href="https://bkpay.hcmut.edu.vn"
              target="_blank"
              className="bkpay"
            >
              <img src={hcmutLogo} className="hcmut-logo" />
              <div className="logo-text">BK PAY</div>
            </a>
          </div>
          <div className="otp-verify">
            <div className="title">Xác thực OTP</div>
            <div className="choose-veri">
              {["sđt", "email"].map((otpChoose) => (
                <button
                  key={otpChoose}
                  className={`${otpActive === otpChoose ? "active" : ""}`}
                  onClick={() => handleClickOtp(otpChoose)}
                >
                  {otpChoose.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bill-info">
        <div className="bill-summary-title">CHI TIẾT HOÁ ĐƠN</div>
        <div className="line"></div>
        <div className="page-info group">
          <div className="page-content-info">
            <div className="page-no-title">Số lượng trang</div>
            <div className="page-price-title">Đơn giá mỗi trang</div>
            <div className="discount-code-info">MÃ GIẢM GIÁ</div>
          </div>
          <div className="page-content-number">
            <div className="page-no">{numberOfPage}</div>
            <div className="price-p-page">{pricePerPage} VND</div>
            <input type="text" className="discount-code" />
          </div>
        </div>
        <div className="line"></div>
        <div className="subtotal-grp group">
          <div className="subtotal-info">
            <div className="subtotal-title">Tạm tính</div>
            <div className="discount-info">GIẢM GIÁ</div>
          </div>
          <div className="subtotal-count">
            <div content="" className="subtotal">
              {subTotalCost.toLocaleString()} VND
            </div>
            <div className="discount-percent">{discountPercent}%</div>
          </div>
        </div>
        <div className="line"></div>
        <div className="total group">
          <div className="total-title">THÀNH TIỀN</div>
          <div className="total-pay">{totalPrice.toLocaleString()} VND</div>
        </div>
      </div>
      <Continue link={"/otp-verify"} />
    </div>
  );
};

export default ConfirmPurchase;
