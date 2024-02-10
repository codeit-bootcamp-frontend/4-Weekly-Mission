import "./UserInformation.css";
import avatarImg from "../../assets/Avatar.png";

function UserInformation() {
  return (
    <section className="UserInformation">
      <img src={avatarImg} alt="avatarImg" />
      <p className="FolderOwner">@폴더 소유자</p>
      <h1 className="FolderName">⭐️ 즐겨찾기</h1>
    </section>
  );
}

export default UserInformation;
