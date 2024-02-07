import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import styles from "./Folder.module.css";
import AvatarImg from "assets/Avatar.png";

export default function Folder() {
  return (
    <>
      <Header />
      <main>
        <div className={styles["main-headings"]}>
          <div className={styles["profile"]}>
            <img
              className={styles["profile-cover"]}
              src={AvatarImg}
              alt="profile"
            />
            <div className={styles["profile-author"]}>@코드잇</div>
            <h2 className={styles["profile-title"]}>⭐즐겨찾기</h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
