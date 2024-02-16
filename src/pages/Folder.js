import FolderNav from "../components/header/FolderNav";
import AddLink from "../components/header/AddLink";
import Footer from "../components/footer/Footer";
import styles from "./Folder.module.css";
import LinkSearchInput from "../components/main/LinkSearchInput";
import LinkFilterBox from "../components/main/LinkFilterBox";
function Folder() {
  const userDataUrl = "https://bootcamp-api.codeit.kr/api/users/1";
  return (
    <>
      <FolderNav userDataUrl={userDataUrl} />
      <AddLink />
      <div className={styles.main_wrapper}>
        <LinkSearchInput />
        <div className={styles.folder_page_content_wrapper}>
          <div className={styles.content_filter_wrapper}>
            <LinkFilterBox />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Folder;
