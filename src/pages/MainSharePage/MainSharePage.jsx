import { useState } from "react";
import { useGetSampleFolder } from "../../hooks/useGetSampleFolder";
import Layout from "../../layout/Layout";
import FolderInfo from "../../components/FolderInfo/FolderInfo";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardInventory from "../../components/CardInventory/CardInventory";
import ShareLinkCard from "../../components/ShareLinkCard/ShareLinkCard";
import "./MainSharePage.css";

const MainSharePage = () => {
  const { data } = useGetSampleFolder();
  const { profileImage, ownerName, folderName, links } = data || {};
  const [searchWord, setSearchWord] = useState("");

  const searchedLinksData = links?.filter(
    (link) =>
      link.url?.includes(searchWord) ||
      link.title?.includes(searchWord) ||
      link.description?.includes(searchWord),
  );

  return (
    <Layout>
      <div className="MainSharePage">
        <FolderInfo profileImage={profileImage} ownerName={ownerName} folderName={folderName} />
        <div className="MainSharePageItems">
          <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
          <CardInventory>
            {searchedLinksData?.map((linkCard) => (
              <ShareLinkCard key={linkCard.id} {...linkCard} />
            ))}
          </CardInventory>
        </div>
      </div>
    </Layout>
  );
};

export default MainSharePage;
