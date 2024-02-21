import { useState, useEffect } from "react";
import { getFolderList, getLink } from "../../api/api";
import {
  CardList,
  OnlyCard,
  FolderHeader,
  FolderList,
  FolderOption,
  Layout,
  SearchBar,
} from "../../components";

import "./FolderPage.css";

const FolderPage = ({ folderHeader, searchBar }) => {
  const [folderList, setFolderList] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectName, setSelectName] = useState("전체");
  const [selectId, setSelectId] = useState(null);

  const handleLoadFolderList = async (option) => {
    const folderListData = await getFolderList(option);
    setFolderList(folderListData.data);
  };

  const handleLoadLink = async (option) => {
    const linksData = await getLink(option);
    setLinks(linksData.data);
  };

  const handleSelectFolderList = ({ name, id }) => {
    setSelectName(name);
    setSelectId(id);
  };

  useEffect(() => {
    handleLoadFolderList({ userId: 1 });
    handleLoadLink({ userId: 1, folderId: selectId });
  }, [selectId]);

  return (
    <Layout>
      <div className="folderPage">
        <FolderHeader />
        <div className="folderPage-content">
          <SearchBar />

          <FolderList
            folderList={folderList}
            selectId={selectId}
            onSelectFolderList={handleSelectFolderList}
          />

          <FolderOption folderName={selectName} />

          {!links.length ? (
            <div className="folderPage-noLink">저장된 링크가 없습니다</div>
          ) : (
            <CardList>
              {links.map((item) => (
                <OnlyCard key={item.id} items={item} />
              ))}
            </CardList>
          )}

          <div className="folderPage-Link"></div>
        </div>
      </div>
    </Layout>
  );
};

export default FolderPage;
