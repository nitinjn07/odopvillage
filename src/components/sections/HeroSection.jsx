import React, { useState, useEffect, useCallback } from "react";

// Import multiple background images for the slider
import bgImage1 from "../../assets/images/slider/slider1.png";
import bgImage2 from "../../assets/images/slider/slider2.png";
import bgImage3 from "../../assets/images/slider/slider3.png";

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
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle automatic image rotation with smooth transitions
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change image every 6 seconds (slightly longer for better UX)

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Handle slide change with transition effect
  const changeSlide = useCallback((indexFn) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(indexFn);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 500);
  }, []);

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
                } ${isTransitioning ? "transitioning" : ""}`}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}

            {/* Enhanced Navigation Dots */}
            <div className="slider-navigation">
              {backgroundImages.map((_, index) => (
                <span
                  key={index}
                  className={`nav-dot ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => changeSlide(() => index)}
                ></span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Overlay with Enhanced Animation */}
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-content-wrapper">
              <div className="hero-eyebrow">Madhya Pradesh Initiative</div>
              <h1 className="hero-title">
                ODOP <span className="highlight">VILLAGE</span>{" "}
                <span className="accent">Accelerator</span>
              </h1>
              <div className={`hero-subtitle ${isTransitioning ? "fade" : ""}`}>
                {slideContent[currentImageIndex].title}
              </div>
              <div
                className={`hero-description ${isTransitioning ? "fade" : ""}`}
              >
                {slideContent[currentImageIndex].subtitle}
              </div>
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
          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-badge">
              <div className="badge-content">
                <div className="badge-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className="badge-text">
                  <span className="badge-label">Applications Close</span>
                  <span className="badge-value">May 30, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mp-art-pattern-bottom"></div>

      {/* Decorative Elements */}
      <div className="decoration-circle decoration-circle-1"></div>
      <div className="decoration-circle decoration-circle-2"></div>
      <div className="decoration-motif decoration-motif-1"></div>
    </section>
  );
};

export default HeroSection;
