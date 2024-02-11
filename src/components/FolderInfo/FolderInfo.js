import { Fragment } from "react";
import "./FolderInfo.css";

const FolderInfo = ({ profile, folderName }) => {
  return (
    <Fragment>
      <div className="folderInfo">
        <img
          className="folderInfo-profile"
          src={profile.profileImageSource}
          alt="폴더 소유자의 프로필 이미지"
        />
        <span className="folderInfo-owenrName">{profile.name}</span>
        <span className="folderInfo-folderName">{folderName}</span>
      </div>
    </Fragment>
  );
};

export default FolderInfo;
