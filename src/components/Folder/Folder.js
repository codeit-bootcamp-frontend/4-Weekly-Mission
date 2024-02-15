import "./Folder.css";

const Folder = () => {
  return (
    <div className="Folder">
      <img
        className="Folder-profile"
        src="image/thumbnail/Avatar.svg"
        alt="프로필"
      />
      <span className="Folder-name">@코드잇</span>
      <h2 className="Folder-title">⭐️ 즐겨찾기 </h2>
    </div>
  );
};

export default Folder;
