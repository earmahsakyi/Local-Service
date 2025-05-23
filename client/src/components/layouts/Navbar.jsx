import React from "react";
import { motion } from "framer-motion";
import "./Nav.css";

const navItems = ["Home", "Services", "Login", "Sign Up / Register", "About Us"];

const Navbar = () => {
  return (
    <nav className="transparent-nav" style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div className="nav-wrapper container">
        <div className="header">
          <a href="/" className="brand-logo white-text">
          <h5 className="nav-logo">LS</h5>
        </a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger white-text">
          <i className="material-icons">menu</i>
        </a>
        
        </div>
        <div className="item">
          <ul className="right hide-on-med-and-down">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="nav-item-wrapper"
            >
              <a href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
        </div>
      </div>

      {/* Mobile Nav */}

      <ul className="sidenav grey darken-4" id="mobile-demo" >
        {navItems.map((item) => (
          <li key={item} >
            <a href={`#${item.toLowerCase()}`} className="white-text">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
