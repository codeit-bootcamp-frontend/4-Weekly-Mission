import { useEffect, useState } from "react";
import CardSearchInput from "./CardSearchInput/CardSearchInput";
import useGet from "../../hooks/useGet";
import CardFolderList from "./CardFolderList/CardFolderList";
import styles from "./CardListBox.module.scss";
import CardList from "../CardList/CardList";
import { END_POINT } from "../../constants";
import getFormattedLinks from "../../hooks/getFormattedLinks";

export default function CardListBox() {
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);
  const { data: foldersData, isLoading: isFoldersLoading } = useGet(
    END_POINT.folders
  );
  const { data: linksData, isLoading: isLinksLoading } = useGet(
    END_POINT.links
  );

  useEffect(() => {
    if (!isFoldersLoading && !isLinksLoading) {
      setFolders(foldersData.data);

      const strangeData = linksData.data;
      const rightData = getFormattedLinks(strangeData);
      console.log(rightData);
      setLinks(rightData);
    }
  }, [foldersData, isFoldersLoading, linksData, isLinksLoading]);

  return (
    <main className={styles.CardListBox}>
      <CardSearchInput />
      <section className={styles.cardList}>
        <CardFolderList folders={folders} />
        <div>title & 모달 추가 예정</div>
        <CardList links={links} />
      </section>
    </main>
  );
}
