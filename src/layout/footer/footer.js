import React from "react";
import "./footer.css";
import FaceBookLogo from "../../assets/image/facebook.svg";
import InstarGramLogo from "../../assets/image/instagram.svg";
import TwitterLogo from "../../assets/image/twitter.svg";
import YoutubeLogo from "../../assets/image/youtube.svg";

export const Footer = () => {
  const logoList = [
    { logo: FaceBookLogo, link: "", id: "FaceBookLogo" },
    { logo: InstarGramLogo, link: "", id: "InstarGramLogo" },
    { logo: TwitterLogo, link: "", id: "TwitterLogo" },
    { logo: YoutubeLogo, link: "", id: "YoutubeLogo" },
  ];
  return (
    <div className="footerContainer">
      <div className="footerItem">©codeit - 2023</div>
      <div className="footerItem">
        <a>Privacy Policy</a>
        <a>FAQ</a>
      </div>
      <div className="footerItem">
        {logoList.map((v) => (
          <div key={v.id}>
            <img src={v.logo} alt={v.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
