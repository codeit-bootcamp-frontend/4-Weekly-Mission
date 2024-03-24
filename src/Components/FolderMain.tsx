import { useState } from "react";
import { FolderCard } from "./FolderCard";
import { FolderMenu } from "./FolderMenu";
import { HandleFolder } from "./HandleFolder";
import { useFolder } from "../useHooks/useFolder";
import { useLinks } from "../useHooks/useLinks";
import searchIcon from "../images/search.svg";
import closeIcon from "../images/close.svg";

export function FolderMain() {
  const { currentMenu, setCurrentMenu } = useFolder();
  const { handleLinks, links } = useLinks();
  const [folderCurrentId, setFolderCurrentId] = useState<number>();
  const [searchInput, setSearchInput] = useState<string>("");

  const handleMenuChange = (newMenu: string, id?: number) => {
    setCurrentMenu(newMenu);
    handleLinks(id);
    setFolderCurrentId(id);
  };

  const handleInputValue = () => {
    setSearchInput("");
  };

  const handleSearchData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const lowerQuery = searchInput.toLowerCase();
  const filteredLinks = links.filter(
    (link) =>
      link.url?.toLowerCase().includes(lowerQuery) ||
      link.title?.toLowerCase().includes(lowerQuery) ||
      link.description?.toLowerCase().includes(lowerQuery)
  );

  const linkArray = filteredLinks ? filteredLinks : links;

  return (
    <>
      <main className="mainArea">
        <form className="searchArea">
          <input
            className="searchInput"
            placeholder="링크를 검색해 보세요."
            value={searchInput}
            onChange={handleSearchData}
          ></input>
          <img src={searchIcon} alt="search" className="searchImg"></img>
          <img
            src={closeIcon}
            alt="close"
            className="closeImg"
            onClick={handleInputValue}
          ></img>
        </form>

        <FolderMenu onMenuChange={handleMenuChange} />

        <div className="titleBar">
          <div className="title">{currentMenu}</div>
          {currentMenu !== "전체" && folderCurrentId && (
            <HandleFolder id={folderCurrentId} />
          )}
        </div>

        {linkArray && linkArray.length ? (
          <div className="cardGrid">
            {linkArray.map((card) => (
              <FolderCard key={card.id} cardInfo={card}></FolderCard>
            ))}
          </div>
        ) : (
          <div className="noLink">저장된 링크가 없습니다.</div>
        )}
      </main>
    </>
  );
}
