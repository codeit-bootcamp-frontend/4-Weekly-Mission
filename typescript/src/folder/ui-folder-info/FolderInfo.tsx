import styles from "./FolderInfo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface props {
  profileImage: string | undefined;
  ownerName: string;
  folderName: string;
}

export const FolderInfo = ({ profileImage, ownerName, folderName }: props) => {
  return (
    <div className={cx("container")}>
      <img
        className={cx("profile")}
        src={profileImage}
        alt="폴더 소유자 프로필 이미지"
      />
      <span className={cx("owner")}>{ownerName}</span>
      <h2 className={cx("folder")}>{folderName}</h2>
    </div>
  );
};
