import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyLogo</div>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>        
              </li>

      <li>
            <Link to="/about">About</Link>
      </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/Register">Register</Link>
          </li>
    </ul>
      </nav>

      <button className="btn">Login</button>
    </header>
  );
};

export default Header;