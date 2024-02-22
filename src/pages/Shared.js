import SharedNav from "../components/header/SharedNav";
import Profile from "../components/header/Profile";
import LinkSearchInput from "../components/main/LinkSearchInput";
import SharePageFolderList from "../components/main/SharePageFolderList";
import Footer from "../components/footer/Footer";
import styles from "./Shared.module.css";
function Shared() {
  const userDataUrl = "https://bootcamp-api.codeit.kr/api/sample/user";

  return (
    <>
      <SharedNav userDataUrl={userDataUrl} />
      <Profile />
      <div className={styles.main_wrapper}>
        <LinkSearchInput />
        <SharePageFolderList />
      </div>
      <Footer />
    </>
  );
}

export default Shared;
