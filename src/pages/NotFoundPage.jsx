import React from 'react';
import '../styles/NotFoundPage.css';  // Updated import path

function NotFoundPage() {
  return (

    <div className="not-found-container">
      <div className="glitch" data-text="404">404</div>
      <div className="scanlines"></div>
      <div className="error-message">
        <p className="error-line">ERROR: PAGE_NOT_FOUND</p>
        <p className="error-line">LOCATION: UNKNOWN</p>
        <p className="error-line">STATUS: TERMINATED</p>
        <br />
        <p className="error-line">INITIATE SYSTEM RECOVERY...</p>
        <p className="error-line blink">PRESS ANY KEY TO CONTINUE_</p>
      </div>
    </div>
  );
}

export default NotFoundPage;