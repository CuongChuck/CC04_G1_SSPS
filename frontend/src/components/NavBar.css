import React, { useState } from "react";
import { Link } from "react-router-dom";
import dropdownlogo from "../assets/drop_down_menu.svg";
import userIcon from "../assets/user_icon.svg";
import noti from "../assets/noti-bell.svg";
import message from "../assets/message.svg";
import "./NavBar.css";

function NavBar({ username, id }) {
  const [isActive, setActive] = useState(false);

  const handleClick = (tab) => {
    setActive(tab);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <div className="dropdown-mini">
          <button className="drop-btn">
            <img src={dropdownlogo} alt="Dropdown Menu" className="drop" />
          </button>
        </div>
        {["trang chủ", "in giấy", "mua giấy"].map((tab) => {
          if (tab === "mua giấy") {
            return (
              <Link
                key={tab}
                to="/buy"
                className={`nav-item ${isActive === tab ? "active" : ""}`}
              >
                {tab.toUpperCase()}
              </Link>
            );
          }

          if (tab === "trang chủ") {
            return (
              <Link
                key={tab}
                to="/"
                className={`nav-item ${isActive === tab ? "active" : ""}`}
              >
                {tab.toUpperCase()}
              </Link>
            );
          }

          return (
            <button
              key={tab}
              className={`nav-item ${isActive === tab ? "active" : ""}`}
              onClick={() => handleClick(tab)}
            >
              {tab.toUpperCase()}
            </button>
          );
        })}
      </nav>
      <div className="header-right">
        <button>
          <img src={noti} alt="Notifications" className="noti right-item" />
        </button>
        <button>
          <img src={message} alt="Messages" className="msg right-item" />
        </button>
        <div className="header-user-info right-item">
          <div className="username">Tên người dùng: {username}</div>
          <div className="user-id">Mã người dùng: {id}</div>
        </div>
        <button>
          <img
            src={userIcon}
            alt="User Icon"
            className="user-icon right-item"
          />
        </button>
      </div>
      <div className="spss">SPSS</div>
    </div>
  );
}

export default NavBar;
