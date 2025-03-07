import React, { useState } from 'react';
import '../Product.css';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false); // State for slide-in message

  const products = [
    {
      id: 1,
      image: '/images/notebooks.jpg',
      title: 'Notebooks',
      description: 'Durable and eco-friendly notebooks for all your notes.',
      price: '₹199',
    },
    {
      id: 2,
      image: '/images/pens.jpg',
      title: 'Pens & Pencils',
      description: 'Smooth-writing pens and pencils for every task.',
      price: '₹99',
    },
    {
      id: 3,
      image: '/images/backpacks.jpg',
      title: 'Backpacks',
      description: 'Stylish and ergonomic backpacks for students.',
      price: '₹899',
    },
    {
      id: 4,
      image: '/images/shoes.jpg',
      title: 'Shoes',
      description: 'Comfortable and stylish shoes for everyday wear.',
      price: '₹1500',
    },
    {
      id: 5,
      image: '/images/lunch.jpg',
      title: 'Lunch Boxes',
      description: 'Insulated lunch boxes to keep your food fresh.',
      price: '₹899',
    },
    {
      id: 6,
      image: '/images/bottle.jpg',
      title: 'Water Bottles',
      description: 'Eco-friendly and leak-proof water bottles.',
      price: '₹899',
    },
    {
      id: 7,
      image: '/images/pencilbox.jpg',
      title: 'Pencil Boxes',
      description: 'Stylish and spacious pencil boxes for students.',
      price: '₹899',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleBuyClick = () => {
    setShowMessage(true); // Show the slide-in message
    setTimeout(() => {
      setShowMessage(false); // Hide the message after 3 seconds
    }, 3000);
  };

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Our Products</h2>
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="carousel-item">
                <img src={product.image} alt={product.title} loading="lazy" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p className="price"><strong>Price:</strong> {product.price}</p>
                <button className="buy-button" onClick={handleBuyClick}>
                  Buy Now
                </button>
              </div>
            ))}
          </div>
          <button className="carousel-prev" onClick={prevSlide} aria-label="Previous slide">
            &#10094;
          </button>
          <button className="carousel-next" onClick={nextSlide} aria-label="Next slide">
            &#10095;
          </button>
        </div>
      </div>

      {/* Slide-in Message */}
      {showMessage && (
        <div className="slide-in-message">
          Your product will be delivered soon. Please fill the contact form for the item to be delivered.
        </div>
      )}
    </section>
  );
};

export default Products;