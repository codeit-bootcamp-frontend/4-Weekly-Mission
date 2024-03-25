import styles from "./Profile.module.scss";
import classNames from "classnames/bind";

interface ProfileData {
  profileImageSource: string;
  email: string;
}

interface ProfileProps {
  profile: ProfileData;
}

const cx = classNames.bind(styles);

export const Profile = ({ profile }: ProfileProps) => {
  return (
    <div className={cx("container")}>
      <img
        className={cx("image")}
        src={profile.profileImageSource}
        alt="프로필 이미지"
      />
      <span className={cx("email")}>{profile.email}</span>
    </div>
  );
};
