import "./FolderNameSection.css";
import avatar from "../../images/avatar.png";

const FolderNameSection = () => {
  return (
    <div className="FolderNameSection">
      <img className="Avatar" src={avatar} alt="프로필" />
      <span className="FolderNameUser">@코드잇</span>
      <h2 className="FolderName">즐겨찾기</h2>
    </div>
  );
};

export default FolderNameSection;
