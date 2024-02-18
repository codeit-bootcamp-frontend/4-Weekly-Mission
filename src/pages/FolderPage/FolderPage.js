import { useState, useEffect } from "react";
import { getFolderList, getLink } from "../../api/api";
import FolderList from "../../components/Folder/FolderList/FolderList";
import Layout from "../../components/Layout/Layout";
import OnlyCard from "../../components/Card/OnlyCard/OnlyCard";
import CardList from "../../components/Card/CardList/CardList";
import "./FolderPage.css";

const FolderPage = ({ folderHeader, searchBar }) => {
  const [folderList, setFolderList] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectId, setSelectId] = useState(null);

  const handleLoadFolderList = async () => {
    const folderListdata = await getFolderList({ userId: 1 });
    setFolderList(folderListdata.data);
  };

  const handleLoadLink = async () => {
    const linksData = await getLink({ userId: 1, folderId: selectId });
    setLinks(linksData.data);
  };

  const handleSelectFolderList = ({ id }) => {
    setSelectId(id);
  };

  useEffect(() => {
    handleLoadFolderList();
    handleLoadLink();
  }, [selectId]);

  return (
    <Layout>
      <div className="folderPage">
        {folderHeader}
        <div className="folderPage-content">
          {searchBar}

          <FolderList
            folderList={folderList}
            selectId={selectId}
            onSelectFolderList={handleSelectFolderList}
          />

          {links.length === 0 ? (
            <div className="folderPage-noLink">저장된 링크가 없습니다</div>
          ) : (
            <CardList>
              {links?.map((item) => (
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
