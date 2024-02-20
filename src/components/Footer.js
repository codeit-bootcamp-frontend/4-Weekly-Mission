import React from 'react';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import insta from '../images/insta.svg';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="copyright">©codeit - 2023</div>
        <div className="footer_center">
          <a className="footer_link" href="/privacy.html">
            Privacy Policy
          </a>
          <a className="footer_link" href="/faq.html">
            FAQ
          </a>
        </div>
        <div className="sns">
          <a href="https://www.facebook.com" target="_blank">
            <img src={facebook} alt="Go to Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twitter} alt="Go to Twitter" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src={youtube} alt="Go to Youtube" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={insta} alt="Go to Insta" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
