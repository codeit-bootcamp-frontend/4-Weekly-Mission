import profileImg from "../images/social_icon/kakatalk.png";
import "../css/shared/shared.css";

function TopSection(){
  return (
    <section className="top-section">
      <div className="profile-wishList">
        <div className="user-profile-section">
          <img className="user-progile-img" src={profileImg} alt="카카오톡" />
          <p className="user-name" >@코드잇</p>
        </div>
        <div className="wish-list">
          <p className="wish-list-title">⭐즐겨찾기</p>
        </div>
      </div>
    </section>
  );
}

export default TopSection;