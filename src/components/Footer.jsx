import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p className="footer-text">
            © 2025 Your Name. Crafted with precision in Nigeria
          </p>
          <div className="social-links">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={26} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={26} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter size={26} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;