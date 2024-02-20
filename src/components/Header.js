import styles from "./css/Header.module.css";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = ({ userInfo, fixed }) => {
  const notFixedStyle = {
    position: "static",
    paddingBottom: "0",
  };

  return (
    <header style={fixed === false ? notFixedStyle : null}>
      <Link to="/">
        <img alt="Linkbrary logo" src="/icons/Linkbrary.svg" />
      </Link>
      {userInfo ? (
        <div className={styles.profile_container}>
          <Avatar
            avatarImage={userInfo["image_source"]}
            width="28px"
            height="28px"
          />
          <span className={styles.profile_txt}>{userInfo["email"]}</span>
        </div>
      ) : (
        <Button>로그인</Button>
      )}
    </header>
  );
};

export default Header;
