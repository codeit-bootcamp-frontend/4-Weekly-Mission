import style from "../../styles/CommonFooter.module.css";
import facebook from "../../image/icons/facebook-icon-fill.svg";
import twitter from "../../image/icons/twitter-icon-fill.svg";
import youtube from "../../image/icons/youtube-icon-fill.svg";
import instagram from "../../image/icons/instagram-icon-fill.svg";

// SharedPage와 FolderPage의 footer는 완전히 동일해서 공통 컴포넌트인 CommonFooter로 관리
function CommonFooter() {
  return (
    <div className={style.footer_container}>
      <div className={style.footer_info}>
        <span>©codeit - 2023</span>
        <div className={style.privacy_and_faq}>
          <span>Privacy Policy</span>
          <span>FAQ</span>
        </div>
        <div className={style.footer_icons}>
          <img src={facebook} alt="fackbook icon" />
          <img src={twitter} alt="twitter icon" />
          <img src={youtube} alt="youtube icon" />
          <img src={instagram} alt="instagram icon" />
        </div>
      </div>
    </div>
  );
}

export default CommonFooter;
