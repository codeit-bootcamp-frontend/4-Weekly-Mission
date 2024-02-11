import React from "react";
import instagram from "../imgs/instagram.svg";
import facebook from "../imgs/facebook.svg";
import twitter from "../imgs/twitter.svg";
import youtube from "../imgs/youtube.svg";
import "../css/Footer.css";

function Footer(props) {
  return (
    <footer className="footer-var">
      <ul className="bottom-nav">
        <li className="bottom-nav__codeit">@codeit - 2023</li>
        <li className="bottom-nav__setting">
          <a className="bottom-nav__setting--color" href="/privacy">
            Privacy Policy
          </a>
          <a className="bottom-nav__setting--color" href="/faq">
            FAQ
          </a>
        </li>
        <ul className="bottom-nav__icon">
          <li>
            <a
              className="bottom-nav__icon--facebook bottom-nav__icon--block"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <img src={facebook} alt="facebook"></img>
            </a>
          </li>
          <li>
            <a
              className="bottom-nav__icon--twitter bottom-nav__icon--block"
              href="https://twitter.com/"
              target="_blank"
            >
              <img src={twitter} alt="twitter"></img>
            </a>
          </li>
          <li>
            <a
              className="bottom-nav__icon--insta bottom-nav__icon--block"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <img src={instagram} alt="instagram"></img>
            </a>
          </li>
          <li>
            <a
              className="bottom-nav__icon--youtube bottom-nav__icon--block"
              href="https://www.youtube.com/"
            >
              <img src={youtube} alt="youtube"></img>
            </a>
          </li>
        </ul>
      </ul>
    </footer>
  );
}

export default Footer;
