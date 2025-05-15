import React from 'react';
import jdmHeroImage from '../../assets/awe.jpg';
import '../../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <img 
          src={jdmHeroImage}
          alt="Modified JDM car" 
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">JDM Culture Unleashed</h1>
          <h2 className="hero-subtitle">Where Passion Meets Performance</h2>
          <p className="hero-text">
            Immerse yourself in the world of Japanese Domestic Market legends. 
            From timeless classics like the Nissan Skyline GT-R to modern icons 
            like the Toyota GR Supra, we celebrate the engineering excellence 
            and unique style that defines JDM culture.
          </p>
          <a href="/about" className="cta-button">Explore More</a>
        </div>
      </div>
      
      <div className="card-grid">
        <div className="feature-card">
          <h3 className="feature-title">Iconic Models</h3>
          <p>Discover the legends - RX-7, Supra, NSX, Evo, and more. Learn what makes each one special.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Modification Guides</h3>
          <p>From tasteful OEM+ builds to wild time attack monsters, find your inspiration.</p>
        </div>
        <div className="feature-card">
          <h3 className="feature-title">Community Events</h3>
          <p>Join meets, track days, and JDM-exclusive gatherings near you.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;