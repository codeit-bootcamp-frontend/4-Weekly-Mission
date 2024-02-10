import instagramLogo from "../../assets/img/svg/instafram-logo.svg";
import youtubeLogo from "../../assets/img/svg/youtube-logo.svg";
import twitterLogo from "../../assets/img/svg/twitter-logo.svg";
import facebookLogo from "../../assets/img/svg/facebook-logo.svg";
import { Link } from "react-router-dom";
import "./Shared.css";
import { getSharedFolderSample, getSharedUserSample } from "../../api";
import { useEffect, useState } from "react";
import SharedMain from "./SharedMain";

function Shared() {
  const [userProfile, setUserProfile] = useState(null);
  const [ownerProfile, setOwnerProfile] = useState(null);

  const handleSharedUserProfile = async () => {
    let result;

    result = await getSharedUserSample();
    if (!result) return;

    const { email, profileImageSource } = result;
    setUserProfile({ email, profileImageSource });
  };

  const handleSharedUserFolder = async () => {
    const result = await getSharedFolderSample();
    if (!result) return;

    const data = result.folder;
    setOwnerProfile(data);
  };

  useEffect(() => {
    handleSharedUserProfile();
    handleSharedUserFolder();
  }, []);

  return (
    <div>
      <header className="shared-header">
        <div>
          <Link className="shared-link" to="/landing">
            <div className="header-logo"></div>
          </Link>
          {!userProfile ? (
            <Link
              className="shared-link shared-a shared-login white"
              to="/signin"
            >
              로그인
            </Link>
          ) : (
            <div className="shared-user-container">
              <img
                className="shared-user-image-sizing"
                src={userProfile.profileImageSource}
                alt="userProfile"
              />
              <span>{userProfile.email}</span>
            </div>
          )}
        </div>
      </header>
      {ownerProfile && <SharedMain ownerProfile={ownerProfile} />}
      <footer>
        <div className="footer-box black-bg">
          <div className="footer-main">
            <span className="codeit-font">©codeit - 2023 </span>
            <span>
              <a className="shared-a privacy-font" href="privacy.html">
                Privacy Policy
              </a>
              <span className="padding-30">
                <a className="shared-a privacy-font" href="faq.html">
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
    </div>
  );
}

export default Shared;
