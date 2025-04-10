import React, { useState, useEffect } from "react";

// Import multiple background images for the slider
import bgImage1 from "../../assets/images/slider.png";
import bgImage2 from "../../assets/images/slider.png";
import bgImage3 from "../../assets/images/slider.png";

const HeroSection = ({ useVideo = false }) => {
  // Array of background images for the slider
  const backgroundImages = [bgImage1, bgImage2, bgImage3];

  // Array of slide content
  const slideContent = [
    {
      title: "FROM LOCAL CRAFTSMANSHIP TO GLOBAL MARKETS",
      subtitle:
        "The first-ever accelerator program by ODOP Cell, MP Industrial Development Corporation, bringing Madhya Pradesh's unique products to the world stage",
    },
    {
      title: "UNLOCK YOUR PRODUCT'S GLOBAL POTENTIAL",
      subtitle:
        "Expert guidance, market access, and business development for ODOP entrepreneurs across Madhya Pradesh",
    },
    {
      title: "JOIN THE JOURNEY: LOCAL HANDS TO GLOBAL LANDS",
      subtitle:
        "Limited spots available for ambitious creators ready to transform district products into international brands",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle automatic image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="mp-hero" id="home">
      {/* Background Slider */}
      <div className="mp-hero-background">
        {useVideo ? (
          <video autoPlay muted loop className="hero-background-video">
            <source
              src="../../assets/videos/hero-background.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="background-slider">
            {backgroundImages.map((image, index) => (
              <div
                key={index}
                className={`slider-image ${
                  index === currentImageIndex ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}

            {/* Optional: Navigation Dots */}
            <div className="slider-navigation">
              {backgroundImages.map((_, index) => (
                <span
                  key={index}
                  className={`nav-dot ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Overlay */}
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-title">
              ODOP <span className="highlight">VILLAGE</span> Accelerator
            </h1>
            <p className="hero-subtitle">
              {slideContent[currentImageIndex].title}
            </p>
            <p className="hero-description">
              {slideContent[currentImageIndex].subtitle}
            </p>
            <div className="hero-buttons">
              <a href="#apply" className="btn mp-btn-primary">
                Apply Now
              </a>
              <a href="#about" className="btn mp-btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mp-art-pattern-bottom"></div>
    </section>
  );
};

export default HeroSection;
