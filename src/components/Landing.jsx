import "./Landing.css";
import instagramLogo from "../assets/img/svg/instafram-logo.svg";
import youtubeLogo from "../assets/img/svg/youtube-logo.svg";
import twitterLogo from "../assets/img/svg/twitter-logo.svg";
import facebookLogo from "../assets/img/svg/facebook-logo.svg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <header className="landing-header">
        <div>
          <Link className="landing-link" to="/">
            <div className="header-logo"></div>
          </Link>
          <Link
            className="landing-link landing-a landing-login white"
            to="/signin"
          >
            로그인
          </Link>
        </div>
      </header>
      <main>
        <section className="contents-01 gray-ton5">
          <div className="contents-01-text black">
            <p>
              <span className="gradient">세상의 모든 정보</span>를<br />
            </p>
            <span>쉽게 저장하고 관리해 보세요</span>
          </div>
          <Link className="landing-link add-link white" to="/signup">
            링크 추가하기
          </Link>
          <div className="content-01-img-box"></div>
        </section>
        <section className="contents-02 white">
          <div className="contents-common-box">
            <div className="contents-02-text black">
              <div>
                <span className="gradient">원하는&nbsp;링크</span>를 저장하세요
              </div>
              <div className="contents-text-p">
                <div>
                  나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷,
                  기억하고 싶은 모든 것을 한 공간에 저장하세요.
                </div>
              </div>
            </div>
            <div className="contents-common-image img-2"></div>
          </div>
        </section>
        <section className="contents-03 white">
          <div className="contents-common-box flex-direction-reverse">
            <div className="contents-03-text black">
              <div>
                링크를&nbsp;폴더로
                <span className="gradient">관리</span>하세요
              </div>
              <div className="contents-text-p">
                <div>
                  나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
                </div>
              </div>
            </div>
            <div className="contents-common-image img-3"></div>
          </div>
        </section>
        <section className="contents-04 white">
          <div className="contents-common-box">
            <div className="contents-04-text black">
              <div>
                저장한&nbsp;링크를
                <span className="gradient">공유</span>해&nbsp;보세요
              </div>
              <div className="contents-text-p">
                <div>
                  여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구,
                  동료들에게 쉽고 빠르게 링크를 공유해 보세요.
                </div>
              </div>
            </div>
            <div className="contents-common-image img-4"></div>
          </div>
        </section>
        <section className="contents-05 white">
          <div className="contents-common-box flex-direction-reverse">
            <div className="contents-05-text black">
              <div>
                저장한&nbsp;링크를
                <span className="gradient">검색</span>해&nbsp;보세요
              </div>
              <div className="contents-text-p">
                <div>중요한 정보들을 검색으로 쉽게 찾아보세요.</div>
              </div>
            </div>
            <div className="contents-common-image img-5"></div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-box black-bg">
          <div className="footer-main">
            <span className="codeit-font">©codeit - 2023 </span>
            <span>
              <a className="landing-a privacy-font" href="privacy.html">
                Privacy Policy
              </a>
              <span className="padding-30">
                <a className="landing-a privacy-font" href="faq.html">
                  FAQ
                </a>
              </span>
            </span>
            <span className="footer-logo-box">
              <a
                className="landing-a footer-logo-wh footer-logo-padding"
                href="https://www.facebook.com/"
                target="facebook"
              >
                <img src={facebookLogo} alt="facebook-logo" />
              </a>
              <a
                className="landing-a footer-logo-wh footer-logo-padding"
                href="https://twitter.com/"
                target="twitter"
              >
                <img src={twitterLogo} alt="twitter-logo" />
              </a>
              <a
                className="landing-a footer-logo-wh footer-logo-padding"
                href="https://www.youtube.com/"
                target="youtube"
              >
                <img src={youtubeLogo} alt="youtube-logo" />
              </a>
              <a
                className="landing-a footer-logo-wh footer-logo-padding"
                href="https://www.instagram.com/"
                target="instagram"
              >
                <img src={instagramLogo} alt="instafram-logo" />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Landing;
