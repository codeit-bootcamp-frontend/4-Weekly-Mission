import FolderOptionMenu from "../FolderOptionMenu/FolderOptionMenu";
import "./FolderOption.css";

const FolderOption = ({ folderName }) => {
  return (
    <div className="folderOption">
      <div className="folderOption-folderName">{folderName}</div>
      {folderName === "전체" ? <></> : <FolderOptionMenu />}
    </div>
  );
};

export default FolderOption;
