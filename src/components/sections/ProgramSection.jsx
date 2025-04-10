import React from "react";

const ProgramSection = () => {
  const phases = [
    {
      number: 1,
      title: "District Discovery & Selection",
      duration: "1 month",
      color: "#FF8C00",
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
      color: "#1976D2",
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
      color: "#43A047",
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
    <section
      className="mp-section"
      id="program"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="decorative-element"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage:
            "radial-gradient(circle, #FF8C00 1px, transparent 1px), radial-gradient(circle, #1976D2 1px, transparent 1px)",
          backgroundSize: "40px 40px, 30px 30px",
          backgroundPosition: "0 0, 20px 20px",
          opacity: "0.05",
          zIndex: "1",
        }}
      ></div>

      <div className="container" style={{ position: "relative", zIndex: "2" }}>
        <div
          className="section-header text-center"
          style={{ marginBottom: "60px" }}
        >
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "800",
              color: "#333",
              marginBottom: "15px",
            }}
          >
            ODOP Village{" "}
            <span style={{ color: "#FF8C00" }}>Accelerator Journey</span>
          </h2>
          <div
            className="mp-divider"
            style={{
              width: "80px",
              height: "4px",
              background:
                "linear-gradient(to right, #FF8C00, #1976D2, #43A047)",
              margin: "0 auto 25px",
            }}
          ></div>
          <p
            className="section-subtitle"
            style={{
              fontSize: "20px",
              color: "#666",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            A strategic three-phase program to transform Madhya Pradesh's
            district products into globally competitive brands
          </p>
        </div>

        <div className="timeline-wrapper" style={{ position: "relative" }}>
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "50%",
              width: "6px",
              background:
                "linear-gradient(to bottom, #FF8C00, #1976D2, #43A047)",
              transform: "translateX(-50%)",
              borderRadius: "3px",
              zIndex: "1",
            }}
          ></div>

          <div className="program-journey">
            {phases.map((phase, index) => (
              <div
                className="journey-phase"
                key={index}
                style={{
                  position: "relative",
                  marginBottom: "80px",
                  zIndex: "2",
                }}
              >
                <div
                  className="phase-marker"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: phase.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 0 8px white, 0 5px 15px rgba(0,0,0,0.2)`,
                    zIndex: "3",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: "28px",
                      fontWeight: "bold",
                    }}
                  >
                    {phase.number}
                  </div>
                </div>

                <div
                  className="phase-content-wrapper"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    className="phase-header"
                    style={{
                      width: "45%",
                      textAlign: "right",
                      paddingRight: "80px",
                      paddingTop: "15px",
                    }}
                  >
                    <h3
                      style={{
                        color: phase.color,
                        fontSize: "28px",
                        fontWeight: "700",
                        marginBottom: "10px",
                      }}
                    >
                      Phase {phase.number}: {phase.title}
                    </h3>
                    <div
                      className="phase-duration"
                      style={{
                        display: "inline-block",
                        padding: "6px 15px",
                        backgroundColor: phase.color,
                        color: "white",
                        borderRadius: "20px",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Duration: {phase.duration}
                    </div>
                  </div>

                  <div
                    className="phase-content"
                    style={{
                      width: "45%",
                      paddingLeft: "80px",
                      paddingTop: "15px",
                    }}
                  >
                    {phase.sections.map((section, sectionIndex) => (
                      <div
                        className="phase-section"
                        key={sectionIndex}
                        style={{
                          backgroundColor: "white",
                          borderRadius: "12px",
                          padding: "25px",
                          marginBottom: "20px",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                          borderLeft: `5px solid ${phase.color}`,
                        }}
                      >
                        <h4
                          className="section-title"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            color: phase.color,
                            fontSize: "20px",
                            fontWeight: "700",
                            marginBottom: "15px",
                          }}
                        >
                          <i
                            className={section.icon}
                            style={{
                              marginRight: "10px",
                              fontSize: "22px",
                            }}
                          ></i>
                          {section.title}
                        </h4>
                        <ul
                          className="section-items"
                          style={{
                            listStyleType: "none",
                            padding: "0",
                            margin: "0",
                          }}
                        >
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              style={{
                                position: "relative",
                                paddingLeft: "25px",
                                marginBottom: "10px",
                                fontSize: "16px",
                                color: "#555",
                                display: "flex",
                                alignItems: "flex-start",
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  left: "0",
                                  top: "8px",
                                  width: "8px",
                                  height: "8px",
                                  backgroundColor: phase.color,
                                  borderRadius: "50%",
                                }}
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

        <div
          className="cta-container text-center"
          style={{
            marginTop: "50px",
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "40px",
            boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
            background: "linear-gradient(135deg, #fff6e9 0%, #fff 100%)",
          }}
        >
          <h3
            style={{
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "15px",
              color: "#333",
            }}
          >
            Ready to Take Your Products Global?
          </h3>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              marginBottom: "25px",
              maxWidth: "700px",
              margin: "0 auto 25px",
            }}
          >
            Limited spots available for this exclusive government-backed
            accelerator program
          </p>
          <button
            className="cta-button"
            style={{
              backgroundColor: "#FF8C00",
              color: "white",
              border: "none",
              borderRadius: "50px",
              padding: "15px 40px",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 5px 20px rgba(255, 140, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
