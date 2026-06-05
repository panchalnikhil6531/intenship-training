import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ cartCount = 0 }) {
  return (
    <header className="header">

      <div className="logo">
        US LIFE
      </div>

      <nav>
        <ul className="nav-links">

          <li><Link to="/">Home</Link></li>

          <li><Link to="/about">About</Link></li>

          <li><Link to="/contact">Contact</Link></li>

          <li><Link to="/register">Register</Link></li>

          <li><Link to="/users">Users</Link></li>

          <li><Link to="/api">API</Link></li>

          <li className="cart-nav">
            <Link to="/cart">
              🛒 Cart
              <span className="cart-badge">
                {cartCount}
              </span>
            </Link>
          </li>

        </ul>
      </nav>

    </header>
  );
}

export default Header;