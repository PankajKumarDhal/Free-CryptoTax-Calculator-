import React from "react";
import frame from "../../assets/Frame.png";
import bg from "../../assets/BG Mask.png";
import footerLogo from "../../assets/FooterLogo.png";
import { FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import footerImg from "../../assets/Frame 1000005166.png";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <>
      <div className="footer-top">
        <div className="footer-top-container">
          <img src={bg} alt="Background" className="footer-bg" />
          <div className="footer-subscribe">
            <img src={frame} alt="Frame" className="footer-frame" />
            <div className="footer-text">
              <h1>
                Stay up to date with latest crypto news and events. Subscribe to
                our newsletter
              </h1>
              <div className="footer-input">
                <input type="text" placeholder="Enter Your Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-content">
          <div className="footer-header">
            <img src={footerLogo} alt="Logo" />
            <div className="footer-icons">
              <FaXTwitter />
              <IoLogoYoutube />
              <FaFacebook />
              <FaLinkedin />
              <IoMdContact />
            </div>
          </div>
          <hr />
          <div className="footer-links">
            <ul>
              <li className="footer-title">Crypto Taxes for</li>
              <li>Individuals and investors</li>
              <li>Tax Professionals and Accountants</li>
              <li>Exchanges and Web3 projects</li>
              <li>
                <img src={footerImg} alt="Footer Image" />
              </li>
            </ul>
            <ul>
              <li className="footer-title">Free Tools</li>
              <li>Crypto Prices Live</li>
              <li>Crypto Tax Calculator</li>
              <li>Crypto Tax Saving Speculator</li>
              <li>Crypto Profit Calculator</li>
              <li>Crypto Converter</li>
              <li>Crypto Staking ROI Calculator</li>
            </ul>
            <ul>
              <li className="footer-title">Resource Center</li>
              <li>Crypto Tax Guides</li>
              <li>Dumb Ways To Lose Money</li>
              <li>Crypto Tax Savings Guide</li>
              <li>Blogs</li>
              <li>Crypto Buying Guides</li>
              <li>Crypto Staking Guides</li>
              <li>Crypto Mining Guides</li>
              <li>Crypto Price Predictions</li>
            </ul>
            <ul>
              <li className="footer-title">Help And Support</li>
              <li>Product Guides</li>
              <li>How To Guides</li>
              <li>Templates</li>
              <li>Contact us</li>
            </ul>
            <ul>
              <li className="footer-title">Company</li>
              <li>About Us</li>
              <li>Backed by</li>
              <li>Media and Press</li>
              <li>Careers</li>
              <li>Security</li>
              <li>Refund Policy</li>
              <li>Brand Assets</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <hr />
          <p className="footer-rights">All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
