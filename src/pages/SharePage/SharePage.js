import { useState, useEffect } from "react";
import { getFolder } from "../../api/api";
import {
  CardList,
  OnlyCard,
  FolderInfo,
  Layout,
  SearchBar,
} from "../../components";
import "./SharePage.css";

const SharePage = () => {
  const [folderData, setFolderData] = useState([]);

  const handleLoad = async () => {
    const { folder } = await getFolder();
    setFolderData(folder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <Layout>
      <div className="sharePage">
        <FolderInfo profile={folderData} />
        <div className="sharePage-content">
          <SearchBar />
          <CardList>
            {folderData.links?.map((item) => (
              <OnlyCard key={item.id} items={item} {...item} />
            ))}
          </CardList>
        </div>
      </div>
    </Layout>
  );
};

export default SharePage;
