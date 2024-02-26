import "./mainPage.css";
import { AddLink } from "../components/folder/addLink";
import { FolderSearchBar } from "../components/folder/folderSearchBar";
import { useState } from "react";
import { EmptyList } from "../components/notFound/emptyList";
import { FavoriteList } from "../components/folder/favoriteList";
import { useFolderList } from "../hooks/useFolderList";
import {
  FolderCard,
  CardContianer,
  FavoriteCard,
} from "../components/card/folderCard";
import { TitleBar } from "../components/titlebar/titlebar";
/**
 * 1. FavoriteList에서 폴더버튼을 누르면 ID값을 받아서 FolderPage의 id값을 변경한다.
 * 2. 값이 변경되면 "api/users/1/links?folderId=id값"으로 API요청을 보낸다.
 * 3. 요청이 정상적으로 전송되고 응답을 받으면 cardList에 리스트를 담아 랜더링한다.
 * @returns
 */
export const FolderPage = () => {
  const [link, setLink] = useState([]);

  const [cardList, setCardList] = useState([]);
  const [id, setId] = useState(null);
  const [selectItem, setSelectItem] = useState(null) 
  const { list } = useFolderList(id);
  const handleChangeFolderId = (target) => {
    setId(target?.id);
    setSelectItem({...target})
  };
  console.log("list > ", selectItem);

  return (
    <div className="mainPageContainer">
      <AddLink />
      <div className="mainPageWrapper">
        <FolderSearchBar />
        <FavoriteList handleChange={handleChangeFolderId} id={id} />
        <TitleBar selectItem={selectItem}/>
        {list?.length === 0 ? (
          <EmptyList text={"저장된 링크가 없습니다."} />
        ) : null}
       
        <CardContianer>
          {list?.map((data) => (
            <FavoriteCard data={data} selectId={id} />
          ))}
        </CardContianer>
      </div>
    </div>
  );
};
