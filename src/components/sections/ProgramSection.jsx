import React from "react";

const ProgramSection = () => {
  const phases = [
    {
      number: 1,
      title: "District Discovery & Selection",
      duration: "1 month",
      color: "#5D2906",
      icon: "fas fa-map-marked-alt",
      sections: [
        {
          title: "District Bootcamps",
          icon: "fas fa-laptop-house",
          items: [
            "One-day intensive workshops across 55 districts",
            "Hands-on ODOP concept sessions",
            "Live product transformation demonstrations",
          ],
        },
        {
          title: "Selection Process",
          icon: "fas fa-user-check",
          items: [
            "Evaluation based on product uniqueness & potential",
            "Selection of 30-50 promising entrepreneurs",
            "Formation of the inaugural cohort",
          ],
        },
      ],
    },
    {
      number: 2,
      title: "Global Readiness Acceleration",
      duration: "1 month",
      color: "#8B5A2B",
      icon: "fas fa-rocket",
      sections: [
        {
          title: "Hybrid Learning",
          icon: "fas fa-chalkboard-teacher",
          items: [
            "Virtual masterclasses with industry experts",
            "In-person workshops at regional hubs",
            "One-on-one mentorship sessions",
          ],
        },
        {
          title: "Key Focus Areas",
          icon: "fas fa-bullseye",
          items: [
            "Packaging & product development",
            "Digital marketing & e-commerce",
            "Export documentation (IEC, RCMC)",
            "Quality compliance & certification",
            "Access to finance opportunities",
          ],
        },
      ],
    },
    {
      number: 3,
      title: "ODOP Mega Conclave & Awards",
      duration: "1 week",
      color: "#A0522D",
      icon: "fas fa-award",
      sections: [
        {
          title: "In Bhopal",
          icon: "fas fa-map-pin",
          items: [
            "Grand exhibition of transformed products",
            "B2B matchmaking with domestic & international buyers",
            "Meetings with potential investors",
          ],
        },
        {
          title: "ODOP Excellence Awards",
          icon: "fas fa-trophy",
          items: [
            "Recognition across multiple categories",
            "Special funding announcements",
            "Media showcase & national visibility",
            "International market launch",
          ],
        },
      ],
    },
  ];

  return (
    <section className="program-section" id="program">
      <div className="decorative-element"></div>

      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Our Approach</span>
          <h2>
            ODOP Village <span className="highlight">Accelerator Journey</span>
          </h2>
          <div className="program-divider"></div>
          <p className="section-subtitle">
            A strategic three-phase program to transform Madhya Pradesh's
            district products into globally competitive brands
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          <div className="program-journey">
            {phases.map((phase, index) => (
              <div className="journey-phase" key={index}>
                <div
                  className="phase-marker"
                  style={{ backgroundColor: phase.color }}
                >
                  <div>{phase.number}</div>
                </div>

                <div className="phase-content-wrapper">
                  <div className="phase-header">
                    <h3 style={{ color: phase.color }}>
                      Phase {phase.number}: {phase.title}
                    </h3>
                    <div
                      className="phase-duration"
                      style={{ backgroundColor: phase.color }}
                    >
                      Duration: {phase.duration}
                    </div>
                  </div>

                  <div className="phase-content">
                    {phase.sections.map((section, sectionIndex) => (
                      <div
                        className="phase-section"
                        key={sectionIndex}
                        style={{ borderLeftColor: phase.color }}
                      >
                        <h4
                          className="section-title"
                          style={{ color: phase.color }}
                        >
                          <i className={section.icon}></i>
                          {section.title}
                        </h4>
                        <ul className="section-items">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <span
                                className="bullet"
                                style={{ backgroundColor: phase.color }}
                              ></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-container text-center">
          <div className="cta-inner">
            <h3>Ready to Take Your Products Global?</h3>
            <p>
              Limited spots available for this exclusive government-backed
              accelerator program
            </p>
            <a href="#apply" className="cta-button">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
