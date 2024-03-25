import { ChangeEvent, useEffect, useState } from "react";
import CardSearchInput from "./CardSearchInput/CardSearchInput.tsx";
import useGet from "../../hooks/useGet";
import CardFolderList from "./CardFolderList/CardFolderList.tsx";
import styles from "./CardListBox.module.scss";
import CardList from "../CardList/CardList.tsx";
import { END_POINT } from "../../constants/index.ts";
import getFormattedLinks from "@/hooks/getFormattedLinks";
import LinksEmptyCase from "./LinksEmptyCase/LinksEmptyCase.tsx";
import { FormetLink, ObjectLink, ObjectFolder } from "@/constants/index.types";

export default function CardListBox() {
  // 북마크 Folders 상태
  const [folders, setFolders] = useState<ObjectFolder[]>([]);
  // 렌더링되는 Card - Links 상태
  const [links, setLinks] = useState<ObjectLink[]>([]);
  // 북마크 Folder의 id로 END_POINT.links + query 변경
  const [changeLinksFolder, setChangeLinksFolder] = useState(END_POINT.links);
  // select한 북마크 Folder의 이름으로 title 변경
  const [linksTitle, setLinksTitle] = useState(`전체`);
  // 전체 데이터 배열 저장 = 검색용
  const [searchLinks, setSearchLinks] = useState<ObjectLink[]>([]);
  // inputValue 상태
  const [searchValue, setSearchValue] = useState("");
  // useGet Hook으로 dataFetching
  const { data: foldersData, isLoading: isFoldersLoading } = useGet<
    ObjectFolder[]
  >(END_POINT.folders);
  // 북마크 Folder의 id값으로 해당 id의 dataFetching
  const { data: linksData, isLoading: isLinksLoading } =
    useGet<FormetLink[]>(changeLinksFolder);

  useEffect(() => {
    if (!isFoldersLoading && !isLinksLoading) {
      // 북마크 Folders 상태 변경
      setFolders(foldersData);
      // ObjectValues의 이름값 formating
      const strangeData = linksData;
      const rightData = getFormattedLinks(strangeData);
      // links 상태 변경
      setLinks(rightData);
      // 검색용 links 상태 변경
      setSearchLinks(rightData);
    }
  }, [foldersData, isFoldersLoading, linksData, isLinksLoading]);
  //
  const handleFolderClick = (folder: ObjectFolder) => {
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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (searchValue !== "") {
      const filteredLinks = searchLinks.filter((link) => {
        return Object.values(link)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setLinks(filteredLinks);
    } else {
      setLinks(searchLinks);
    }
  }, [searchValue]);

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
          onFolderClick={handleFolderClick}
          onTotalButtonClick={handleTotalBtnClick}
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
