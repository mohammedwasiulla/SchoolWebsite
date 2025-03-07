import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../header.css';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="logo">
          EduSupply
        </Link>

        {/* Navigation Menu */}
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          {/* Mobile Menu Toggle Button */}
          <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
            <span className="hamburger"></span>
          </button>

          {/* Menu Items */}
          <ul className="nav-menu">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;