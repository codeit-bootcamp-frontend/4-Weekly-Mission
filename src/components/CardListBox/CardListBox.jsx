import { useEffect, useState } from "react";
import CardSearchInput from "./CardSearchInput/CardSearchInput";
import useGet from "../../hooks/useGet";
import CardFolderList from "./CardFolderList/CardFolderList";
import styles from "./CardListBox.module.scss";
import CardList from "../CardList/CardList";
import { END_POINT } from "../../constants";
import getFormattedLinks from "../../hooks/getFormattedLinks";
import LinksEmptyCase from "./LinksEmptyCase/LinksEmptyCase";

export default function CardListBox() {
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);
  const [changeLinksFolder, setChangeLinksFolder] = useState(END_POINT.links);
  const [linksTitle, setLinksTitle] = useState(`전체`);
  const { data: foldersData, isLoading: isFoldersLoading } = useGet(
    END_POINT.folders
  );
  const { data: linksData, isLoading: isLinksLoading } =
    useGet(changeLinksFolder);
  // links?folderId={해당 폴더 ID}”

  useEffect(() => {
    if (!isFoldersLoading && !isLinksLoading) {
      setFolders(foldersData.data);

      const strangeData = linksData.data;
      const rightData = getFormattedLinks(strangeData);
      setLinks(rightData);
    }
  }, [foldersData, isFoldersLoading, linksData, isLinksLoading]);

  const handleFolderClick = (folder) => {
    setChangeLinksFolder(`${END_POINT.links}?folderId=${folder.id}`);
    setLinksTitle(folder.name);
  };

  const handleTotalBtnClick = () => {
    setChangeLinksFolder(END_POINT.links);
    setLinksTitle(`전체`);
  };

  return (
    <main className={styles.CardListBox}>
      <CardSearchInput />

      {links.length < 1 ? (
        <LinksEmptyCase />
      ) : (
        <section className={styles.cardList}>
          <CardFolderList
            folders={folders}
            onClick={handleFolderClick}
            handleTotalBtnClick={handleTotalBtnClick}
          />
          <div className={styles.titleBox}>
            <h1 className={styles.linksTitle}>{linksTitle}</h1>
            모달 추가 예정
          </div>
          <CardList links={links} />
        </section>
      )}
    </main>
  );
}
