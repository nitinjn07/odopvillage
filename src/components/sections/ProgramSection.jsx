import React from "react";

const ProgramSection = () => {
  const timelineItems = [
    {
      step: 1,
      title: "Application & Selection",
      description:
        "Submit your application showcasing your craft and business vision. Selected artisans will be invited to join the program.",
    },
    {
      step: 2,
      title: "Onboarding & Assessment",
      description:
        "We'll evaluate your current business setup and create a customized growth plan tailored to your specific craft and goals.",
    },
    {
      step: 3,
      title: "Skill Development",
      description:
        "Attend workshops on product photography, digital marketing, pricing strategy, and e-commerce platform management.",
    },
    {
      step: 4,
      title: "Market Launch",
      description:
        "Set up your online store with professional product listings and start selling to international customers.",
    },
    {
      step: 5,
      title: "Growth & Optimization",
      description:
        "Refine your strategies based on sales data and customer feedback to increase your global footprint.",
    },
    {
      step: 6,
      title: "Graduation & Continued Support",
      description:
        "Join our alumni network and receive ongoing assistance as you continue to grow your international business.",
    },
  ];

  return (
    <section className="mp-section" id="program">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Program <span className="highlight">Structure</span>
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">
            A 6-month journey to global success
          </p>
        </div>
        <div className="program-timeline">
          {timelineItems.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-number">{item.step}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
