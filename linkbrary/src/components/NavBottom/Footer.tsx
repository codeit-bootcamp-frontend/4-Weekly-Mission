import "../../styles/Footer.css";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContents>
      <div className="footer-group">
        <span className="copyright">©codeit - 2023</span>
        <ul className="link-list">
          <li>
            <a href="/privacy" className="link-item">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/faq" className="link-item">
              FAQ
            </a>
          </li>
        </ul>
        <ul className="sns-list">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="sns-item"
              rel="noreferrer"
            >
              <img src="/assets/facebook.svg" alt="페이스북으로 이동" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="sns-item"
              rel="noreferrer"
            >
              <img src="/assets/twitter.svg" alt="트위터로 이동" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              className="sns-item"
              rel="noreferrer"
            >
              <img src="/assets/youtube.svg" alt="유튜브로 이동" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="sns-item"
              rel="noreferrer"
            >
              <img src="/assets/instagram.svg" alt="인스타그램으로 이동" />
            </a>
          </li>
        </ul>
      </div>
    </FooterContents>
  );
}

const FooterContents = styled.div`
  position: static;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 6rem;
  background-color: var(--black);
`;

export default Footer;
