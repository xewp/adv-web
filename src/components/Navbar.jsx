import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/jd.png';
import Button from './button';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>JDMOTO</span>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Button>Login</Button>
    </nav>
  );
}

export default Navbar;