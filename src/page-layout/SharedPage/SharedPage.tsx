import FolderInfo from "ui/FolderInfo/FolderInfo";
import SearchBar from "ui/SearchBar/SearchBar";
import { CardList } from "ui/CardList/CardList";
import Layout from "feature/Layout/Layout";
import { Card } from "ui/Card/Card";
import { useGetFolder } from "hooks/useGetFolder";
import "./SharedPage.css";

export const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <Layout>
      <div className="SharedPage">
        <FolderInfo
          profileImage={profileImage}
          ownerName={ownerName}
          folderName={folderName}
        />
        <div className="SharedPage-items">
          <SearchBar />
          <CardList>
            {links?.map((link) => <Card key={link?.id} {...link} />)}
          </CardList>
        </div>
      </div>
    </Layout>
  );
};
