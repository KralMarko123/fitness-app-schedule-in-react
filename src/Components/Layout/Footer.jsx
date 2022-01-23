import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">&copy; Made by Marko Markovikj</div>
      <div className="footer-social">
        <a
          href="https://www.facebook.com/markovajb/"
          target="_blank"
          rel="noreferrer"
          className="footer-social__link"
        >
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </a>

        <a
          href="https://www.instagram.com/kralmarko/"
          target="_blank"
          rel="noreferrer"
          className="footer-social__link"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/marko-markovikj/"
          target="_blank"
          rel="noreferrer"
          className="footer-social__link"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>

        <a
          href="https://github.com/KralMarko123"
          target="_blank"
          rel="noreferrer"
          className="footer-social__link"
        >
          <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
