import "./mainPage.css";
import { AddLink } from "../components/folder/addLink";
import { FolderSearchBar } from "../components/folder/folderSearchBar";
import { useState } from "react";
import { EmptyList } from "../components/notFound/emptyList";
import { useFavoriteList } from "../hooks/useFavoriteList";
import { FavoriteList } from "../components/folder/favoriteList";

export const FolderPage = () => {
  const [link, setLink] = useState([]);
  const { favoriteList } = useFavoriteList();
  console.log("folder", favoriteList);
  return (
    <div className="mainPageContainer">
      <AddLink />
      <div className="mainPageWrapper">
        <FolderSearchBar />
        {!favoriteList && favoriteList?.length === 0 ? (
          <EmptyList text={"저장된 링크가 없습니다."} />
        ) : (
          <FavoriteList data={favoriteList} />
        )}
      </div>
    </div>
  );
};
