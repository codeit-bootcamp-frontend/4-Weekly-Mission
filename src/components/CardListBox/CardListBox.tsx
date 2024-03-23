import { useEffect, useState } from "react";
import CardSearchInput from "./CardSearchInput/CardSearchInput.tsx";
import useGet from "../../hooks/useGet";
import CardFolderList from "./CardFolderList/CardFolderList.tsx";
import styles from "./CardListBox.module.scss";
import CardList from "../CardList/CardList.tsx";
import { END_POINT } from "../../constants/index.ts";
import getFormattedLinks from "@/hooks/getFormattedLinks";
import LinksEmptyCase from "./LinksEmptyCase/LinksEmptyCase.tsx";
import { LinkProps, UserFolderProps } from "@/constants/index.types";

export default function CardListBox() {
  const [folders, setFolders] = useState<UserFolderProps | undefined>();
  const [links, setLinks] = useState<LinkProps[]>([]);
  const [changeLinksFolder, setChangeLinksFolder] = useState(END_POINT.links);
  const [linksTitle, setLinksTitle] = useState(`전체`);
  const { data: foldersData, isLoading: isFoldersLoading } =
    useGet<UserFolderProps>(END_POINT.folders);
  const { data: linksData, isLoading: isLinksLoading } =
    useGet<LinkProps[]>(changeLinksFolder);

  useEffect(() => {
    if (!isFoldersLoading && !isLinksLoading) {
      setFolders(foldersData);
      const strangeData = linksData;
      const rightData = getFormattedLinks(strangeData);
      setLinks(rightData);
    }
  }, [foldersData, isFoldersLoading, linksData, isLinksLoading]);

  const handleFolderClick = (folder: UserFolderProps) => {
    setChangeLinksFolder(`${END_POINT.links}?folderId=${folder.id}`);
    setLinksTitle(folder.name);
    console.log(folder);
  };

  const handleTotalBtnClick = () => {
    setChangeLinksFolder(END_POINT.links);
    setLinksTitle(`전체`);
  };

  return (
    <main className={styles.CardListBox}>
      <CardSearchInput />
      {links ? (
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
      ) : (
        <LinksEmptyCase />
      )}
    </main>
  );
}
