import React from "react";
import { ques } from "./QuesAns";
import "./Faqs.css"; // Import the CSS file

const Faqs = () => {
  return (
    <div className="faqs-container">
      <h1 className="faqs-title">Frequently Asked Questions</h1>
      {ques.map((ele, idx) => {
        return (
          <div className="faq-item" key={idx + "absj"}>
            <p className="faq-question">
              {idx + 1}. {ele.ques}
            </p>
            <p
              className="faq-answer"
              dangerouslySetInnerHTML={{ __html: ele.ans }}
            ></p>
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
