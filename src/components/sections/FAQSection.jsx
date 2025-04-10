import React, { useState } from "react";

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState("about");
  const [activeKey, setActiveKey] = useState(null);

  const faqCategories = [
    {
      id: "about",
      title: "About the Program",
      icon: "fas fa-info-circle",
      color: "#FF8C00",
    },
    {
      id: "eligibility",
      title: "Eligibility & Application",
      icon: "fas fa-clipboard-check",
      color: "#1976D2",
    },
    {
      id: "details",
      title: "Program Details",
      icon: "fas fa-calendar-alt",
      color: "#43A047",
    },
    {
      id: "benefits",
      title: "Benefits & Outcomes",
      icon: "fas fa-gift",
      color: "#9C27B0",
    },
  ];

  const faqItems = {
    about: [
      {
        id: "about-1",
        question: "What is the ODOP Village Accelerator?",
        answer:
          "The ODOP Village Accelerator is the first-of-its-kind initiative by the ODOP Cell, Madhya Pradesh Industrial Development Corporation, Government of Madhya Pradesh. It's designed to help local artisans, producers, and entrepreneurs take their district products to global markets.",
      },
      {
        id: "about-2",
        question: `What does "From Local Hands to Global Lands" mean?`,
        answer:
          "Our tagline represents our mission to transform locally-made products from Madhya Pradesh into globally recognized brands, connecting skilled local artisans and producers with international markets and consumers.",
      },
      {
        id: "about-3",
        question: "How long does the program run?",
        answer:
          "The program spans approximately 3 months, divided into three phases: a 1-month district discovery and selection phase, a 1-month intensive global readiness acceleration phase, and culminating with a 1-week ODOP Mega Conclave in Bhopal.",
      },
      {
        id: "about-4",
        question: "Is there a cost to participate in the program?",
        answer:
          "The program is fully supported by the Government of Madhya Pradesh. There is no fee to apply or participate for selected candidates.",
      },
    ],
    eligibility: [
      {
        id: "eligibility-1",
        question: "My business is very small/new. Can I still apply?",
        answer:
          "Yes! We welcome businesses of all sizes, including artisans without formal business structures. The most important criteria are product quality, alignment with your district's ODOP category, and your commitment to growth.",
      },
      {
        id: "eligibility-2",
        question: "Do I need to have export experience to apply?",
        answer:
          "No prior export experience is required. In fact, the program is specifically designed to help businesses with little or no export experience develop the skills and connections needed to enter global markets.",
      },
      {
        id: "eligibility-3",
        question:
          "I don't have formal business registration. Can I still apply?",
        answer:
          "Yes. While formal registration is preferred, we understand that many artisans and traditional craftspeople operate informally. We can provide guidance on formalization as part of the program if you're selected.",
      },
      {
        id: "eligibility-4",
        question: "How many participants will be selected?",
        answer:
          "We will select 30-50 participants for the inaugural cohort, representing a diverse range of products across Madhya Pradesh's districts.",
      },
      {
        id: "eligibility-5",
        question: "How do I apply?",
        answer:
          "You can apply online through our website or attend one of our district bootcamps where our team will assist you with the application process. The application requires basic information about you and your product.",
      },
    ],
    details: [
      {
        id: "details-1",
        question: "What will I learn during the program?",
        answer:
          "Participants will learn about product development, packaging, quality standards, export documentation, digital marketing, e-commerce integration, access to finance, and more – all tailored to preparing their specific products for global markets.",
      },
      {
        id: "details-2",
        question: "Do I need to attend in person?",
        answer:
          "The program follows a hybrid model. Some components like the district bootcamps and final conclave in Bhopal require in-person attendance, while many training sessions will be available virtually to accommodate participants from across the state.",
      },
      {
        id: "details-3",
        question: "What is the ODOP Mega Conclave?",
        answer:
          "The ODOP Mega Conclave is a week-long culminating event in Bhopal where participants will showcase their products to domestic and international buyers, connect with investors, and participate in the ODOP Excellence Awards ceremony.",
      },
      {
        id: "details-4",
        question: "What kind of support will I receive after the program ends?",
        answer:
          "Graduates of the program will receive ongoing support through access to our alumni network, follow-up mentoring sessions, and connections to market opportunities through the ODOP Cell.",
      },
    ],
    benefits: [
      {
        id: "benefits-1",
        question:
          "What makes this program different from other business development initiatives?",
        answer:
          "The ODOP Village Accelerator is uniquely focused on district-specific products with cultural significance, provides direct connections to international markets, and offers a comprehensive range of support from product development to export facilitation – all backed by the Government of Madhya Pradesh.",
      },
      {
        id: "benefits-2",
        question: "Will the program help me find buyers for my products?",
        answer:
          "Yes. A key component of the program is connecting participants with potential buyers, retailers, and e-commerce platforms, both nationally and internationally. The ODOP Mega Conclave will include B2B matchmaking sessions specifically designed for this purpose.",
      },
      {
        id: "benefits-3",
        question:
          "Can the program help with product certification or compliance requirements?",
        answer:
          "Absolutely. We will provide guidance on relevant certifications for your product category (such as GI tags, organic certification, etc.) and help you understand and meet compliance requirements for target export markets.",
      },
      {
        id: "benefits-4",
        question: "Will I get funding for my business through this program?",
        answer:
          "While the program itself doesn't provide direct funding, we will connect participants with various financing options, including government schemes, bank loans, and potential investors. Outstanding participants may receive awards that include financial support during the ODOP Excellence Awards.",
      },
      {
        id: "benefits-5",
        question: "How will the program help me sell my products online?",
        answer:
          "The program includes specific training on e-commerce setup and management, including assistance with registering on platforms like Amazon Global Selling, eBay, and ONDC. Some participants may also receive support with website development through our partner programs.",
      },
    ],
  };

  const toggleCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveKey(null);
  };

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section
      className="mp-section mp-section-alt"
      id="faq"
      style={{
        background: "linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)",
        padding: "80px 0",
      }}
    >
      <div className="mp-art-pattern-top"></div>
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">
            Find answers to common questions about the ODOP Village Accelerator
            program
          </p>
        </div>

        <div className="row mt-5">
          <div className="col-lg-3">
            <div
              className="faq-categories"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
              }}
            >
              {faqCategories.map((category) => (
                <div
                  key={category.id}
                  className={`faq-category-item ${
                    activeCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => toggleCategory(category.id)}
                  style={{
                    padding: "15px 20px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor:
                      activeCategory === category.id
                        ? `${category.color}10`
                        : "white",
                    borderLeft:
                      activeCategory === category.id
                        ? `4px solid ${category.color}`
                        : "4px solid transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: `${category.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                    }}
                  >
                    <i
                      className={category.icon}
                      style={{ color: category.color }}
                    ></i>
                  </div>
                  <span
                    style={{
                      fontWeight:
                        activeCategory === category.id ? "600" : "400",
                      color:
                        activeCategory === category.id
                          ? category.color
                          : "#333",
                    }}
                  >
                    {category.title}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="contact-box mt-4"
              style={{
                backgroundColor: "#FFF8EE",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
                borderLeft: "4px solid #FF8C00",
              }}
            >
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "15px",
                }}
              >
                Still have questions?
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  marginBottom: "15px",
                }}
              >
                Contact us to speak with an ODOP Village Accelerator team member
                who will be happy to assist you.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <i
                  className="fas fa-envelope"
                  style={{ color: "#FF8C00", marginRight: "10px" }}
                ></i>
                <span>exportcell@mpidc.co.in</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <i
                  className="fas fa-phone-alt"
                  style={{ color: "#FF8C00", marginRight: "10px" }}
                ></i>
                <span>0755-2577145</span>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div
              className="faq-content"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                padding: "30px",
                boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                style={{
                  color: faqCategories.find((c) => c.id === activeCategory)
                    .color,
                  marginBottom: "25px",
                  fontSize: "24px",
                  fontWeight: "700",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i
                  className={
                    faqCategories.find((c) => c.id === activeCategory).icon
                  }
                  style={{ marginRight: "15px" }}
                ></i>
                {faqCategories.find((c) => c.id === activeCategory).title}
              </h3>

              <div className="accordion" id="faqAccordion">
                {faqItems[activeCategory].map((item, index) => (
                  <div
                    className="accordion-item"
                    key={index}
                    style={{
                      marginBottom: "15px",
                      border: "1px solid #eee",
                      borderRadius: "8px",
                      overflow: "hidden",
                    }}
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        aria-expanded={activeKey === item.id}
                        aria-controls={item.id}
                        style={{
                          padding: "15px 20px",
                          backgroundColor:
                            activeKey === item.id ? "#f8f9fa" : "white",
                          boxShadow: "none",
                          borderRadius: "0",
                          fontWeight: "600",
                          color:
                            activeKey === item.id
                              ? faqCategories.find(
                                  (c) => c.id === activeCategory
                                ).color
                              : "#333",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span
                          style={{
                            width: "30px",
                            height: "30px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor:
                              activeKey === item.id
                                ? faqCategories.find(
                                    (c) => c.id === activeCategory
                                  ).color
                                : "#eee",
                            color: activeKey === item.id ? "white" : "#666",
                            borderRadius: "50%",
                            marginRight: "15px",
                            fontSize: "14px",
                            fontWeight: "bold",
                            flexShrink: 0,
                          }}
                        >
                          Q
                        </span>
                        {item.question}
                        <i
                          className={`fas ${
                            activeKey === item.id
                              ? "fa-chevron-up"
                              : "fa-chevron-down"
                          }`}
                          style={{
                            position: "absolute",
                            right: "20px",
                            color:
                              activeKey === item.id
                                ? faqCategories.find(
                                    (c) => c.id === activeCategory
                                  ).color
                                : "#999",
                            transition: "transform 0.3s ease",
                            transform:
                              activeKey === item.id
                                ? "rotate(180deg)"
                                : "rotate(0)",
                          }}
                        ></i>
                      </button>
                    </h2>
                    <div
                      id={item.id}
                      className={`accordion-collapse collapse ${
                        activeKey === item.id ? "show" : ""
                      }`}
                    >
                      <div
                        className="accordion-body"
                        style={{
                          padding: "20px",
                          paddingLeft: "65px",
                          color: "#666",
                          lineHeight: "1.7",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "20px",
                            top: "20px",
                            width: "30px",
                            height: "30px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#f5f5f5",
                            color: faqCategories.find(
                              (c) => c.id === activeCategory
                            ).color,
                            borderRadius: "50%",
                            fontSize: "14px",
                            fontWeight: "bold",
                          }}
                        >
                          A
                        </span>
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mp-art-pattern-bottom"></div>
    </section>
  );
};

export default FAQSection;
