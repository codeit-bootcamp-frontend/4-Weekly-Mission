import React from 'react';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import instagram from '../images/instagram.svg';

export function Footer() {
  return (
    <>
      <footer>
        <div className="footerBox">
          <div className="copyRight">©codeit - 2023</div>
          <div className="links">
            <a href="/privacy" className="link">Privacy Policy</a>
            <a href="/faq" className="link">FAQ</a>
          </div>
          <div className="sns">
            <a href="#" target="_blank"
              ><img src={facebook} alt="facebook"
            /></a>
            <a href="#" target="_blank"
              ><img src={twitter} alt="twitter"
            /></a>
            <a href="#" target="_blank"
              ><img src={youtube} alt="youtube"
            /></a>
            <a href="#" target="_blank"
              ><img src={instagram} alt="instagram"
            /></a>
          </div>
        </div>
      </footer>
    </>
  )
}