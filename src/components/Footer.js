// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="path_to_logo" alt="Logo" />
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Use cases</h4>
          <ul>
            <li><a href="#">UI design</a></li>
            <li><a href="#">UX design</a></li>
            <li><a href="#">Wireframing</a></li>
            <li><a href="#">Diagramming</a></li>
            <li><a href="#">Brainstorming</a></li>
            <li><a href="#">Online whiteboard</a></li>
            <li><a href="#">Team collaboration</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Design</a></li>
            <li><a href="#">Prototyping</a></li>
            <li><a href="#">Development features</a></li>
            <li><a href="#">Design systems</a></li>
            <li><a href="#">Collaboration features</a></li>
            <li><a href="#">Design process</a></li>
            <li><a href="#">FigJam</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Best practices</a></li>
            <li><a href="#">Colors</a></li>
            <li><a href="#">Color wheel</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Resource library</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <a href="#"><img src="path_to_social_icon" alt="Instagram" /></a>
        <a href="#"><img src="path_to_social_icon" alt="YouTube" /></a>
        <a href="#"><img src="path_to_social_icon" alt="LinkedIn" /></a>
      </div>
    </footer>
  );
};

export default Footer;
