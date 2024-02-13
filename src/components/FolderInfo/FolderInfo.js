import { Fragment } from "react";
import "./FolderInfo.css";

const FolderInfo = ({ profile, folderName }) => {
  const { name, profileImageSource } = profile || {};
  return (
    <Fragment>
      <div className="folderInfo">
        <img
          className="folderInfo-profile"
          src={profileImageSource}
          alt="폴더 소유자의 프로필 이미지"
        />
        <span className="folderInfo-owenrName">{name}</span>
        <span className="folderInfo-folderName">{folderName}</span>
      </div>
    </Fragment>
  );
};

export default FolderInfo;
