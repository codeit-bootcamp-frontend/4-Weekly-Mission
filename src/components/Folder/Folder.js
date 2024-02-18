import { Link } from "react-router-dom";
import "./Folder.css";

export const Folder = ({ folder }) => {
  const { name, owner } = folder;

  return (
    <Link to="/folder" className="Folder">
      <img
        className="Folder-profile"
        src={owner.profileImageSource}
        alt="profile"
      />
      <span className="Folder-owner">{owner.name}</span>
      <h2 className="Folder-folder">{name}</h2>
    </Link>
  );
};
