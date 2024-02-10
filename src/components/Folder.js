import FolderLinks from "./FolderLinks";
import "./Folder.css";

const Folder = ({ folder }) => {
  const { name, owner, links } = folder;
  return (
    <div className="Folder">
      <div className="Folder__desc">
        <div className="Folder__user">
          <img
            className="Folder__user-img"
            src={owner.profileImageSource}
            alt="폴더 소유자 프로필 사진"
          />
          <span className="Folder__user-name">{owner.name}</span>
        </div>
        <h2 className="Folder__title">{name}</h2>
      </div>
      <FolderLinks links="{links}" />
    </div>
  );
};

export default Folder;
