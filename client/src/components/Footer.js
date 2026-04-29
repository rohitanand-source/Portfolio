import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <h2 className="footer-logo">Rohit Anand</h2>

        <p className="footer-text">
          Building modern web applications with passion 🚀
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/rohitanand-source">GitHub</a>
          <a href="www.linkedin.com/in/rohitanand8431">LinkedIn</a>
          <a href="https://www.instagram.com/_rohit__anand__?igsh=djdmdzlyZWg5aW50">Instagram</a>
          <a href="https://www.youtube.com/@AnandSharma25-g2r">YouTube</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Rohit Anand. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;