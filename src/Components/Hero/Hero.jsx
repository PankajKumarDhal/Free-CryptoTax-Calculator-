import React, { useContext } from "react";
import logo from "../../assets/img1.png";
import Faqs from "../FAQs/Faqs";
import { myContext } from "../dataStore/Context";
import Footer from "../Footer/Footer";
import table from "../../img/02.png";
import "./Hero.css"; // Import the CSS file

const Hero = () => {
  let {
    purchasePrice,
    getPurchasePrice,
    salesPrice,
    getSalesPrice,
    expense,
    getExpenses,
    annualIncome,
    getAnnualIncome,
    isLongTerm,
    setLongTerm,
    rates,
    capitalGains,
    discountForCapitalGains,
    netGains,
    tax,
  } = useContext(myContext);

  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-header">
            <h1>Free Crypto Tax Calculator - Australia</h1>
          </div>
          <div className="form-section">
            <div className="row">
              <div className="input-group">
                <label>Financial Year</label>
                <select>
                  <option>FY 2025-26</option>
                </select>
              </div>
              <div className="input-group">
                <label>Country</label>
                <select>
                  <option>India</option>
                  <option>Australia</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="input-group">
                <label>Enter purchase price of Crypto</label>
                <input
                  type="text"
                  onChange={getPurchasePrice}
                  value={purchasePrice}
                />
              </div>
              <div className="input-group">
                <label>Enter sale price of Crypto</label>
                <input
                  type="text"
                  onChange={getSalesPrice}
                  value={salesPrice}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-group">
                <label>Enter your Expenses</label>
                <input type="text" onChange={getExpenses} value={expense} />
              </div>
              <div className="input-group">
                <label>Capital gains amount</label>
                <div className="button-group">
                  <button
                    onClick={() => setLongTerm(!isLongTerm)}
                    className={isLongTerm ? "" : "active"}
                  >
                    Short Term
                  </button>
                  <button
                    onClick={() => setLongTerm(!isLongTerm)}
                    className={isLongTerm ? "active" : ""}
                  >
                    Long Term
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="input-group">
                <label>Select Your Annual Income</label>
                <select onChange={getAnnualIncome}>
                  <option value="0">Rs. 0 - Rs 10,00,000</option>
                  <option value="19">Rs. 10,00,001 - Rs. 20,00,000</option>
                  <option value="32.5">Rs. 20,00,001 - Rs. 50,00,000</option>
                  <option value="37">Rs. 50,00,001 - Rs. 1,00,00,000</option>
                  <option value="45">Rs. 1,00,00,000+</option>
                </select>
              </div>
              <div className="tax-rate">
                <p>Tax Rate</p>
                <p>{rates}</p>
              </div>
            </div>

            {isLongTerm && (
              <div className="row">
                <div className="input-group">
                  <label>Capital gains amount</label>
                  <input type="text" value={capitalGains} readOnly />
                </div>
                <div className="input-group">
                  <label>Discount for long-term gains</label>
                  <input type="text" value={discountForCapitalGains} readOnly />
                </div>
              </div>
            )}

            <div className="result-section">
              <div className="result-box">
                <p>Net Capital Gains Tax Amount</p>
                <span>
                  {netGains ? "Rs" + netGains : "Please select all inputs"}
                </span>
              </div>
              <div className="result-box blue">
                <p>The tax you need to pay</p>
                <span>{tax ? "Rs" + tax : "Please select all inputs"}</span>
              </div>
            </div>
          </div>

          <Faqs />

          <div className="tax-info">
            <img src={table} alt="Tax Table" />
            <h1>Capital Gains Tax (CGT)</h1>
            <p>
              Calculate your capital gains or losses on cryptocurrency
              transactions using this formula:
            </p>
            <strong>Capital Gain/Loss = Capital Proceeds - Cost Basis</strong>
            <p>
              Your tax rate depends on whether you held the cryptocurrency for
              more than 12 months (long-term) or less (short-term). Long-term
              gains receive a 50% discount.
            </p>
            <p>
              Calculate your Australian crypto taxes accurately with KoinX's
              free crypto tax calculator.
            </p>
          </div>
        </div>

        <div className="side-section">
          <h1>Get Started with KoinX for FREE</h1>
          <p>
            With our range of features, KoinX allows you to be more educated and
            aware of your tax reports.
          </p>
          <img src={logo} alt="KoinX Logo" />
          <button>Get Started for FREE</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
