import React from "react";

const EligibilitySection = () => {
  const eligibilityCriteria = [
    {
      number: 1,
      title: "Location",
      description:
        "Based in Madhya Pradesh with operations in one of the 55 districts",
      icon: "fas fa-map-marker-alt",
    },
    {
      number: 2,
      title: "Product Focus",
      description:
        "Creating products that align with your district's identified ODOP category",
      icon: "fas fa-box",
    },
    {
      number: 3,
      title: "Business Status",
      description:
        "Operational for at least 6 months (formal registration preferred but not mandatory for artisans)",
      icon: "fas fa-store",
    },
    {
      number: 4,
      title: "Growth Potential",
      description:
        "Products with characteristics appealing to international markets or that can be adapted for global consumers",
      icon: "fas fa-chart-line",
    },
    {
      number: 5,
      title: "Commitment",
      description:
        "Ability to participate in all program activities including bootcamps, training sessions, and the final conclave in Bhopal",
      icon: "fas fa-handshake",
    },
  ];

  const participantTypes = [
    "Individual artisans & craftspeople",
    "Small producer groups & SHGs",
    "Micro & small enterprises",
    "Family businesses",
    "Startup ventures working with traditional products",
  ];

  return (
    <section
      className="mp-section"
      id="eligibility"
      style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="decorative-shape"
        style={{
          position: "absolute",
          top: "-150px",
          right: "-150px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,140,0,0.1) 0%, rgba(255,140,0,0) 70%)",
          zIndex: "1",
        }}
      ></div>

      <div
        className="decorative-shape"
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(25,118,210,0.1) 0%, rgba(25,118,210,0) 70%)",
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
            Who Can <span style={{ color: "#FF8C00" }}>Apply?</span>
          </h2>
          <div
            className="mp-divider"
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(to right, #FF8C00, #1976D2)",
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
            Simple eligibility requirements for the ODOP Village Accelerator
            program
          </p>
        </div>

        <div
          className="eligibility-criteria"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {eligibilityCriteria.map((criteria, index) => (
            <div
              className="criteria-card"
              key={index}
              style={{
                flex: "0 0 calc(33.333% - 30px)",
                maxWidth: "calc(33.333% - 30px)",
                backgroundColor: "white",
                borderRadius: "15px",
                padding: "30px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="criteria-number"
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#FF8C00",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                  boxShadow: "0 3px 10px rgba(255,140,0,0.2)",
                }}
              >
                {criteria.number}
              </div>

              <div
                className="criteria-icon"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,140,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <i
                  className={criteria.icon}
                  style={{ fontSize: "24px", color: "#FF8C00" }}
                ></i>
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "15px",
                  color: "#333",
                }}
              >
                {criteria.title}
              </h3>

              <p
                style={{
                  fontSize: "16px",
                  color: "#666",
                  lineHeight: "1.6",
                  marginBottom: "0",
                }}
              >
                {criteria.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="participant-types-container"
          style={{
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "40px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
            position: "relative",
            overflow: "hidden",
            border: "1px solid #F0F0F0",
          }}
        >
          <div
            className="decoration-line"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "5px",
              background:
                "linear-gradient(to right, #FF8C00, #1976D2, #43A047)",
            }}
          ></div>

          <h3
            style={{
              fontSize: "24px",
              fontWeight: "700",
              marginBottom: "25px",
              color: "#333",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#1976D2",
                marginRight: "15px",
              }}
            >
              <i
                className="fas fa-users"
                style={{ color: "white", fontSize: "18px" }}
              ></i>
            </span>
            Types of Participants
          </h3>

          <div
            className="participant-types"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            {participantTypes.map((type, index) => (
              <div
                className="participant-type"
                key={index}
                style={{
                  padding: "12px 20px",
                  backgroundColor: "rgba(25,118,210,0.08)",
                  borderRadius: "50px",
                  color: "#1976D2",
                  fontWeight: "600",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i
                  className="fas fa-check-circle"
                  style={{ marginRight: "8px", fontSize: "14px" }}
                ></i>
                {type}
              </div>
            ))}
          </div>

          <div
            className="eligibility-note"
            style={{
              marginTop: "30px",
              padding: "20px",
              backgroundColor: "rgba(67,160,71,0.08)",
              borderRadius: "10px",
              borderLeft: "4px solid #43A047",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                marginBottom: "0",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <i
                className="fas fa-info-circle"
                style={{
                  color: "#43A047",
                  marginRight: "10px",
                  fontSize: "18px",
                  marginTop: "2px",
                }}
              ></i>
              <span>
                <strong>Note:</strong> We welcome applications from all
                backgrounds, including women entrepreneurs, rural producers, and
                traditional craftspeople without digital presence.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
