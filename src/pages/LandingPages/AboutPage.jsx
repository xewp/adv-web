import React from 'react';
import jdmHistoryImage from '../../assets/his.jpg'; // Add appropriate image
import famousRacerImage from '../../assets/kic.jpeg'; // Add appropriate image

import takumiImage from '../../assets/taku.jpg'; // Add this import at the top
import '../../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1 className="about-title">The Legacy of JDM</h1>
        <p className="about-subtitle">From Japanese streets to global dominance</p>
      </section>

      <section className="history-section">
        <div className="history-content">
          <h2 className="section-title">History of JDM Culture</h2>
          <p>
            Japanese Domestic Market (JDM) culture emerged in the 1970s and 1980s as Japanese automakers began producing high-performance vehicles primarily for their home market. Strict Japanese vehicle classification laws led to unique engineering solutions, creating iconic cars with perfect balance of power and handling.
          </p>
          <p>
            The 1990s became known as the "Golden Era" of JDM, with legendary models like the Nissan Skyline GT-R, Toyota Supra, Mazda RX-7, and Honda NSX pushing technological boundaries. These cars dominated both street and track, earning worldwide recognition.
          </p>
          <div className="timeline">
            <div className="timeline-item">
              <h3>1970s</h3>
              <p>Birth of Japanese sports cars with models like Datsun 240Z</p>
            </div>
            <div className="timeline-item">
              <h3>1980s</h3>
              <p>Turbocharging era begins with cars like Toyota Supra Mk3</p>
            </div>
            <div className="timeline-item">
              <h3>1990s</h3>
              <p>Golden Age with GT-R, Supra, RX-7, NSX dominating globally</p>
            </div>
          </div>
        </div>
        <img src={jdmHistoryImage} alt="JDM history" className="history-image" />
      </section>

      <section className="racers-section">
        <h2 className="section-title">Legendary JDM Racers</h2>
        <div className="racer-cards">
          <div className="racer-card">
            <img src={famousRacerImage} alt="Keiichi Tsuchiya" className="racer-image" />
            <div className="racer-info">
              <h3>Keiichi Tsuchiya</h3>
              <p className="racer-title">The Drift King</p>
              <p>
                Known for developing drifting as a motorsport technique. His AE86 Corolla became legendary through street racing and professional circuits, inspiring Initial D.
              </p>
              <ul className="racer-stats">
                <li>Born: January 30, 1956</li>
                <li>Famous Car: Toyota AE86</li>
                <li>Notable: JGTC Champion, Le Mans competitor</li>
              </ul>
            </div>
          </div>

          <div className="racer-card">
  <img src={takumiImage} alt="Takumi Fujiwara" className="racer-image" />
  <div className="racer-info">
    <h3>Takumi Fujiwara</h3>
    <p className="racer-title">Initial D Legend</p>
    <p>
      While fictional, this character from Initial D popularized JDM culture worldwide. 
      Based on real street racers, his tofu delivery AE86 became the most famous JDM car in pop culture.
    </p>
    <ul className="racer-stats">
      <li>Famous For: Mt. Akina downhill runs</li>
      <li>Car: Toyota AE86 Trueno</li>
      <li>Technique: Gutters and braking techniques</li>
    </ul>
  </div>
</div>
        </div>
      </section>
      <section className="jdm-philosophy">
        <h2 className="section-title">The JDM Philosophy</h2>
        <div className="card-grid">
          <div className="feature-card">
            <h3 className="feature-title">Innovation</h3>
            <p>Japanese engineers created revolutionary technologies like VTEC, ATTESA E-TS, and rotary engines despite strict regulations.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Balance</h3>
            <p>JDM cars emphasize perfect weight distribution and handling over raw power, creating the ultimate driver's car.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Community</h3>
            <p>From midnight meets to professional circuits, JDM culture thrives on shared passion and mutual respect.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;


