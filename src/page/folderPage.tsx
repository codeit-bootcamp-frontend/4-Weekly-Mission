import "./mainPage.css";
import { AddLink } from "../components/folder/addLink";
import { FolderSearchBar } from "../components/folder/folderSearchBar";
import { useState, useEffect } from "react";
import { EmptyList } from "../components/notFound/emptyList";
import { FavoriteList } from "../components/folder/favoriteList";
import { useFolderList } from "../hooks/useFolderList";
import { CardContianer, FavoriteCard } from "../components/card/folderCard";
import { TitleBar } from "../components/titlebar/titlebar";
import { favoriteListDataType } from "../types/folderListTypes";
import { folderListDataType } from "../types/folderListTypes";
import { SearchResult } from "../components/folder/SearchResult";
/**
 * 1. FavoriteList에서 폴더버튼을 누르면 ID값을 받아서 FolderPage의 id값을 변경한다.
 * 2. 값이 변경되면 "api/users/1/links?folderId=id값"으로 API요청을 보낸다.
 * 3. 요청이 정상적으로 전송되고 응답을 받으면 cardList에 리스트를 담아 랜더링한다.
 * @returns
 */
export const FolderPage = () => {
  const [id, setId] = useState<number | null>(null);
  const [selectItem, setSelectItem] = useState<null | favoriteListDataType>(
    null
  );
  const [filteredResults, setFilteredResults] = useState<folderListDataType[]>(
    []
  );
  const [searchInput, setSearchInput] = useState<string>("");
  const { list } = useFolderList(id);

  const handleChangeFolderId = (target: favoriteListDataType | null) => {
    setId(target?.id ?? null);
    setSelectItem(target ? { ...target } : null);
  };

  useEffect(() => {
    const searchItems = (value: string) => {
      const data = list ?? [];
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setFilteredResults(filteredData);
    };

    list && searchItems(searchInput);
  }, [list, searchInput]);

  return (
    <div className="mainPageContainer">
      <AddLink />
      <div className="mainPageWrapper">
        <FolderSearchBar handleSearchInput={setSearchInput} />
        <SearchResult searchInput={searchInput} />
        <FavoriteList handleChange={handleChangeFolderId} id={id} />
        <TitleBar selectItem={selectItem} />
        {filteredResults?.length === 0 ? (
          <EmptyList text={"저장된 링크가 없습니다."} />
        ) : null}

        <CardContianer>
          {filteredResults?.map((data) => (
            <FavoriteCard key={id} data={data} selectId={id} />
          ))}
        </CardContianer>
      </div>
    </div>
  );
};
