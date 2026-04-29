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
          <a href="https://github.com/rohitanand-source" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/rohitanand8431/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://www.instagram.com/_rohit__anand__?igsh=djdmdzlyZWg5aW50" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.youtube.com/@AnandSharma25-g2r" target="_blank" rel="noopener">YouTube</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Rohit Anand. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;