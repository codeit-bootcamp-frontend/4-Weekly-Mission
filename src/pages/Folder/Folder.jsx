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
          <div className="profile">
            <img className="profile-cover" src={AvatarImg} alt="profile" />
            <div style={{ fontSize: "1.4rem", marginTop: "20px" }}>@코드잇</div>
            <h2
              style={{
                fontSize: "2.8rem",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              ⭐즐겨찾기
            </h2>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
