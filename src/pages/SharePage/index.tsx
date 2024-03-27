import { useState, useEffect } from "react";
import { getFolder } from "../../api/api";
import { Link } from "../../types";
import {
  CardList,
  OnlyCard,
  FolderInfo,
  Layout,
  SearchBar,
} from "../../components";
import "./SharePage.css";

interface FolderInfos {
  owner: {
    profileImageSource: string;
    name: string;
  };
  name: string;
  links: Link[];
}

const SharePage = () => {
  const [folderData, setFolderData] = useState<FolderInfos>({} as FolderInfos);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleLoad = async () => {
    const { folder } = await getFolder();
    setFolderData(folder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const filteredLinks = folderData.links?.filter((link) =>
    link.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="sharePage">
        <FolderInfo profile={folderData} />
        <div className="sharePage-content">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CardList>
            {filteredLinks?.map((item) => (
              <OnlyCard key={item.id} items={item} {...item} />
            ))}
          </CardList>
        </div>
      </div>
    </Layout>
  );
};

export default SharePage;
