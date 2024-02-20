import "./Footer.css";
import Facebook from "../assets/facebook_icon.svg";
import Insta from "../assets/instagram_icon.svg";
import Twitter from "../assets/twitter_icon.svg";
import Youtube from "../assets/youtube_icon.svg";

export default function Footer() {
  return (
    <footer className="footerFrame">
      <div className="footerContent">
        <span>©codeit - 2023</span>
        <div>
          <span>Privacy Policy</span>
          &nbsp;&nbsp;&nbsp;
          <span>FAQ</span>
        </div>
        <div>
          <img src={Facebook} alt="페이스북 아이콘" />
          &nbsp;&nbsp;
          <img src={Twitter} alt="트위터 아이콘" />
          &nbsp;&nbsp;
          <img src={Youtube} alt="유튜브 아이콘" />
          &nbsp;&nbsp;
          <img src={Insta} alt="인스타 아이콘" />
        </div>
      </div>
    </footer>
  );
}
