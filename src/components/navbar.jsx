import React, { useState } from "react";
import "./css/Navbar.css";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleBioClick = () => {
    setDropdownVisible((prev) => !prev);
  };

  return (
    <>
      <div className="menu">
        <div className="logo">
          <img
            src="https://assets.splitwise.com/assets/core/logo-wordmark-horizontal-white-short-c309b91b96261a8a993563bdadcf22a89f00ebb260f4f04fd814c2249a6e05d4.svg"
            alt=""
          />
        </div>
        <div className="bio" onClick={handleBioClick}>
          <div className="bio_img">
            <img
              src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-ruby40-50px.png"
              alt=""
            />
          </div>
          <div className="bio_name">Abdul Haseeb</div>
          <i
            className="fa-solid fa-caret-down"
            style={{
              color: "white",
              opacity: "0.3",
              fontSize: "10px",
              marginLeft: "5px",
            }}
          ></i>
        </div>
      </div>
      <i
        className="fa-solid fa-caret-up"
        style={{ display: isDropdownVisible ? "block" : "none" }}
      ></i>
      <div
        className="dropdown"
        style={{ display: isDropdownVisible ? "block" : "none" }}
      >
        <ul>
          <li>
            <a href="#">Your account</a>
          </li>
          <li>
            <a href="#">Create account</a>
          </li>
          <li>
            <a href="#">Fairness calculator</a>
          </li>
          <li>
            <a href="#">Contact Support</a>
          </li>
          <li>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
