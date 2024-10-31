import React, { useState } from "react";

const FAQAnimation = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question textAlignmentLeft descriptions colorSec ptb20">
        <span>{question}</span>
        <button onClick={toggleAnswer} className="faq-button colorReg1">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <div className={`faq-answer-container ${isOpen ? "open" : "closed"}`}>
        <p className="faq-answer textAlignmentLeft descriptions colorReg1">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQAnimation;
