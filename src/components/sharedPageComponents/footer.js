import React from 'react';
import facebook from '../../assets/Images/facebook_icon.svg';
import twitter from '../../assets/Images/twitter_icon.svg';
import youtube from '../../assets/Images/youtube_icon.svg';
import instagram from '../../assets/Images/instagram-icon.svg';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-banner">
          <div className="copyright">
            <p>&copy;codeit - 2023</p>
          </div>
          <div className="description">
            <a href="/privacy">Privacy Policy</a>
            <a href="/faq">FAQ</a>
          </div>
          <div className="footer-icon">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} alt="facebook icon" width="20" height="20" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter icon" width="20" height="20" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src={youtube} alt="youtube icon" width="20" height="20" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instagram}
                alt="instagram icon"
                width="20"
                height="20"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
