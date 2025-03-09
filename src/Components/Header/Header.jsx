import React from "react";
import kotinlogo from "../../assets/kotinXlogo.png";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={kotinlogo} alt="Logo" />
      </div>
      <div className="nav-container">
        <div className="nav-links">
          <p>Features</p>
          <p>Exchanges</p>
          <p>How it Works</p>
          <p>Blog</p>
          <p>About Us</p>
        </div>
        <div className="sign-in">
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
