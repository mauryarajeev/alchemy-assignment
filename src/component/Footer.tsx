import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaTwitch, FaYoutube } from 'react-icons/fa'; // Import React Icons
import './Footer.css'; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Social Media Icons */}
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.twitch.tv" target="_blank" rel="noopener noreferrer">
          <FaTwitch />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>

      {/* Footer Links - First Row */}
      <div className="footer-links">
        <a href="/" className="link">Privacy Policy</a>
        <a href="/" className="link">Contact Us</a>
        <a href="/" className="link">Cookie Preferences</a>
        <a href="/" className="link">Corporate Information</a>
      </div>

      {/* Footer Links - Second Row */}
      <div className="footer-links">
        <a href="/" className="link">Privacy Policy</a>
        <a href="/" className="link">Contact Us</a>
        <a href="/" className="link">Cookie Preferences</a>
        <a href="/" className="link">Corporate Information</a>
      </div>

      {/* Copyright Notice */}
      <div className="footer-bottom">
        <p>&copy; 2024 Test</p>
      </div>
    </footer>
  );
};

export default Footer;
