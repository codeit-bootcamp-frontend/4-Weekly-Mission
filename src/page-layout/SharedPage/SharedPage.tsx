import FolderInfo from "ui/FolderInfo/FolderInfo";
import SearchBar from "ui/SearchBar/SearchBar";
import { CardList } from "ui/CardList/CardList";
import Layout from "feature/Layout/Layout";
import { Card } from "ui/Card/Card";
import { useGetFolder } from "hooks/useGetFolder";
import "./SharedPage.css";
import { ChangeEventHandler, useState } from "react";

export const SharedPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleInputClear = () => {
    setSearchTerm("");
  };

  const filteredLinks = links?.filter(
    (link) =>
      link.alt?.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      link.description
        ?.toLowerCase()
        .includes(searchTerm.trim().toLowerCase()) ||
      link.url.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  return (
    <Layout>
      <div className="SharedPage">
        <FolderInfo
          profileImage={profileImage}
          ownerName={ownerName}
          folderName={folderName}
        />
        <div className="SharedPage-items">
          <SearchBar
            handleInputChange={handleInputChange}
            handleInputClear={handleInputClear}
            searchTerm={searchTerm}
          />
          <CardList>
            {filteredLinks?.map((link) => <Card key={link?.id} {...link} />)}
          </CardList>
        </div>
      </div>
    </Layout>
  );
};
