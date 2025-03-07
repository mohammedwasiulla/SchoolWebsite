import React, { useState } from 'react';
import '../contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showMessage, setShowMessage] = useState(false); // Slide-in message state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    // Show slide-in message
    setShowMessage(true);

    // Hide message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Location</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

        {/* Slide-in message */}
        {showMessage && (
          <div className="slide-in-message">
            Thank you for contacting us! We will get back to you soon.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
