import React from 'react';
import Hero from './Hero';
import Products from './Products';
import Testimonials from './Testimonials';
import '../home.css';


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <Products />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;