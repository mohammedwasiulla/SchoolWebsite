import React from 'react';
import { Link } from 'react-router-dom';
import '../hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Empowering Education with Premium Supplies</h1>
        <p>Discover high-quality school products designed for students and educators.</p>
        <Link to="/products" className="btn btn-primary">
          Explore Products
        </Link>
      </div>
    </section>
  );
};

export default Hero;