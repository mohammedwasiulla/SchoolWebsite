import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa'; // Import icons
import '../footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>EduSupply</h3>
            <p>Your one-stop shop for high-quality school supplies.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" /> {/* Facebook Icon */}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" /> {/* Instagram Icon */}
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="icon" /> {/* GitHub Icon */}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 EduSupply. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;