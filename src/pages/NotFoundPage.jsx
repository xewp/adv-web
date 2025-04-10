// NotFoundPage.jsx
import { useState, useEffect } from 'react';
import '../styles/NotFoundPage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function NotFoundPage() {
  const [text, setText] = useState('');
  const [showGlitch, setShowGlitch] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [counter, setCounter] = useState(5);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const messages = [
    "SYSTEM BREACH DETECTED...",
    "ENCRYPTING FILES...",
    "ACCESSING DATABASE...",
    "STEALING CREDENTIALS...",
    "ERROR 404: YOU'VE BEEN HACKED",
    "ALL YOUR DATA BELONGS TO US"
  ];

  useEffect(() => {
    // Ensure fullscreen
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    document.documentElement.style.margin = '0';
    document.body.style.margin = '0';

    let currentChar = 0;
    let currentMessage = 0;
    let interval;

    // Terminal typing effect
    interval = setInterval(() => {
      if (currentChar < messages[currentMessage].length) {
        setText(prev => prev + messages[currentMessage][currentChar]);
        currentChar++;
      } else if (currentMessage < messages.length - 1) {
        setTimeout(() => {
          setText(prev => prev + '\n');
          currentMessage++;
          currentChar = 0;
        }, 500);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowGlitch(true);
          setTimeout(() => {
            setShowWarning(true);
            const countdown = setInterval(() => {
              setCounter(c => {
                if (c <= 1) {
                  clearInterval(countdown);
                  setTimeout(() => {
                    setShowFinalMessage(true);
                  }, 1000);
                  return 0;
                }
                return c - 1;
              });
            }, 1000);
          }, 2000);
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      // Reset styles when component unmounts
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.documentElement.style.height = '';
      document.body.style.height = '';
      document.documentElement.style.margin = '';
      document.body.style.margin = '';
    };
  }, []);

  const handleReturnToSafety = (e) => {
    e.preventDefault();
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="hacked-container">
      {/* Animated background */}
      <div className="matrix-background">
        <div className="matrix-chars">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="matrix-char"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animation: `float ${Math.random() * 10 + 5}s linear infinite`
              }}
            >
              {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
            </div>
          ))}
        </div>
      </div>

      {/* Red warning overlay */}
      {showWarning && (
        <div className="warning-overlay"></div>
      )}

      {/* Terminal window */}
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button red"></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
          <div className="terminal-title">Terminal@hacker:~</div>
        </div>

        <div className="terminal-content">
          <pre className={showGlitch ? 'glitch-text' : ''}>
            {text}<span className="cursor">_</span>
          </pre>
        </div>
      </div>

      {/* Warning message */}
      {showWarning && (
        <div className="warning-message">
          <h2>⚠️ CRITICAL SYSTEM FAILURE ⚠️</h2>
          <p>Your system has been compromised. Initiating emergency protocols.</p>
          <p className="countdown">{counter}</p>
        </div>
      )}

      {/* Final scare */}
      {showFinalMessage && (
        <div className="final-message">
          <div className="final-text">
            ERROR 404: SYSTEM COMPROMISED
          </div>
        </div>
      )}

      {/* Return to safety button */}
      <a
        href="#"
        className="safety-button"
        onClick={handleReturnToSafety} // Use the function
      >
        RETURN TO SAFETY
      </a>
    </div>
  );
}