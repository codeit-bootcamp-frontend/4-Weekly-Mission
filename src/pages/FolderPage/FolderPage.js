import { useState, useEffect } from "react";
import FolderList from "../../components/Folder/FolderList/FolderList";
import Layout from "../../components/Layout/Layout";
import { getFolderList } from "../../api/api";
import "./FolderPage.css";

const FolderPage = ({ folderHeader, searchBar }) => {
  const [folderList, setFolderList] = useState([]);
  const handleLoadFolderList = async () => {
    const folderListdata = await getFolderList({ userId: 1 });
    setFolderList(folderListdata.data);
  };

  useEffect(() => {
    handleLoadFolderList();
  }, []);

  return (
    <Layout>
      <div className="folderPage">
        {folderHeader}
        <div className="folderPage-content">
          {searchBar}
          <div className="folderPage-noLink">저장된 링크가 없습니다</div>
          <div className="folderPage-Link">
            <FolderList folderList={folderList} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FolderPage;
