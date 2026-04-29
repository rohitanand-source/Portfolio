import React, { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.body.classList.toggle("light-mode");
    setDark(!dark);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">ROHIT</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact" className="contact-btn">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;