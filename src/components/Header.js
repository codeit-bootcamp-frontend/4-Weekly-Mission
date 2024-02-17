import styles from "./css/Header.module.css";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

const Header = ({ userInfo }) => {
  return (
    <header>
      <Link to="/">
        <img alt="Linkbrary logo" src="/icons/Linkbrary.svg" />
      </Link>
      {userInfo ? (
        <div className={styles.profile_container}>
          <Avatar
            avatarImage={userInfo["profileImageSource"]}
            width="28px"
            height="28px"
          />
          <span className={styles.profile_txt}>{userInfo["email"]}</span>
        </div>
      ) : (
        <button className={styles.btn_gradient}>로그인</button>
      )}
    </header>
  );
};

export default Header;
