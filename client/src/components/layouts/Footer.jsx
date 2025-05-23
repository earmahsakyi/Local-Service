import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="newsletter">
        <h5>Subscribe to our Newsletter</h5>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button className="btn">Subscribe</button>
        </div>
      </div>

      <div className="social-links">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
      </div>

      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
