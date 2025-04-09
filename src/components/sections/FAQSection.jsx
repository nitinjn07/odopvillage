import React, { useState } from "react";

const FAQSection = () => {
  const [activeKey, setActiveKey] = useState("collapseOne");

  const faqItems = [
    {
      id: "collapseOne",
      question: "Is there any fee to join the program?",
      answer:
        "No, MP Art Propel is a fully subsidized program. There is no fee to participate. We believe in removing financial barriers for talented artisans.",
    },
    {
      id: "collapseTwo",
      question: "Do I need to know English to participate?",
      answer:
        "No, all training and mentorship are available in Hindi and local languages. We provide translation support for your product listings and customer interactions.",
    },
    {
      id: "collapseThree",
      question: "What if I don't have internet access or a computer?",
      answer:
        "We have regional support centers where you can access computers and internet. Our team can also arrange for training sessions in your village if several artisans from your area join the program.",
    },
    {
      id: "collapseFour",
      question: "How many artisans are selected for each cohort?",
      answer:
        "Each cohort includes 50 artisans and small businesses, selected based on their craft quality, growth potential, and commitment to the program.",
    },
    {
      id: "collapseFive",
      question: "How will my products be shipped internationally?",
      answer:
        "We have partnered with logistics providers who offer special rates for program participants. Our team will guide you through the entire shipping and customs process.",
    },
  ];

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section className="mp-section mp-section-alt" id="faq">
      <div className="mp-art-pattern-top"></div>
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">Get answers to common queries</p>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="accordion" id="faqAccordion">
              {faqItems.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        activeKey !== item.id ? "collapsed" : ""
                      }`}
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={activeKey === item.id}
                      aria-controls={item.id}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={item.id}
                    className={`accordion-collapse collapse ${
                      activeKey === item.id ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mp-art-pattern-bottom"></div>
    </section>
  );
};

export default FAQSection;
