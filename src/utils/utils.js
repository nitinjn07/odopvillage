// Utility functions for MP Art Propel

/**
 * Smooth scroll to an element by ID with offset
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Offset from the top (e.g., for fixed header)
 */
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Validate email format
 * @param {string} email - The email to validate
 * @returns {boolean} - Whether the email is valid
 */
export const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

/**
 * Validate phone number (10 digits)
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - Whether the phone is valid
 */
export const isValidPhone = (phone) => {
  const phonePattern = /^[0-9]{10}$/;
  return phonePattern.test(phone);
};

/**
 * Format a date string
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date string
 */
export const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-IN", options);
};

/**
 * Add animation classes to elements when they come into view
 * @param {string} selector - CSS selector for elements to animate
 */
export const initFadeAnimations = (selector = ".fade-in-element") => {
  const fadeElements = document.querySelectorAll(selector);

  const handleScroll = () => {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("visible");
      }
    });
  };

  // Add event listener
  window.addEventListener("scroll", handleScroll);

  // Trigger once on load
  setTimeout(() => {
    window.dispatchEvent(new Event("scroll"));
  }, 300);

  // Return cleanup function
  return () => window.removeEventListener("scroll", handleScroll);
};
