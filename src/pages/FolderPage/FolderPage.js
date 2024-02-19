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
  const [selectName, setSelectName] = useState("전체");
  const [selectId, setSelectId] = useState(null);

  const handleLoadFolderList = async (option) => {
    const folderListdata = await getFolderList(option);
    setFolderList(folderListdata.data);
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
