import React, { useEffect } from "react";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import ProgramSection from "../components/sections/ProgramSection";
import SuccessStoriesSection from "../components/sections/SuccessStoriesSection";
import ApplySection from "../components/sections/ApplySection";
// import EligibilitySection from "../components/sections/EligibilitySection";
import PartnersSection from "../components/sections/PartnersSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";

const HomePage = () => {
  useEffect(() => {
    // Initialize animations
    const initAnimations = () => {
      const fadeElements = document.querySelectorAll(
        ".benefit-card, .story-card, .timeline-item, .eligibility-item, .partner-logo"
      );

      // Simple reveal animation on scroll
      const handleScroll = () => {
        fadeElements.forEach((element) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add("visible");
          }
        });
      };

      window.addEventListener("scroll", handleScroll);

      // Trigger once on page load
      setTimeout(() => {
        window.dispatchEvent(new Event("scroll"));
      }, 300);

      return () => window.removeEventListener("scroll", handleScroll);
    };

    // Add additional CSS classes
    const addCssClasses = () => {
      // Add fade-in animation classes
      document
        .querySelectorAll(
          ".benefit-card, .story-card, .timeline-item, .eligibility-item, .partner-logo"
        )
        .forEach((item) => {
          item.classList.add("fade-in-element");
        });

      // Add tribal art pattern to specific elements
      const artPatterns = document.querySelectorAll(
        ".mp-art-pattern-top, .mp-art-pattern-bottom"
      );
      artPatterns.forEach((pattern) => {
        for (let i = 0; i < 20; i++) {
          const dot = document.createElement("span");
          dot.className = "art-dot";
          dot.style.left = `${Math.random() * 100}%`;
          dot.style.top = `${Math.random() * 100}%`;
          pattern.appendChild(dot);
        }
      });
    };

    initAnimations();
    addCssClasses();
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ProgramSection />
      <SuccessStoriesSection />
      <ApplySection />
      {/* <EligibilitySection /> */}
      <PartnersSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
