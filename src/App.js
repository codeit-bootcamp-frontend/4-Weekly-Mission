import { Layout } from "./feature/Layout";
import { SharedPage } from "./page-layout/SharedPage";
import "./global.css";
import { FolderInfo } from "./ui/FolderInfo";
import { SearchBar } from "./ui/SearchBar";
import { CardList } from "./ui/CardList";
import { useGetFolder } from "data-access/useGetFolder";
import { ReadOnlyCard } from "ui/ReadOnlyCard";
import { GuideButton } from "ui/GuideButton";
import { AddFolder } from "ui/AddFolder";

function App() {
  const { data } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = data || {};

  return (
    <Layout>
      <SharedPage
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={<SearchBar />}
        guideButton={<GuideButton />}
        cardList={
          <CardList>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
      <AddFolder />
    </Layout>
  );
}

export default App;
