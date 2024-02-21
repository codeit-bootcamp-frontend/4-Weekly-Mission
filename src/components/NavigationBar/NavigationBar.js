import { Link } from "react-router-dom";

import { useGetUser } from "../../hooks/useGetUser";

import styles from "./NavigationBar.module.css";
import LinkbraryLogo from "../../asset/images/logo.svg";

import Button from "../Button/Button";
import Profile from "../Profile/Profile";

const NavigationBar = ({ isSticky }) => {
  const { data } = useGetUser();
  const { email, image_source } = data?.data[0] ?? {};
  const profile = data ? { email, image_source } : null;

  const sticky = styles.sticky;

  return (
    <nav className={`${styles.NavigationBar} ${isSticky ? sticky : ""}`}>
      <div className={styles.items}>
        <h1>
          <Link to="/">
            <img className={styles.logo} src={LinkbraryLogo} alt="Linkbrary" />
          </Link>
        </h1>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <Link to="/">
            <Button>로그인</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
