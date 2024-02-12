import "../../style/landing.css";
import avatarImg from "../../assets/avatar.svg";

const AVATAR_IMAGE = avatarImg;

export function HeroSeciton({ userName }) {
  return (
    <div className="login-hero-section">
      <div className="login-hero-container">
        <img src={AVATAR_IMAGE} alt="avatarImg" />
        <p>@{userName}</p>
        <h1>⭐️ 즐겨찾기</h1>
      </div>
    </div>
  );
}

export default HeroSeciton;
