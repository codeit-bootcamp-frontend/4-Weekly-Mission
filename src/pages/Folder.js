import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./css/Folder.module.css";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { getFolder, getUser } from "../utils/api";
import { Link } from "react-router-dom";
import { formatDate, getTimeDifference } from "../utils/DateUtils";

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
      <div className="component-default-margin">
        <div className={styles.folder_header}>
          <SearchBar type="addLink" />
        </div>
        <main>
          <SearchBar type="findLink" />
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
