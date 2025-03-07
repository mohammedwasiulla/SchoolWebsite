import React from 'react';
import '../AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>
          At <strong>EduSupply</strong>, we are passionate about empowering students and educators with high-quality school supplies that make learning more effective and enjoyable. Our mission is to provide durable, functional, and stylish products that meet the needs of modern education.
        </p>
        <p>
          Founded in 2023, EduSupply has quickly become a trusted name in the education industry. We believe that every student deserves access to the best tools for success, and we are committed to making that a reality.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to enhance the learning experience by offering innovative and reliable school supplies that inspire creativity, productivity, and success.
        </p>
        <h3>Our Values</h3>
        <ul>
          <li><strong>Quality:</strong> We prioritize durability and functionality in every product we offer.</li>
          <li><strong>Sustainability:</strong> We are committed to eco-friendly practices and materials.</li>
          <li><strong>Innovation:</strong> We constantly seek new ways to improve and innovate our products.</li>
          <li><strong>Customer Focus:</strong> We listen to our customers and strive to exceed their expectations.</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;