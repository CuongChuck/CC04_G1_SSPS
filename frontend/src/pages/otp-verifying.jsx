import React, { useRef } from "react";
import "./otp-verifying.css";
import Back from "../components/Back";
import Continue from "../components/Continue";

const OtpVerifying = ({ setProgIndex }) => {
  const inputsRef = useRef([]);

  const handleInput = (e, index) => {
    const value = e.target.value;

    if (!/^\d$/.test(value)) {
      e.target.value = ""; // Clear invalid input
      return;
    }

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };
  return (
    <div className="verify-box">
      <Back link={"/confirm-purchase"} onClick={() => setProgIndex(3)} />
      <div className="verify-title">Xác thực OTP</div>
      <div className="verify-req">
        Hãy nhập mã OTP đã được gửi đến SĐT/email của bạn
      </div>
      <div className="otp-type">
        {Array.from({ length: 6 }).map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            onInput={(e) => handleInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputsRef.current[index] = el)}
            placeholder="_"
            className="type-item"
          />
        ))}
      </div>
      <Continue link={"/review"} onClick={() => setProgIndex(5)} />
    </div>
  );
};
export default OtpVerifying;
