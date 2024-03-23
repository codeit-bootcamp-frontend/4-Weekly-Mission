import LinkSearchBar from './LinkSearchBar';
import '../styles/folderList.css';
import { useState, useEffect } from 'react';
import FolderSortBar from '../pages/FolderPage/components/FolderSortBar';
import FolderOptionBar from '../pages/FolderPage/components/FolderOptionBar';
import { USERS_LINKS_URL, USERS_FOLDERS_URL } from '../constants/urls';
import Card from './Card';
import useLinksData from '../hooks/useLinksData';
import useFoldersData from '../hooks/useFoldersData';
import { FolderAddButtonMobile } from '../pages/FolderPage/components/FolderAddButton';
import { ClickSortButton } from '../types/functionsType';

//폴더리스트 컴포넌트(폴더 페이지)

function FolderList() {
  //선택된 폴더 state (초기값은 "전체"폴더)
  const [selectedFolder, setSelectedFolder] = useState({ id: 1, name: '전체' });

  //URL State
  const [linksFetchUrl, setLinksFetchUrl] = useState(USERS_LINKS_URL);
  const [foldersFetchUrl, setFoldersFetchUrl] = useState(USERS_FOLDERS_URL);

  //커스텀 훅을 이용해서 데이터 Fetch
  const links = useLinksData(linksFetchUrl);
  const folders = useFoldersData(foldersFetchUrl);

  //FolderList -> FolderSortBar -> SortButton으로 내려주는 함수
  const handleSortButtonClick: ClickSortButton = (newSelectedFolder) => {
    setSelectedFolder(newSelectedFolder);
    const query =
      newSelectedFolder.id == 1 ? '' : `?folderId=${newSelectedFolder.id}`;
    setLinksFetchUrl(USERS_LINKS_URL + query);
  };

  return (
    <div className="folders-container">
      <div className="folders">
        <LinkSearchBar></LinkSearchBar>
        <div className="folder-list">
          <FolderSortBar
            folders={folders}
            handleClick={handleSortButtonClick}
            selectedId={selectedFolder.id}
          ></FolderSortBar>
          <FolderOptionBar
            text={selectedFolder.name}
            selectedFolderId={selectedFolder.id}
          ></FolderOptionBar>

          {
            //links의 유무에 따라서 랜더링
            links.length == 0 ? (
              <div className="none-list">
                <p className="none-list__text">저장된 링크가 없습니다</p>
              </div>
            ) : (
              <div className="folder-list__links">
                {links.map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    time={card.lastTimeString}
                    imgUrl={card.imgUrl}
                    title={card.title}
                    description={card.description}
                    date={card.uploadDate}
                    url={card.url}
                  />
                ))}
              </div>
            )
          }

          <FolderAddButtonMobile />
        </div>
      </div>
    </div>
  );
}
export default FolderList;
