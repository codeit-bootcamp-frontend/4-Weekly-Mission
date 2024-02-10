import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import styles from "./Folder.module.css";
import AvatarImg from "assets/Avatar.png";
import SearchIcon from "assets/Search.png";
import { useState } from "react";

export default function Folder() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

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

        <div className={styles["wrapper"]}>
          <div className={styles["searchBox"]}>
            <img src={SearchIcon} alt="searchIcon" />
            <input
              type="text"
              name="search"
              value={search}
              placeholder="링크를 검색해 보세요."
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
