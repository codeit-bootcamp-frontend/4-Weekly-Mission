import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./css/Folder.module.css";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import { getFolders, getUser } from "../utils/api";
import TagBox from "../components/TagBox";

const Folder = () => {
  const [user, setUser] = useState({
    email: null,
    profileImageSource: null,
  });
  const [folders, setFolders] = useState([]);
  const [currentFolder, setCurrentFolder] = useState({ id: null, name: null });

  const loadUser = async () => {
    const { email, profileImageSource } = await getUser();
    if (!email) return;
    setUser({ email, profileImageSource });
  };

  const loadFolders = async () => {
    const folderInfo = await getFolders();
    setFolders(folderInfo["data"]);
  };

  const handleAddFolder = () => {
    alert("Add Folder");
  };

  const handleClickTag = (e, folder) => {
    setCurrentFolder({ id: folder.id, name: folder.name });
  };
  useEffect(() => {
    loadUser();
    loadFolders();
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
              {folders.map((folder) => {
                return (
                  <TagBox
                    key={folder.id}
                    id={folder.id}
                    isSelected={currentFolder.id === folder.id}
                    onClick={(e) => handleClickTag(e, folder)}
                  >
                    {folder["name"]}
                  </TagBox>
                );
              })}
            </div>
            <span className={styles.add_folder_btn} onClick={handleAddFolder}>
              폴더 추가 +
            </span>
          </div>
          <div className={styles.tag_title_container}>
            <span className="font-24px font-regular">{currentFolder.name}</span>
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
            {/*{folderInfo.folderLinks.map((link) => {*/}
            {/*  const { imageSource, createdAt, description } = link;*/}
            {/*  const createdDate = new Date(createdAt);*/}
            {/*  const currentDate = new Date();*/}

            {/*  const createdDateString = formatDate(createdDate);*/}

            {/*  const timeDifference = getTimeDifference(*/}
            {/*    createdDate,*/}
            {/*    currentDate,*/}
            {/*  );*/}
            {/*  return (*/}
            {/*    <Link*/}
            {/*      to={`/link/${link.id}`}*/}
            {/*      key={link.id}*/}
            {/*      target="_blank"*/}
            {/*      rel="noopener noreferrer"*/}
            {/*    >*/}
            {/*      <Card*/}
            {/*        cardImage={imageSource}*/}
            {/*        cardTime={{ createdDateString, timeDifference }}*/}
            {/*        cardDescription={description}*/}
            {/*      />*/}
            {/*    </Link>*/}
            {/*  );*/}
            {/*})}*/}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Folder;
