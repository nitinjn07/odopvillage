import React from "react";
import { placeholders } from "../../assets/images/placeholder";

const SuccessStoriesSection = () => {
  const stories = [
    {
      image: placeholders.story1,
      name: "Meena Devi",
      craft: "Gond Art Painter, Dindori",
      story:
        '"From selling paintings in local markets to shipping my artwork to collectors in New York and Tokyo - MP Art Propel made my dreams come true."',
      stats: [
        { value: "5x", label: "Income Growth" },
        { value: "12", label: "Countries Reached" },
      ],
    },
    {
      image: placeholders.story2,
      name: "Ramesh Malviya",
      craft: "Bamboo Craftsman, Balaghat",
      story:
        '"I learned how to showcase my bamboo products online and now I receive orders from eco-conscious customers across Europe and Australia."',
      stats: [
        { value: "300%", label: "Revenue Increase" },
        { value: "8", label: "New Employees" },
      ],
    },
    {
      image: placeholders.story3,
      name: "Sunita Bai",
      craft: "Bagh Print Artisan, Dhar",
      story:
        '"My traditional block printing techniques are now appreciated worldwide. I\'ve expanded my workshop and trained 15 women from my village."',
      stats: [
        { value: "7x", label: "Order Volume" },
        { value: "20+", label: "Retail Partners" },
      ],
    },
  ];

  return (
    <section className="mp-section mp-section-alt" id="success-stories">
      <div className="mp-art-pattern-top"></div>
      <div className="container">
        <div className="section-header text-center">
          <h2>
            Success <span className="highlight">Stories</span>
          </h2>
          <div className="mp-divider"></div>
          <p className="section-subtitle">
            Meet the artisans who transformed their craft into global businesses
          </p>
        </div>
        <div className="row mt-5">
          {stories.map((story, index) => (
            <div className="col-md-4" key={index}>
              <div className="story-card">
                {/* <div className="story-image-container">
                  <div className="mp-art-border">
                    <img
                      src={story.image}
                      alt={`Success Story - ${story.name}`}
                      className="img-fluid"
                    />
                  </div>
                </div> */}
                <h3>{story.name}</h3>
                <p className="craft-type">{story.craft}</p>
                <p className="story-text">{story.story}</p>
                <div className="story-stats">
                  {story.stats.map((stat, statIndex) => (
                    <div className="stat-item" key={statIndex}>
                      <span className="stat-number">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-5">
          <a href="#" className="btn mp-btn-secondary">
            Read More Success Stories
          </a>
        </div> */}
      </div>
      <div className="mp-art-pattern-bottom"></div>
    </section>
  );
};

export default SuccessStoriesSection;
