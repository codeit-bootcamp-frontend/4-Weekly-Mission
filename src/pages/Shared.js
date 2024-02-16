import Nav from "../components/header/Nav";
import Profile from "../components/header/Profile";
import LinkSearchInput from "../components/main/LinkSearchInput";
import FolderList from "../components/main/FolderList";
import Footer from "../components/footer/Footer";
import styles from "./Shared.module.css";
function Shared() {
  const userDataUrl = "https://bootcamp-api.codeit.kr/api/sample/user";

  return (
    <>
      <Nav userDataUrl={userDataUrl} />
      <Profile />
      <div className={styles.main_wrapper}>
        <LinkSearchInput />
        <FolderList />
      </div>
      <Footer />
    </>
  );
}

export default Shared;
