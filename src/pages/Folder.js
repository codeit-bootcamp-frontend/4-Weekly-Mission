import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./css/Folder.module.css";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { getFolder, getUser } from "../utils/api";
import { Link } from "react-router-dom";
import { formatDate, getTimeDifference } from "../utils/DateUtils";
import TagBox from "../components/TagBox";

const Folder = () => {
  const [user, setUser] = useState({
    email: null,
    profileImageSource: null,
  });
  const [folderInfo, setFolderInfo] = useState({
    folderName: null,
    folderOwner: null,
    folderOwnerImage: null,
    folderLinks: [],
  });

  const loadUser = async () => {
    const { email, profileImageSource } = await getUser();
    if (!email) return;
    setUser({ email, profileImageSource });
  };

  const loadFolder = async () => {
    const folderInfo = await getFolder();
    setFolderInfo({
      folderName: folderInfo["folder"]["name"],
      folderOwner: folderInfo["folder"]["owner"]["name"],
      folderOwnerImage: folderInfo["folder"]["owner"]["profileImageSource"],
      folderLinks: folderInfo["folder"]["links"],
    });
  };

  const handleAddFolder = () => {
    alert("Add Folder");
  };

  useEffect(() => {
    loadUser();
    loadFolder();
  }, []);

  return (
    <>
      <Header userInfo={user} fixed={false} />
      <div>
        <div className={styles.folder_header}>
          <SearchBar type="addLink" />
        </div>
        <main>
          <SearchBar type="findLink" />
          <div className={styles.tag_container}>
            <div className={styles.tag_list}>
              <TagBox isSelected={true}>전체</TagBox>
              <TagBox>코딩 팁</TagBox>
              <TagBox>코딩 팁</TagBox> <TagBox>코딩 팁</TagBox>{" "}
              <TagBox>코딩 팁</TagBox> <TagBox>코딩 팁</TagBox>
            </div>
            <span className={styles.add_folder_btn} onClick={handleAddFolder}>
              폴더 추가 +
            </span>
          </div>
          <div className={styles.tag_title_container}>
            <span className="font-24px font-regular">유용한 글</span>
            <div className={styles.action_icons_list}>
              <div className={styles.action_icon}>
                <img src="/icons/share_icon.svg" alt="share icon" />
                공유
              </div>
              <div className={styles.action_icon}>
                <img src="/icons/pen_icon.svg" alt="pen icon" />
                이름 변경
              </div>
              <div className={styles.action_icon}>
                <img src="/icons/delete_icon.svg" alt="delete icon" />
                삭제
              </div>
            </div>
          </div>

          <div className={styles.card_list}>
            {folderInfo.folderLinks.map((link) => {
              const { imageSource, createdAt, description } = link;
              const createdDate = new Date(createdAt);
              const currentDate = new Date();

              const createdDateString = formatDate(createdDate);

              const timeDifference = getTimeDifference(
                createdDate,
                currentDate,
              );
              return (
                <Link
                  to={`/link/${link.id}`}
                  key={link.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Card
                    cardImage={imageSource}
                    cardTime={{ createdDateString, timeDifference }}
                    cardDescription={description}
                  />
                </Link>
              );
            })}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Folder;
