import React from 'react';
import '../styles/Footer.css'; // You'll need to create this CSS file

function Footer() {
  return (
    <footer className="jdm-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="footer-title">JDMOTO</h2>
          <p className="footer-tagline">JDM Culture Unleashed</p>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <h3>Explore</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/articles">Articles</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3>Connect</h3>
            <ul>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/forum">Forum</a></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3>Legal</h3>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JDMOTO. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;