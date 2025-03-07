import React, { useState } from 'react';
import '../testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "EduSupply has the best notebooks I've ever used. Highly recommended!",
      author: "Sarah T.",
    },
    {
      id: 2,
      quote: "Their backpacks are stylish and super comfortable. Perfect for school!",
      author: "John D.",
    },
    {
      id: 3,
      quote: "The pens and pencils are smooth and reliable. Great for everyday use.",
      author: "Emily R.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-carousel">
          <div
            className="testimonial-inner"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-item">
                <blockquote>{testimonial.quote}</blockquote>
                <cite>- {testimonial.author}</cite>
              </div>
            ))}
          </div>
          <button className="carousel-prev" onClick={prevTestimonial} aria-label="Previous testimonial">
            &#10094;
          </button>
          <button className="carousel-next" onClick={nextTestimonial} aria-label="Next testimonial">
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;