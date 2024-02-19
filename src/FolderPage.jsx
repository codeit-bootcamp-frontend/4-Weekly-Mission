import { SharedPage } from "page-layout/SharedPage";
import "global.css";
import { SearchBar } from "ui/SearchBar";
import { CardList } from "ui/CardList";
import { useGetFolder } from "data-access/useGetFolder";
import { ReadOnlyCard } from "ui/ReadOnlyCard";
import FolderButtons from "ui/FolderButtons";
import { LinkAddBar } from "ui/LinkAddBar/LinkAddBar";

export default function FolderPage() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <div>
      <SharedPage
        folderInfo={
          <LinkAddBar
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={<SearchBar />}
        folderButtons={<FolderButtons />}
        cardList={
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </div>
  );
}
