import { ChangeEvent, useEffect, useState } from "react";
import CardSearchInput from "./CardSearchInput/CardSearchInput.tsx";
import useGet from "../../hooks/useGet";
import CardFolderList from "./CardFolderList/CardFolderList.tsx";
import styles from "./CardListBox.module.scss";
import CardList from "../CardList/CardList.tsx";
import { END_POINT } from "../../constants/index.ts";
import getFormattedLinks from "@/hooks/getFormattedLinks";
import LinksEmptyCase from "./LinksEmptyCase/LinksEmptyCase.tsx";
import {
  FormetLinkProps,
  LinkProps,
  UserFolderProps,
} from "@/constants/index.types";

export default function CardListBox() {
  const [folders, setFolders] = useState<UserFolderProps[]>([]);
  const [links, setLinks] = useState<LinkProps[]>([]);
  const [changeLinksFolder, setChangeLinksFolder] = useState(END_POINT.links);
  const [linksTitle, setLinksTitle] = useState(`전체`);

  // 작업중 =====
  const [searchLinks, setSearchLinks] = useState<LinkProps[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const { data: foldersData, isLoading: isFoldersLoading } = useGet<
    UserFolderProps[]
  >(END_POINT.folders);

  const { data: linksData, isLoading: isLinksLoading } =
    useGet<FormetLinkProps[]>(changeLinksFolder);

  useEffect(() => {
    if (!isFoldersLoading && !isLinksLoading) {
      setFolders(foldersData);
      const strangeData = linksData;
      const rightData = getFormattedLinks(strangeData);
      setLinks(rightData);
      setSearchLinks(rightData);
    }
  }, [foldersData, isFoldersLoading, linksData, isLinksLoading]);

  const handleFolderClick = (folder: UserFolderProps) => {
    setChangeLinksFolder(`${END_POINT.links}?folderId=${folder.id}`);
    setLinksTitle(folder.name);
  };

  const handleTotalBtnClick = () => {
    setChangeLinksFolder(END_POINT.links);
    setLinksTitle(`전체`);
  };

  const handleSearchInputCancel = () => {
    setSearchValue("");
    setLinks(searchLinks);
  };

  // 제대로 동작하지 않는것 같습니다
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
  };

  useEffect(() => {
    if (searchValue !== "") {
      const filteredLinks = [...links].filter((link) => {
        return Object.values(link).join("").includes(searchValue);
      });
      setLinks(filteredLinks);
    } else {
      setLinks(searchLinks);
    }
  }, [searchValue]);
  // 여기까지

  return (
    <main className={styles.CardListBox}>
      <CardSearchInput
        value={searchValue}
        handleInputChange={handleInputChange}
        handleSearchInputCancel={handleSearchInputCancel}
      />
      <section className={styles.cardList}>
        <CardFolderList
          folders={folders}
          handleFolderClick={handleFolderClick}
          handleTotalBtnClick={handleTotalBtnClick}
        />
        <div className={styles.titleBox}>
          <h1 className={styles.linksTitle}>{linksTitle}</h1>
          모달 추가 예정
        </div>
        {links && links.length > 0 ? (
          <CardList links={links} />
        ) : (
          <LinksEmptyCase />
        )}
      </section>
    </main>
  );
}
