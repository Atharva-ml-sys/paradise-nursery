// AboutUs.jsx
// Displays a short paragraph about the Paradise Nursery company.
// Rendered on the landing page.
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <p className="about-us-content">
        Welcome to Paradise Nursery, where green meets serenity! We are a
        passionate team of plant enthusiasts dedicated to bringing nature closer
        to your home and workspace. Our carefully curated collection of
        houseplants is hand-picked to purify the air, lift your mood, and add a
        touch of living beauty to any room.
      </p>
      <p className="about-us-content">
        At Paradise Nursery, we believe that everyone deserves a little piece of
        paradise. Whether you are a seasoned plant parent or just starting your
        green journey, our plants are chosen for their resilience, beauty, and
        ease of care. Each plant comes with our promise of quality and a
        commitment to sustainability.
      </p>
      <p className="about-us-content">
        Join us in creating healthier, happier spaces — one plant at a time.
        Explore our range of aromatic, air-purifying, and low-maintenance
        houseplants, and let Paradise Nursery help you cultivate your own green
        paradise.
      </p>
    </div>
  );
}

export default AboutUs;
