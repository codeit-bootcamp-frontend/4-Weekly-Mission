import { FolderInfo } from "ui/FolderInfo";
import { SearchBar } from "ui/SearchBar";
import { CardList } from "ui/CardList";
import { ReadOnlyCard } from "ui/ReadOnlyCard";
import { useGetFolder } from "data-access/useGetFolder";
import "./SharedPage.css";

export const SharedPage = () => {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <div className="SharedPage">
      <FolderInfo
        profileImage={profileImage}
        ownerName={ownerName}
        folderName={folderName}
      />
      <div className="SharedPage-items">
        <SearchBar />
        <CardList>
          {links?.map((link) => (
            <ReadOnlyCard key={link?.id} {...link} />
          ))}
        </CardList>
      </div>
    </div>
  );
};
