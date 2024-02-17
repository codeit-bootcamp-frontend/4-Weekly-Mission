import Header from "../components/Header";
import Footer from "../components/Footer";
import Avatar from "../components/Avatar";
import styles from "./css/Folder.module.css";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { getFolder, getUser } from "../lib/api";
import { Link } from "react-router-dom";
import { getTimeDifference } from "../lib/utils";

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

  useEffect(() => {
    loadUser();
    loadFolder();
  }, []);

  return (
    <>
      <Header userInfo={user} />
      <div className={styles.folder_info}>
        <div className={styles.folder_owner}>
          <Avatar
            avatarImage={folderInfo.folderOwnerImage}
            width="60px"
            height="60px"
          ></Avatar>
          <div className="font-thin font-16px">@{folderInfo.folderOwner}</div>
        </div>
        <div className="font-regular font-40px">{folderInfo.folderName}</div>
      </div>
      <main>
        <SearchBar />
        <div className={styles.card_list}>
          {folderInfo.folderLinks.map((link) => {
            const { imageSource, createdAt, description } = link;
            const createDate = new Date(createdAt);
            const currentDate = new Date();

            const createdDate = `${createDate.getFullYear()}. ${
              createDate.getMonth() + 1
            }. ${createDate.getDate()}`;

            const timeDifference = getTimeDifference(createDate, currentDate);
            return (
              <Link
                to={`/link/${link.id}`}
                key={link.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  cardImage={imageSource}
                  cardTime={{ createdDate, timeDifference }}
                  cardDescription={description}
                />
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Folder;
