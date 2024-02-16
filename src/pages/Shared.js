import Header from "../components/header/Header";
import LinkSearchInput from "../components/main/LinkSearchInput";
import FolderList from "../components/main/FolderList";
import Footer from "../components/footer/Footer";
import styles from "./Shared.module.css";
function Shared() {
  return (
    <>
      <Header />
      <div className={styles.main_wrapper}>
        <LinkSearchInput />
        <FolderList />
      </div>
      <Footer />
    </>
  );
}

export default Shared;
